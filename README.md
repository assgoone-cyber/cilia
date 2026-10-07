# Cilia — microscopic beat laboratory (web build)

**Open it:** https://assgoone-cyber.github.io/cilia/

Cilia is a browser music studio for your phone. **Easy mode** (the default):
tap a style to get a ready-made beat, then play drum pads, a keyboard with
scale lock and chord buttons, guitar strums, 60 instruments, 110 loops that
always fit your song, synths with simple knobs, and record vocals with
auto-tune or a robot voice synth. **Pro** mode keeps the full studio — step
sequencer (Slide), playlist (Tray), piano roll (Pitch), mixer with FX (Stage),
synth/sampler (Prep), automation, recording and MIDI.

This repository contains **only the compiled static site** published with
GitHub Pages. The source code is developed in a separate repository.

## Install on your phone

Cilia is a Progressive Web App: once installed it opens full-screen and works
offline (the app is cached on first visit; each sound is cached the first time
you use it).

- **Android (Chrome / Edge / Samsung Internet):** open the link, tap
  **Install Cilia** in the app's *More* tab (or the browser menu ⋮ ›
  *Install app* / *Add to Home screen*).
- **iPhone / iPad (Safari):** open the link in Safari, tap **Share** ›
  **Add to Home Screen**.

Tap a style on the start screen (or **Focus** in Pro mode) — that tap also
unlocks audio (browsers only allow sound after a tap).

### iPhone notes
- If you hear nothing, turn the volume up and flip the **Ring/Silent** switch
  to Ring (older iOS versions mute web audio in Silent mode; iOS 17+ honours
  Cilia's "playback" audio session).
- Web MIDI is not available in Safari on iOS; play the on-screen keys instead.
- Audio recording asks for microphone permission.

## Licenses

- Bundled audio: drum kits, loops and found sounds are **CC0 / public domain**;
  the 60 melodic instruments come from the **FluidR3_GM** SoundFont by Frank Wen
  (MIT) as rendered by Benjamin Gleitzman's midi-js-soundfonts (CC BY 3.0) —
  see [`LICENSES/SAMPLES.md`](LICENSES/SAMPLES.md) for per-file provenance and
  the license texts in `LICENSES/`.
- Third-party code in the bundle: see [`LICENSES/THIRD_PARTY.md`](LICENSES/THIRD_PARTY.md).
