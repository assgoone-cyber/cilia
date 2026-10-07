/* Cilia vocal auto-tune AudioWorklet.
 *
 * Pitch detection: YIN (cumulative mean normalised difference) on a 2×
 * decimated copy of the input, every `hop` samples, with an RMS gate.
 * Correction: nearest note allowed by a 12-bit key-relative scale mask
 * (bit k = pitch class key+k), scaled by `amount`, smoothed with `speed`
 * (retune time in seconds; 0 = instant / robotic "T-Pain"), plus a fixed
 * `shift` in semitones (Deep / Chipmunk presets).
 * Pitch shifting: two-tap crossfaded delay line (sin² windows sum to 1).
 * The same processor runs live (mic monitoring) and inside an
 * OfflineAudioContext to render recorded takes, so exports match.
 * Posts { f0, target, corr } to the port ~15 × per second.
 */
class CiliaAutoTune extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: 'amount', defaultValue: 1, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'speed', defaultValue: 0.05, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'key', defaultValue: 0, minValue: 0, maxValue: 11, automationRate: 'k-rate' },
      { name: 'mask', defaultValue: 2741, minValue: 0, maxValue: 4095, automationRate: 'k-rate' },
      { name: 'shift', defaultValue: 0, minValue: -24, maxValue: 24, automationRate: 'k-rate' },
      { name: 'tune', defaultValue: 1, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
    ];
  }

  constructor() {
    super();
    const sr = sampleRate;
    this.size = 8192;
    this.ring = new Float32Array(this.size);
    this.w = 0;
    // detection (decimated ×2)
    this.dsr = sr / 2;
    this.W = Math.round(this.dsr * 0.021); // ~21 ms integration window
    this.tauMax = Math.min(Math.round(this.dsr / 70), 900); // down to 70 Hz
    this.tauMin = Math.round(this.dsr / 1100); // up to 1.1 kHz
    this.dec = new Float32Array(this.W + this.tauMax + 4);
    this.diff = new Float32Array(this.tauMax + 2);
    this.hop = 256;
    this.sinceHop = 0;
    // shifter
    this.N = Math.round(sr * 0.04); // 40 ms grain
    this.phase = 0;
    this.corr = 0; // applied correction (semitones)
    this.targetCorr = 0;
    this.f0 = 0;
    this.target = 0;
    this.sinceMsg = 0;
    this.voiced = false;
    this.port.onmessage = () => {};
  }

  detect() {
    const W = this.W, tauMax = this.tauMax, n = W + tauMax;
    // newest 2n input samples → n decimated samples
    let r = (this.w - 2 * n + this.size * 4) % this.size;
    let energy = 0;
    for (let i = 0; i < n; i++) {
      const a = this.ring[r], b = this.ring[(r + 1) % this.size];
      const v = (a + b) * 0.5;
      this.dec[i] = v;
      energy += v * v;
      r = (r + 2) % this.size;
    }
    const rms = Math.sqrt(energy / n);
    if (rms < 0.004) return 0;
    const x = this.dec, d = this.diff;
    d[0] = 1;
    let run = 0;
    let best = -1;
    for (let tau = 1; tau <= tauMax; tau++) {
      let s = 0;
      for (let j = 0; j < W; j++) {
        const q = x[j] - x[j + tau];
        s += q * q;
      }
      run += s;
      d[tau] = run > 0 ? (s * tau) / run : 1;
      if (best < 0 && tau > this.tauMin && d[tau] < 0.15) {
        // walk to the local minimum
        while (tau + 1 <= tauMax) {
          let s2 = 0;
          const t2 = tau + 1;
          for (let j = 0; j < W; j++) {
            const q = x[j] - x[j + t2];
            s2 += q * q;
          }
          const run2 = run + s2;
          const v2 = run2 > 0 ? (s2 * t2) / run2 : 1;
          d[t2] = v2;
          if (v2 >= d[tau]) break;
          run = run2;
          tau = t2;
          d[tau] = v2;
        }
        best = tau;
        break;
      }
    }
    if (best < 0) return 0;
    // parabolic interpolation
    let t = best;
    if (best > 1 && best < tauMax) {
      const s0 = d[best - 1], s1 = d[best], s2 = d[best + 1];
      const den = s0 + s2 - 2 * s1;
      if (Math.abs(den) > 1e-9) t = best + (0.5 * (s0 - s2)) / den;
    }
    return this.dsr / t;
  }

  nearestAllowed(m, key, mask) {
    if (!mask) return Math.round(m);
    let best = Math.round(m), bestD = Infinity;
    for (let c = Math.floor(m) - 7; c <= Math.ceil(m) + 7; c++) {
      const pc = (((c - key) % 12) + 12) % 12;
      if (!((mask >> pc) & 1)) continue;
      const dd = Math.abs(c - m);
      if (dd < bestD) {
        bestD = dd;
        best = c;
      }
    }
    return best;
  }

  process(inputs, outputs, params) {
    const input = inputs[0] && inputs[0][0];
    const out = outputs[0];
    const o0 = out[0];
    if (!o0) return true;
    const len = o0.length;
    const amount = params.amount[0];
    const speed = params.speed[0];
    const key = Math.round(params.key[0]);
    const mask = Math.round(params.mask[0]);
    const shift = params.shift[0];
    const tune = params.tune[0] >= 0.5;
    const size = this.size, ring = this.ring, N = this.N;
    for (let i = 0; i < len; i++) {
      ring[this.w] = input ? input[i] : 0;
      this.w = (this.w + 1) % size;
    }
    this.sinceHop += len;
    if (this.sinceHop >= this.hop) {
      this.sinceHop = 0;
      const f = tune ? this.detect() : 0;
      this.f0 = f;
      if (f > 0) {
        const m = 69 + 12 * Math.log2(f / 440);
        const tgt = this.nearestAllowed(m, key, mask);
        this.target = tgt;
        this.targetCorr = (tgt - m) * amount;
        this.voiced = true;
      } else {
        this.voiced = false;
        this.targetCorr = 0;
      }
    }
    // smooth the correction (per block)
    const blockSec = len / sampleRate;
    const k = speed <= 0.002 ? 1 : 1 - Math.exp(-blockSec / speed);
    // when unvoiced, hold the last correction briefly instead of snapping back
    if (this.voiced) this.corr += (this.targetCorr - this.corr) * k;
    else this.corr += (0 - this.corr) * Math.min(1, blockSec / 0.08);
    const ratio = Math.pow(2, (this.corr + shift) / 12);
    const dphi = (1 - ratio) / N;
    const idle = Math.abs(1 - ratio) < 2e-4;
    for (let i = 0; i < len; i++) {
      if (idle) {
        // park tap 1 at zero gain (tap 2 alone at N/2 delay) to avoid comb filtering
        const target = this.phase < 0.5 ? 0 : 1;
        const stepMax = 0.002 / N;
        const dd = target - this.phase;
        this.phase += Math.abs(dd) < stepMax ? dd : Math.sign(dd) * stepMax;
      } else this.phase += dphi;
      if (this.phase >= 1) this.phase -= 1;
      else if (this.phase < 0) this.phase += 1;
      const p1 = this.phase;
      const p2 = (p1 + 0.5) % 1;
      const g1 = Math.sin(Math.PI * p1) ** 2;
      const g2 = 1 - g1;
      // write index of sample i (ring already holds this block)
      const wi = this.w - len + i;
      const y = g1 * this.read(wi - (p1 * N + 2)) + g2 * this.read(wi - (p2 * N + 2));
      for (let c = 0; c < out.length; c++) out[c][i] = y;
    }
    this.sinceMsg += len;
    if (this.sinceMsg >= sampleRate / 15) {
      this.sinceMsg = 0;
      this.port.postMessage({ f0: this.f0, target: this.target, corr: this.corr });
    }
    return true;
  }

  read(pos) {
    const size = this.size;
    const p = ((pos % size) + size) % size;
    const i0 = Math.floor(p);
    const fr = p - i0;
    const a = this.ring[i0];
    const b = this.ring[(i0 + 1) % size];
    return a + (b - a) * fr;
  }
}

registerProcessor('cilia-autotune', CiliaAutoTune);
