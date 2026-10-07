// Cilia granular processor (AudioWorklet). Records input into a 2 s ring
// buffer and plays Hann-windowed grains read from the recent past.
class CiliaGranular extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: 'grain', defaultValue: 90, minValue: 15, maxValue: 400, automationRate: 'k-rate' },
      { name: 'density', defaultValue: 24, minValue: 2, maxValue: 80, automationRate: 'k-rate' },
      { name: 'pitch', defaultValue: 0, minValue: -24, maxValue: 24, automationRate: 'k-rate' },
      { name: 'spray', defaultValue: 0.3, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
      { name: 'stereo', defaultValue: 0.6, minValue: 0, maxValue: 1, automationRate: 'k-rate' },
    ];
  }
  constructor() {
    super();
    this.size = Math.floor(sampleRate * 2);
    this.buf = new Float32Array(this.size);
    this.w = 0;
    this.grains = [];
    this.untilNext = 0;
    this.seed = 987654321;
  }
  rnd() {
    this.seed = (this.seed * 1664525 + 1013904223) >>> 0;
    return this.seed / 4294967296;
  }
  process(inputs, outputs, params) {
    const input = inputs[0];
    const out = outputs[0];
    const L = out[0];
    const R = out[1] || out[0];
    const n = L.length;
    const inL = input && input[0];
    const inR = input && input[1];
    const grainLen = Math.max(32, Math.floor((params.grain[0] / 1000) * sampleRate));
    const interval = sampleRate / params.density[0];
    const rate = Math.pow(2, params.pitch[0] / 12);
    const spray = params.spray[0] * sampleRate;
    const stereo = params.stereo[0];
    for (let i = 0; i < n; i++) {
      const x = inL ? (inR ? (inL[i] + inR[i]) * 0.5 : inL[i]) : 0;
      this.buf[this.w] = x;
      this.w = (this.w + 1) % this.size;
      if (--this.untilNext <= 0) {
        this.untilNext = interval * (0.6 + this.rnd() * 0.8);
        const back = grainLen * Math.max(1, rate) + 64 + this.rnd() * spray;
        if (this.grains.length < 96) {
          const pan = (this.rnd() * 2 - 1) * stereo;
          this.grains.push({ pos: this.w - back, t: 0, len: grainLen, gl: Math.cos(((pan + 1) * Math.PI) / 4), gr: Math.sin(((pan + 1) * Math.PI) / 4) });
        }
      }
      let l = 0;
      let r = 0;
      for (let g = this.grains.length - 1; g >= 0; g--) {
        const gr = this.grains[g];
        const env = 0.5 - 0.5 * Math.cos((2 * Math.PI * gr.t) / gr.len);
        let p = gr.pos % this.size;
        if (p < 0) p += this.size;
        const i0 = Math.floor(p);
        const f = p - i0;
        const s = this.buf[i0] * (1 - f) + this.buf[(i0 + 1) % this.size] * f;
        l += s * env * gr.gl;
        r += s * env * gr.gr;
        gr.pos += rate;
        if (++gr.t >= gr.len) this.grains.splice(g, 1);
      }
      const norm = 1 / Math.sqrt(1 + (grainLen / interval));
      L[i] = l * norm;
      if (R !== L) R[i] = r * norm;
    }
    return true;
  }
}
registerProcessor('cilia-granular', CiliaGranular);
