# Bundled sample licenses & provenance

Every audio file shipped with Cilia is either **CC0 / public domain** or **explicitly redistributable with attribution** (MIT / CC BY). No commercial packs (Splice, Loopmasters, SoundGhost, Roland Cloud, MusicRadar …), no commercial album rips and no Matmos / Vespertine audio are included. User recordings and uploads stay on the user's device and are never published.

Machine-readable provenance for every file (id, path, license, source URL, author) is in `samples/manifest.json`.

| Pack | Files | Size | License | Source |
|---|---|---|---|---|
| Specimens (found sounds, one-shots) | 37 | 16.2 MB | CC0 1.0 | Freesound / MckSamplePacks / sample-pi (see below) |
| Drum kits (9 generated kits × 16 pads) | 144 | 2.2 MB | CC0 1.0 | original synthesis, `scripts/gen-drums.mjs` |
| Melodic instruments (60 General MIDI instruments) | 795 | 14.8 MB | CC BY 3.0 + MIT | FluidR3_GM via midi-js-soundfonts |

The 10th drum kit ("Microscope") re-uses 16 of the CC0 specimens listed below.

## Attribution — FluidR3_GM instruments

- **FluidR3_GM.sf2** © 2000–2002, 2008 Frank Wen, © 2008 Toby Smithe — released under the **MIT license** (full text in `LICENSES/FluidR3_GM-MIT.txt`).
- **MP3 renders**: [midi-js-soundfonts](https://github.com/gleitz/midi-js-soundfonts) by Benjamin Gleitzman, "Fluid Soundfont … Released under [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/us/)"; repository code © 2012 Benjamin Gleitzman, MIT (full text in `LICENSES/midi-js-soundfonts-MIT.txt`).
- Changes made by Cilia: a subset of notes (every 3rd/4th semitone) was downloaded and leading/trailing silence trimmed with a lossless stream copy. Files are otherwise unmodified.

| Instrument | Folder | Notes (MIDI) | Source URL pattern |
|---|---|---|---|
| Grand Piano | `samples/inst/acoustic_grand_piano/` | 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/<Note>.mp3 |
| Bright Piano | `samples/inst/bright_acoustic_piano/` | 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/bright_acoustic_piano-mp3/<Note>.mp3 |
| Honky-tonk Piano | `samples/inst/honkytonk_piano/` | 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/honkytonk_piano-mp3/<Note>.mp3 |
| Electric Piano | `samples/inst/electric_piano_1/` | 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_piano_1-mp3/<Note>.mp3 |
| FM Electric Piano | `samples/inst/electric_piano_2/` | 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_piano_2-mp3/<Note>.mp3 |
| Harpsichord | `samples/inst/harpsichord/` | 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/harpsichord-mp3/<Note>.mp3 |
| Clavinet | `samples/inst/clavinet/` | 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/clavinet-mp3/<Note>.mp3 |
| Jazz Organ | `samples/inst/drawbar_organ/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/drawbar_organ-mp3/<Note>.mp3 |
| Rock Organ | `samples/inst/rock_organ/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/rock_organ-mp3/<Note>.mp3 |
| Church Organ | `samples/inst/church_organ/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/church_organ-mp3/<Note>.mp3 |
| Accordion | `samples/inst/accordion/` | 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/accordion-mp3/<Note>.mp3 |
| Nylon Guitar | `samples/inst/acoustic_guitar_nylon/` | 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_guitar_nylon-mp3/<Note>.mp3 |
| Steel Guitar | `samples/inst/acoustic_guitar_steel/` | 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_guitar_steel-mp3/<Note>.mp3 |
| Clean Electric Guitar | `samples/inst/electric_guitar_clean/` | 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_guitar_clean-mp3/<Note>.mp3 |
| Muted Guitar | `samples/inst/electric_guitar_muted/` | 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_guitar_muted-mp3/<Note>.mp3 |
| Overdrive Guitar | `samples/inst/overdriven_guitar/` | 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/overdriven_guitar-mp3/<Note>.mp3 |
| Distortion Guitar | `samples/inst/distortion_guitar/` | 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/distortion_guitar-mp3/<Note>.mp3 |
| Upright Bass | `samples/inst/acoustic_bass/` | 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_bass-mp3/<Note>.mp3 |
| Finger Bass | `samples/inst/electric_bass_finger/` | 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_bass_finger-mp3/<Note>.mp3 |
| Picked Bass | `samples/inst/electric_bass_pick/` | 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/electric_bass_pick-mp3/<Note>.mp3 |
| Fretless Bass | `samples/inst/fretless_bass/` | 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/fretless_bass-mp3/<Note>.mp3 |
| Slap Bass | `samples/inst/slap_bass_1/` | 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/slap_bass_1-mp3/<Note>.mp3 |
| Synth Bass | `samples/inst/synth_bass_1/` | 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_bass_1-mp3/<Note>.mp3 |
| Rubber Synth Bass | `samples/inst/synth_bass_2/` | 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_bass_2-mp3/<Note>.mp3 |
| Strings | `samples/inst/string_ensemble_1/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/string_ensemble_1-mp3/<Note>.mp3 |
| Violin | `samples/inst/violin/` | 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/violin-mp3/<Note>.mp3 |
| Cello | `samples/inst/cello/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/cello-mp3/<Note>.mp3 |
| Pizzicato Strings | `samples/inst/pizzicato_strings/` | 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pizzicato_strings-mp3/<Note>.mp3 |
| Harp | `samples/inst/orchestral_harp/` | 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/orchestral_harp-mp3/<Note>.mp3 |
| Synth Strings | `samples/inst/synth_strings_1/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_strings_1-mp3/<Note>.mp3 |
| Trumpet | `samples/inst/trumpet/` | 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/trumpet-mp3/<Note>.mp3 |
| Trombone | `samples/inst/trombone/` | 40, 44, 48, 52, 56, 60, 64, 68, 72 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/trombone-mp3/<Note>.mp3 |
| French Horn | `samples/inst/french_horn/` | 40, 44, 48, 52, 56, 60, 64, 68, 72, 76 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/french_horn-mp3/<Note>.mp3 |
| Brass Section | `samples/inst/brass_section/` | 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/brass_section-mp3/<Note>.mp3 |
| Synth Brass | `samples/inst/synth_brass_1/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_brass_1-mp3/<Note>.mp3 |
| Alto Sax | `samples/inst/alto_sax/` | 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/alto_sax-mp3/<Note>.mp3 |
| Tenor Sax | `samples/inst/tenor_sax/` | 44, 48, 52, 56, 60, 64, 68, 72, 76 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/tenor_sax-mp3/<Note>.mp3 |
| Flute | `samples/inst/flute/` | 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/flute-mp3/<Note>.mp3 |
| Clarinet | `samples/inst/clarinet/` | 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/clarinet-mp3/<Note>.mp3 |
| Pan Flute | `samples/inst/pan_flute/` | 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pan_flute-mp3/<Note>.mp3 |
| Choir Aahs | `samples/inst/choir_aahs/` | 48, 52, 56, 60, 64, 68, 72, 76, 80 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/choir_aahs-mp3/<Note>.mp3 |
| Voice Oohs | `samples/inst/voice_oohs/` | 48, 52, 56, 60, 64, 68, 72, 76, 80 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/voice_oohs-mp3/<Note>.mp3 |
| Synth Choir | `samples/inst/synth_choir/` | 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/synth_choir-mp3/<Note>.mp3 |
| Warm Pad | `samples/inst/pad_2_warm/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_2_warm-mp3/<Note>.mp3 |
| Polysynth Pad | `samples/inst/pad_3_polysynth/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_3_polysynth-mp3/<Note>.mp3 |
| New Age Pad | `samples/inst/pad_1_new_age/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_1_new_age-mp3/<Note>.mp3 |
| Halo Pad | `samples/inst/pad_7_halo/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_7_halo-mp3/<Note>.mp3 |
| Sweep Pad | `samples/inst/pad_8_sweep/` | 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/pad_8_sweep-mp3/<Note>.mp3 |
| Marimba | `samples/inst/marimba/` | 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/marimba-mp3/<Note>.mp3 |
| Vibraphone | `samples/inst/vibraphone/` | 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/vibraphone-mp3/<Note>.mp3 |
| Glockenspiel | `samples/inst/glockenspiel/` | 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/glockenspiel-mp3/<Note>.mp3 |
| Music Box | `samples/inst/music_box/` | 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/music_box-mp3/<Note>.mp3 |
| Celesta | `samples/inst/celesta/` | 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/celesta-mp3/<Note>.mp3 |
| Kalimba | `samples/inst/kalimba/` | 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/kalimba-mp3/<Note>.mp3 |
| Steel Drums | `samples/inst/steel_drums/` | 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/steel_drums-mp3/<Note>.mp3 |
| Sitar | `samples/inst/sitar/` | 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/sitar-mp3/<Note>.mp3 |
| Koto | `samples/inst/koto/` | 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/koto-mp3/<Note>.mp3 |
| Harmonica | `samples/inst/harmonica/` | 60, 64, 68, 72, 76, 80, 84 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/harmonica-mp3/<Note>.mp3 |
| Square Lead | `samples/inst/lead_1_square/` | 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_1_square-mp3/<Note>.mp3 |
| Saw Lead | `samples/inst/lead_2_sawtooth/` | 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96 | https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/lead_2_sawtooth-mp3/<Note>.mp3 |

## Drum kits (generated, CC0)

Synthesised from scratch in JavaScript by `scripts/gen-drums.mjs` (oscillators, filtered noise, envelopes, a small room reverb) and encoded to MP3 — no recordings of third-party material. Dedicated to the public domain under CC0 1.0.

| Kit | Files |
|---|---|
| 808 Classic | `samples/kits/808/0.mp3` (Kick), `samples/kits/808/1.mp3` (Kick 2), `samples/kits/808/2.mp3` (Snare), `samples/kits/808/3.mp3` (Clap), `samples/kits/808/4.mp3` (Closed hat), `samples/kits/808/5.mp3` (Open hat), `samples/kits/808/6.mp3` (Shaker), `samples/kits/808/7.mp3` (Rim), `samples/kits/808/8.mp3` (Low tom), `samples/kits/808/9.mp3` (Mid tom), `samples/kits/808/10.mp3` (High tom), `samples/kits/808/11.mp3` (Crash), `samples/kits/808/12.mp3` (Ride), `samples/kits/808/13.mp3` (Perc 1), `samples/kits/808/14.mp3` (Perc 2), `samples/kits/808/15.mp3` (FX) |
| 909 House | `samples/kits/909/0.mp3` (Kick), `samples/kits/909/1.mp3` (Kick 2), `samples/kits/909/2.mp3` (Snare), `samples/kits/909/3.mp3` (Clap), `samples/kits/909/4.mp3` (Closed hat), `samples/kits/909/5.mp3` (Open hat), `samples/kits/909/6.mp3` (Shaker), `samples/kits/909/7.mp3` (Rim), `samples/kits/909/8.mp3` (Low tom), `samples/kits/909/9.mp3` (Mid tom), `samples/kits/909/10.mp3` (High tom), `samples/kits/909/11.mp3` (Crash), `samples/kits/909/12.mp3` (Ride), `samples/kits/909/13.mp3` (Perc 1), `samples/kits/909/14.mp3` (Perc 2), `samples/kits/909/15.mp3` (FX) |
| Trap | `samples/kits/trap/0.mp3` (Kick), `samples/kits/trap/1.mp3` (Kick 2), `samples/kits/trap/2.mp3` (Snare), `samples/kits/trap/3.mp3` (Clap), `samples/kits/trap/4.mp3` (Closed hat), `samples/kits/trap/5.mp3` (Open hat), `samples/kits/trap/6.mp3` (Shaker), `samples/kits/trap/7.mp3` (Rim), `samples/kits/trap/8.mp3` (Low tom), `samples/kits/trap/9.mp3` (Mid tom), `samples/kits/trap/10.mp3` (High tom), `samples/kits/trap/11.mp3` (Crash), `samples/kits/trap/12.mp3` (Ride), `samples/kits/trap/13.mp3` (Perc 1), `samples/kits/trap/14.mp3` (Perc 2), `samples/kits/trap/15.mp3` (FX) |
| Lo-fi Dusty | `samples/kits/lofi/0.mp3` (Kick), `samples/kits/lofi/1.mp3` (Kick 2), `samples/kits/lofi/2.mp3` (Snare), `samples/kits/lofi/3.mp3` (Clap), `samples/kits/lofi/4.mp3` (Closed hat), `samples/kits/lofi/5.mp3` (Open hat), `samples/kits/lofi/6.mp3` (Shaker), `samples/kits/lofi/7.mp3` (Rim), `samples/kits/lofi/8.mp3` (Low tom), `samples/kits/lofi/9.mp3` (Mid tom), `samples/kits/lofi/10.mp3` (High tom), `samples/kits/lofi/11.mp3` (Crash), `samples/kits/lofi/12.mp3` (Ride), `samples/kits/lofi/13.mp3` (Perc 1), `samples/kits/lofi/14.mp3` (Perc 2), `samples/kits/lofi/15.mp3` (FX) |
| Boom Bap | `samples/kits/boombap/0.mp3` (Kick), `samples/kits/boombap/1.mp3` (Kick 2), `samples/kits/boombap/2.mp3` (Snare), `samples/kits/boombap/3.mp3` (Clap), `samples/kits/boombap/4.mp3` (Closed hat), `samples/kits/boombap/5.mp3` (Open hat), `samples/kits/boombap/6.mp3` (Shaker), `samples/kits/boombap/7.mp3` (Rim), `samples/kits/boombap/8.mp3` (Low tom), `samples/kits/boombap/9.mp3` (Mid tom), `samples/kits/boombap/10.mp3` (High tom), `samples/kits/boombap/11.mp3` (Crash), `samples/kits/boombap/12.mp3` (Ride), `samples/kits/boombap/13.mp3` (Perc 1), `samples/kits/boombap/14.mp3` (Perc 2), `samples/kits/boombap/15.mp3` (FX) |
| Studio Acoustic | `samples/kits/acoustic/0.mp3` (Kick), `samples/kits/acoustic/1.mp3` (Kick 2), `samples/kits/acoustic/2.mp3` (Snare), `samples/kits/acoustic/3.mp3` (Clap), `samples/kits/acoustic/4.mp3` (Closed hat), `samples/kits/acoustic/5.mp3` (Open hat), `samples/kits/acoustic/6.mp3` (Shaker), `samples/kits/acoustic/7.mp3` (Rim), `samples/kits/acoustic/8.mp3` (Low tom), `samples/kits/acoustic/9.mp3` (Mid tom), `samples/kits/acoustic/10.mp3` (High tom), `samples/kits/acoustic/11.mp3` (Crash), `samples/kits/acoustic/12.mp3` (Ride), `samples/kits/acoustic/13.mp3` (Perc 1), `samples/kits/acoustic/14.mp3` (Perc 2), `samples/kits/acoustic/15.mp3` (FX) |
| Electro Pop | `samples/kits/electro/0.mp3` (Kick), `samples/kits/electro/1.mp3` (Kick 2), `samples/kits/electro/2.mp3` (Snare), `samples/kits/electro/3.mp3` (Clap), `samples/kits/electro/4.mp3` (Closed hat), `samples/kits/electro/5.mp3` (Open hat), `samples/kits/electro/6.mp3` (Shaker), `samples/kits/electro/7.mp3` (Rim), `samples/kits/electro/8.mp3` (Low tom), `samples/kits/electro/9.mp3` (Mid tom), `samples/kits/electro/10.mp3` (High tom), `samples/kits/electro/11.mp3` (Crash), `samples/kits/electro/12.mp3` (Ride), `samples/kits/electro/13.mp3` (Perc 1), `samples/kits/electro/14.mp3` (Perc 2), `samples/kits/electro/15.mp3` (FX) |
| Deep House | `samples/kits/house/0.mp3` (Kick), `samples/kits/house/1.mp3` (Kick 2), `samples/kits/house/2.mp3` (Snare), `samples/kits/house/3.mp3` (Clap), `samples/kits/house/4.mp3` (Closed hat), `samples/kits/house/5.mp3` (Open hat), `samples/kits/house/6.mp3` (Shaker), `samples/kits/house/7.mp3` (Rim), `samples/kits/house/8.mp3` (Low tom), `samples/kits/house/9.mp3` (Mid tom), `samples/kits/house/10.mp3` (High tom), `samples/kits/house/11.mp3` (Crash), `samples/kits/house/12.mp3` (Ride), `samples/kits/house/13.mp3` (Perc 1), `samples/kits/house/14.mp3` (Perc 2), `samples/kits/house/15.mp3` (FX) |
| Rock Room | `samples/kits/rock/0.mp3` (Kick), `samples/kits/rock/1.mp3` (Kick 2), `samples/kits/rock/2.mp3` (Snare), `samples/kits/rock/3.mp3` (Clap), `samples/kits/rock/4.mp3` (Closed hat), `samples/kits/rock/5.mp3` (Open hat), `samples/kits/rock/6.mp3` (Shaker), `samples/kits/rock/7.mp3` (Rim), `samples/kits/rock/8.mp3` (Low tom), `samples/kits/rock/9.mp3` (Mid tom), `samples/kits/rock/10.mp3` (High tom), `samples/kits/rock/11.mp3` (Crash), `samples/kits/rock/12.mp3` (Ride), `samples/kits/rock/13.mp3` (Perc 1), `samples/kits/rock/14.mp3` (Perc 2), `samples/kits/rock/15.mp3` (FX) |

## Specimens (CC0)

| File | Source | License |
|---|---|---|
| `samples/found_objects/264430__memuse__plastic-bag.mp3` | https://freesound.org/s/264430/ | CC0 |
| `samples/found_objects/339961__vladnegrila__plastic-bag-rustle.mp3` | https://freesound.org/s/339961/ | CC0 |
| `samples/found_objects/365520__caitlin_100__plastic-bags-rustling.mp3` | https://freesound.org/s/365520/ | CC0 |
| `samples/found_objects/447918__breviceps__shuffle-cards.mp3` | https://freesound.org/s/447918/ | CC0 |
| `samples/found_objects/447926__breviceps__crunchy-paper.mp3` | https://freesound.org/s/447926/ | CC0 |
| `samples/found_objects/475434__o_ciz__bag-of-chips_1plastic-rustle.mp3` | https://freesound.org/s/475434/ | CC0 |
| `samples/found_objects/740225__fossarts__crumbling-up-foil-paper-2.mp3` | https://freesound.org/s/740225/ | CC0 |
| `samples/ice_brittle/464451__rvgerxini__ice-moving-in-glass.mp3` | https://freesound.org/s/464451/ | CC0 |
| `samples/mechanisms_toys/208889__monotraum__toy-piano.mp3` | https://freesound.org/s/208889/ | CC0 |
| `samples/mechanisms_toys/336610__anthousai__music-box-wind-up-05.mp3` | https://freesound.org/s/336610/ | CC0 |
| `samples/mechanisms_toys/343670__framing_noise__8b_f_medium.mp3` | https://freesound.org/s/343670/ | CC0 |
| `samples/mechanisms_toys/369405__flying_deer_fx__music-box-j.mp3` | https://freesound.org/s/369405/ | CC0 |
| `samples/mechanisms_toys/415103__gusgus26__toy-piano-f-c.mp3` | https://freesound.org/s/415103/ | CC0 |
| `samples/mechanisms_toys/445966__breviceps__wind-up-sound.mp3` | https://freesound.org/s/445966/ | CC0 |
| `samples/mechanisms_toys/451769__kyles__buddha-drone-music-box-roomy-plastic-click-switch-onoff.mp3` | https://freesound.org/s/451769/ | CC0 |
| `samples/mechanisms_toys/483161__f-r-a-g-i-l-e__childrens-toy-musical-samples.mp3` | https://freesound.org/s/483161/ | CC0 |
| `samples/mechanisms_toys/499771__handygaber__light-switch-click.mp3` | https://freesound.org/s/499771/ | CC0 |
| `samples/mechanisms_toys/584729__ambiabstract__switch-kick-click-wav.mp3` | https://freesound.org/s/584729/ | CC0 |
| `samples/mechanisms_toys/613091__f-r-a-g-i-l-e__broken-music-box-2.mp3` | https://freesound.org/s/613091/ | CC0 |
| `samples/mechanisms_toys/713997__trp__130111-light-switches-clicks-dimmer-slides-hotel-london-on.mp3` | https://freesound.org/s/713997/ | CC0 |
| `samples/mouth_body/188797__qubodup__mouth-pop.mp3` | https://freesound.org/s/188797/ | CC0 |
| `samples/mouth_body/704175__magicjoshua__quiet-lip-smack.mp3` | https://freesound.org/s/704175/ | CC0 |
| `samples/wood_taps/506718__jackyyang09__wooden-hit.mp3` | https://freesound.org/s/506718/ | CC0 |
| `samples/kicks/MckSamplePacks__DR5__BD__001_Ambient_Kick.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/kicks/MckSamplePacks__DR5__BD__002_Bright_Kick.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/kicks/MckSamplePacks__DR5__BD__027_Soft_Kick_1.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/kicks/MckSamplePacks__DR5__BD__028_Soft_Kick_2.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/kicks/sample-pi__drums__one-shots__kick__drum_bass_soft.flac` | https://github.com/alex-esc/sample-pi | CC0 |
| `samples/hats/MckSamplePacks__DR5__HATS__001_Acoustic_Closed_Hi-hat.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/hats/MckSamplePacks__RX5__HATS__008_Jazz_HiHat_Closed.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/hats/MckSamplePacks__TR8__HATS__004_808_Closed_HiHat_Short.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/snares/MckSamplePacks__DR5__SD__004_Brush_Slap_Snare_1.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/snares/MckSamplePacks__DR5__SD__035_Stick_Snare.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/snares/MckSamplePacks__DR5__SD__041_Ambient_Side_Stick.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/percussion/MckSamplePacks__DR5__PERC__004_Sleigh_Bell.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/percussion/MckSamplePacks__DR5__PERC__007_Wood_Block.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |
| `samples/percussion/MckSamplePacks__RX5__MISC__004_Glass_Crash.wav` | https://github.com/MckAudio/MckSamplePacks | CC0 |

## Loops

The 110 loops and 8 genre templates are original pattern data (notes, not audio) written for Cilia (`src/data/loops.ts`), CC0. They play through the instruments and kits above.


---

# Micro Beats v1 seed kit

Curated CC0 / redistribution-cleared samples for the first app ship.
All files are copies from `the Micro Beats starter kit` (downloaded 2026-09-20).

## License rules (hard)

- Only ship samples that are CC0 / public domain or otherwise cleared for redistribution in an app.
- Never bundle Splice / Loopmasters / SoundGhost / similar commercial pack raw files.
- Do not invent license terms. Provenance for Freesound files is in the parent kit's `source/freesound-cc0/PROVENANCE.md`.

## Pack sources

| Folder / files | Upstream | License |
|---|---|---|
| found_objects, ice_brittle, mechanisms_toys, mouth_body, wood_taps | Freesound HQ MP3 previews (CC0 pages verified) | CC0 |
| kicks, hats, snares, percussion (Mck* filenames) | https://github.com/MckAudio/MckSamplePacks | CC0 1.0 |
| kicks soft flac if present | https://github.com/alex-esc/sample-pi | CC0 / public domain |

## Aesthetic

Intimate microsounds / found objects / tiny percussion / music-box & toy colors — Matmos + Björk *Vespertine*, not polished club microhouse.

---

# Freesound CC0 provenance

Download date: **2026-09-20**

All licenses below were verified on each Freesound sound page as **Creative Commons 0 (CC0) / Public Domain** before keeping. Original full-quality downloads (WAV/FLAC) require a Freesound login; files kept here are the **auth-free HQ MP3 previews** from `cdn.freesound.org` (validated with ffprobe).

Format note: filenames use the Freesound slug with `.mp3` extension reflecting the preview format actually downloaded.

---

## Primary list (requested)

| Filename | Freesound URL | Uploader | License | Notes |
|---|---|---|---|---|
| `447926__breviceps__crunchy-paper.mp3` | https://freesound.org/people/Breviceps/sounds/447926/ | Breviceps | CC0 | paper / scrunch |
| `740225__fossarts__crumbling-up-foil-paper-2.mp3` | https://freesound.org/people/FOSSarts/sounds/740225/ | FOSSarts | CC0 | foil |
| `447918__breviceps__shuffle-cards.mp3` | https://freesound.org/people/Breviceps/sounds/447918/ | Breviceps | CC0 | shuffle cards |
| `506718__jackyyang09__wooden-hit.mp3` | https://freesound.org/people/jackyyang09/sounds/506718/ | jackyyang09 | CC0 | wooden hit |
| `464451__rvgerxini__ice-moving-in-glass.mp3` | https://freesound.org/people/Rvgerxini/sounds/464451/ | Rvgerxini | CC0 | ice in glass |
| `445966__breviceps__wind-up-sound.mp3` | https://freesound.org/people/Breviceps/sounds/445966/ | Breviceps | CC0 | wind-up |
| `704175__magicjoshua__quiet-lip-smack.mp3` | https://freesound.org/people/magicjoshua/sounds/704175/ | magicjoshua | CC0 | lip smack |
| `188797__qubodup__mouth-pop.mp3` | https://freesound.org/people/qubodup/sounds/188797/ | qubodup | CC0 | mouth pop |

CDN HQ sources used:
- https://cdn.freesound.org/previews/447/447926_9159316-hq.mp3
- https://cdn.freesound.org/previews/740/740225_14631530-hq.mp3
- https://cdn.freesound.org/previews/447/447918_9159316-hq.mp3
- https://cdn.freesound.org/previews/506/506718_6935003-hq.mp3
- https://cdn.freesound.org/previews/464/464451_9453283-hq.mp3
- https://cdn.freesound.org/previews/445/445966_9159316-hq.mp3
- https://cdn.freesound.org/previews/704/704175_6893335-hq.mp3
- https://cdn.freesound.org/previews/188/188797_71257-hq.mp3

---

## Additional CC0 matches (search: music box, toy piano, plastic bag rustle, switch click)

| Filename | Freesound URL | Uploader | License | Search theme |
|---|---|---|---|---|
| `336610__anthousai__music-box-wind-up-05.mp3` | https://freesound.org/people/Anthousai/sounds/336610/ | Anthousai | CC0 | music box |
| `613091__f-r-a-g-i-l-e__broken-music-box-2.mp3` | https://freesound.org/people/f-r-a-g-i-l-e/sounds/613091/ | f-r-a-g-i-l-e | CC0 | music box |
| `369405__flying_deer_fx__music-box-j.mp3` | https://freesound.org/people/Flying_Deer_Fx/sounds/369405/ | Flying_Deer_Fx | CC0 | music box |
| `451769__kyles__buddha-drone-music-box-roomy-plastic-click-switch-onoff.mp3` | https://freesound.org/people/kyles/sounds/451769/ | kyles | CC0 | music box |
| `415103__gusgus26__toy-piano-f-c.mp3` | https://freesound.org/people/gusgus26/sounds/415103/ | gusgus26 | CC0 | toy piano |
| `483161__f-r-a-g-i-l-e__childrens-toy-musical-samples.mp3` | https://freesound.org/people/f-r-a-g-i-l-e/sounds/483161/ | f-r-a-g-i-l-e | CC0 | toy piano |
| `208889__monotraum__toy-piano.mp3` | https://freesound.org/people/monotraum/sounds/208889/ | monotraum | CC0 | toy piano |
| `343670__framing_noise__8b_f_medium.mp3` | https://freesound.org/people/Framing_Noise/sounds/343670/ | Framing_Noise | CC0 | toy piano |
| `339961__vladnegrila__plastic-bag-rustle.mp3` | https://freesound.org/people/vladnegrila/sounds/339961/ | vladnegrila | CC0 | plastic bag rustle |
| `365520__caitlin_100__plastic-bags-rustling.mp3` | https://freesound.org/people/Caitlin_100/sounds/365520/ | Caitlin_100 | CC0 | plastic bag rustle |
| `264430__memuse__plastic-bag.mp3` | https://freesound.org/people/memuse/sounds/264430/ | memuse | CC0 | plastic bag rustle |
| `475434__o_ciz__bag-of-chips_1plastic-rustle.mp3` | https://freesound.org/people/o_ciz/sounds/475434/ | o_ciz | CC0 | plastic bag rustle |
| `584729__ambiabstract__switch-kick-click-wav.mp3` | https://freesound.org/people/Ambiabstract/sounds/584729/ | Ambiabstract | CC0 | switch click |
| `713997__trp__130111-light-switches-clicks-dimmer-slides-hotel-london-on.mp3` | https://freesound.org/people/TRP/sounds/713997/ | TRP | CC0 | switch click |
| `499771__handygaber__light-switch-click.mp3` | https://freesound.org/people/handygaber/sounds/499771/ | handygaber | CC0 | switch click |

---

## Failures / limitations

- **Original WAV/FLAC downloads:** All eight primary `/download/` URLs returned login/HTML (~17 KB) without auth — originals **not** saved.
- **No invented licenses:** Only files whose pages clearly indicated CC0 / Creative Commons 0 / Public Domain (CC0) were kept.
- **Format:** Kept HQ MP3 CDN previews (not the original upload bit depth/sample rate).

## Organized copies

Canonical copies live under `source/freesound-cc0/`. Thematic copies were also placed under:

- `organized/found_objects/` — paper, foil, cards, plastic/bag rustles
- `organized/ice_brittle/` — ice in glass
- `organized/mechanisms_toys/` — wind-up, music box, toy piano, switches
- `organized/mouth_body/` — lip smack, mouth pop
- `organized/wood_taps/` — wooden hit
