# Cilia — microscopic beat laboratory (web build)

**Open it:** https://assgoone-cyber.github.io/cilia/

Cilia is a browser music studio — step sequencer (Slide), playlist (Tray),
piano roll (Pitch), mixer with FX (Stage), synth/sampler (Prep), automation,
recording and MIDI — built around tiny CC0 found sounds and a brightfield
microscope look.

This repository contains **only the compiled static site** published with
GitHub Pages. The source code is developed in a separate repository.

## Install on your phone

Cilia is a Progressive Web App: once installed it opens full-screen and works
offline (the app and all bundled samples are cached on first visit).

- **Android (Chrome / Edge / Samsung Internet):** open the link, tap
  **Install Cilia** in the app's *More* tab (or the browser menu ⋮ ›
  *Install app* / *Add to Home screen*).
- **iPhone / iPad (Safari):** open the link in Safari, tap **Share** ›
  **Add to Home Screen**.

Tap **Focus** to start — that tap also unlocks audio (browsers only allow
sound after a tap).

### iPhone notes
- If you hear nothing, turn the volume up and flip the **Ring/Silent** switch
  to Ring (older iOS versions mute web audio in Silent mode; iOS 17+ honours
  Cilia's "playback" audio session).
- Web MIDI is not available in Safari on iOS; play the on-screen keys instead.
- Audio recording asks for microphone permission.

## Licenses

- Bundled audio samples: **CC0 / public domain** — see
  [`LICENSES/SAMPLES.md`](LICENSES/SAMPLES.md) for per-file provenance.
- Third-party code in the bundle: see [`LICENSES/THIRD_PARTY.md`](LICENSES/THIRD_PARTY.md).
