// Cilia Press — key-input (sidechain) compressor. Input 0 = signal, input 1 = key.
// The detector follows the KEY level (peak, attack/release smoothing); gain
// reduction from threshold/ratio/knee (capped by range) is applied to the signal.
class CiliaSidechain extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: 'threshold', defaultValue: -24, minValue: -80, maxValue: 0, automationRate: 'k-rate' },
      { name: 'ratio', defaultValue: 8, minValue: 1, maxValue: 40, automationRate: 'k-rate' },
      { name: 'attack', defaultValue: 0.005, minValue: 0.0001, maxValue: 1, automationRate: 'k-rate' },
      { name: 'release', defaultValue: 0.15, minValue: 0.005, maxValue: 3, automationRate: 'k-rate' },
      { name: 'knee', defaultValue: 6, minValue: 0, maxValue: 40, automationRate: 'k-rate' },
      { name: 'range', defaultValue: 24, minValue: 0, maxValue: 60, automationRate: 'k-rate' },
      { name: 'makeup', defaultValue: 1, minValue: 0, maxValue: 20, automationRate: 'k-rate' },
    ];
  }
  constructor() {
    super();
    this.env = 0;
    this.gr = 0;
    this.n = 0;
  }
  process(inputs, outputs, p) {
    const main = inputs[0] || [];
    const key = inputs[1] || [];
    const out = outputs[0];
    const len = out[0] ? out[0].length : 128;
    const thr = p.threshold[0], ratio = p.ratio[0], knee = p.knee[0], range = p.range[0], makeup = p.makeup[0];
    const aC = Math.exp(-1 / (Math.max(1e-4, p.attack[0]) * sampleRate));
    const rC = Math.exp(-1 / (Math.max(5e-3, p.release[0]) * sampleRate));
    const slope = 1 - 1 / ratio;
    let env = this.env;
    let maxGr = 0;
    for (let i = 0; i < len; i++) {
      let k = 0;
      for (let c = 0; c < key.length; c++) { const v = Math.abs(key[c][i]); if (v > k) k = v; }
      env = k > env ? aC * env + (1 - aC) * k : rC * env + (1 - rC) * k;
      const db = 20 * Math.log10(env + 1e-9);
      const over = db - thr;
      let gr;
      if (knee > 0 && Math.abs(over) < knee / 2) gr = (slope * (over + knee / 2) ** 2) / (2 * knee);
      else gr = over > 0 ? over * slope : 0;
      if (gr > range) gr = range;
      if (gr > maxGr) maxGr = gr;
      const g = Math.pow(10, -gr / 20) * makeup;
      for (let c = 0; c < out.length; c++) {
        const src = main[c] || main[0];
        out[c][i] = src ? src[i] * g : 0;
      }
    }
    this.env = env;
    this.gr = Math.max(maxGr, this.gr * 0.9);
    if (++this.n % 16 === 0) this.port.postMessage(this.gr);
    return true;
  }
}
registerProcessor('cilia-sidechain', CiliaSidechain);
