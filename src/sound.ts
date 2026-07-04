// Procedural ambient audio — synthesized, no assets.
let ctx: AudioContext | null = null;
let current: { stop: () => void } | null = null;

function ac(): AudioContext { return (ctx ??= new AudioContext()); }

function noiseBuffer(a: AudioContext): AudioBuffer {
  const b = a.createBuffer(1, a.sampleRate * 2, a.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

/** wind/rain/dust ambience per weather kind; null = silence (vacuum!) */
export function ambient(kind: 'rain' | 'dust' | 'methane-rain' | 'snow' | 'wind' | null) {
  current?.stop();
  current = null;
  if (!kind) return;
  try {
    const a = ac();
    a.resume();
    const src = a.createBufferSource();
    src.buffer = noiseBuffer(a);
    src.loop = true;
    const filt = a.createBiquadFilter();
    const gain = a.createGain();
    const lfo = a.createOscillator();
    const lfoGain = a.createGain();
    filt.type = kind === 'rain' || kind === 'methane-rain' ? 'highpass' : 'lowpass';
    filt.frequency.value = { rain: 1200, 'methane-rain': 600, dust: 300, snow: 150, wind: 220 }[kind];
    gain.gain.value = { rain: 0.06, 'methane-rain': 0.04, dust: 0.05, snow: 0.015, wind: 0.04 }[kind];
    // slow gusting
    lfo.frequency.value = 0.13;
    lfoGain.gain.value = gain.gain.value * 0.6;
    lfo.connect(lfoGain).connect(gain.gain);
    src.connect(filt).connect(gain).connect(a.destination);
    src.start(); lfo.start();
    current = { stop: () => { try { src.stop(); lfo.stop(); gain.disconnect(); } catch {} } };
  } catch { /* autoplay blocked until gesture */ }
}
