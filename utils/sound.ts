// Simple synth to generate 3-tone arcade sounds
export const playArcadeSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    // Randomize waveform slightly for variety
    const waves: OscillatorType[] = ['square', 'sawtooth', 'triangle'];
    oscillator.type = waves[Math.floor(Math.random() * waves.length)];

    const now = ctx.currentTime;

    // Base frequency between 220Hz and 880Hz
    const baseFreq = 220 + Math.random() * 660;

    // Play 3 distinct tones (arpeggio style)
    oscillator.frequency.setValueAtTime(baseFreq, now);
    oscillator.frequency.setValueAtTime(baseFreq * 1.5, now + 0.1); // Fifth
    oscillator.frequency.setValueAtTime(baseFreq * 2, now + 0.2); // Octave

    // Envelope
    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    oscillator.start(now);
    oscillator.stop(now + 0.4);
  } catch (e) {
    console.error("Audio play failed", e);
  }
};

export const playHoverSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}