# Bundled sample licenses & provenance

Every audio file shipped with Cilia is either **CC0 / public domain** or **explicitly redistributable with attribution** (MIT / CC BY). No commercial packs (Splice, Loopmasters, SoundGhost, Roland Cloud, MusicRadar …), no commercial album rips and no Matmos / Vespertine audio are included. User recordings and uploads stay on the user's device and are never published.

Machine-readable provenance for every file (id, path, license, source URL, author) is in `samples/manifest.json`.

| Pack | Files | Size | License | Source |
|---|---|---|---|---|
| Specimens (found sounds, one-shots) | 37 | 16.2 MB | CC0 1.0 | Freesound / MckSamplePacks / sample-pi (see below) |
| Found-object & micro one-shots (24 categories) | 144 | 0.6 MB | CC0 1.0 | original synthesis, `scripts/gen-found.mjs` |
| Drum kits (9 generated kits × 16 pads) | 144 | 2.2 MB | CC0 1.0 | original synthesis, `scripts/gen-drums.mjs` |
| Melodic instruments (60 General MIDI instruments) | 795 | 14.8 MB | CC BY 3.0 + MIT | FluidR3_GM via midi-js-soundfonts |

The "Microscope" kit re-uses 16 of the CC0 specimens listed below. The 11 found-object / micro kits (Kitchen Lab, Workshop, Desk, Nature Field, Street Find, Mouth & Body, Lab Glass, Operating Theatre, Petri Pulse, Dust & Fiber, Whisper Cell) use only the generated found-object one-shots.

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

## Found-object & micro one-shots (generated, CC0)

Synthesised from scratch in JavaScript by `scripts/gen-found.mjs` — modal (damped-sine) resonators for glass/metal/wood/ceramic, filtered seeded noise for scrapes/cloth/breath, granular click clouds for rustles/crunch/gravel/dust, pitch-rising sine drops for drips/bubbles, and click trains for zippers/insect ticks, with contact-mic colouring. No recordings or third-party samples are used. Deterministic (seeded). Dedicated to the public domain under CC0 1.0.

| Category | Files |
|---|---|
| Taps | `samples/found/taps/1.mp3` (Fingertip on table), `samples/found/taps/2.mp3` (Knuckle knock), `samples/found/taps/3.mp3` (Nail on phone case), `samples/found/taps/4.mp3` (Pen tip tap), `samples/found/taps/5.mp3` (Palm on thigh), `samples/found/taps/6.mp3` (Thumb on mic) |
| Scrapes | `samples/found/scrapes/1.mp3` (Nail scrape on card), `samples/found/scrapes/2.mp3` (Chair leg drag), `samples/found/scrapes/3.mp3` (Sandpaper stroke), `samples/found/scrapes/4.mp3` (Comb teeth rake), `samples/found/scrapes/5.mp3` (Spoon scrape bowl), `samples/found/scrapes/6.mp3` (Brick grind) |
| Rustles | `samples/found/rustles/1.mp3` (Leaf bundle), `samples/found/rustles/2.mp3` (Crisp packet), `samples/found/rustles/3.mp3` (Tissue paper), `samples/found/rustles/4.mp3` (Dry grass), `samples/found/rustles/5.mp3` (Coat pocket), `samples/found/rustles/6.mp3` (Bag rummage) |
| Drips | `samples/found/drips/1.mp3` (Tap drip), `samples/found/drips/2.mp3` (Sink drop), `samples/found/drips/3.mp3` (Tiny drip), `samples/found/drips/4.mp3` (Bucket plink), `samples/found/drips/5.mp3` (Leaf drip), `samples/found/drips/6.mp3` (Cave drop) |
| Glass | `samples/found/glass/1.mp3` (Wine glass ting), `samples/found/glass/2.mp3` (Jar lid clink), `samples/found/glass/3.mp3` (Test tube tap), `samples/found/glass/4.mp3` (Marble on glass), `samples/found/glass/5.mp3` (Bottle neck), `samples/found/glass/6.mp3` (Ice in glass) |
| Metal | `samples/found/metal/1.mp3` (Pan hit), `samples/found/metal/2.mp3` (Spoon tap), `samples/found/metal/3.mp3` (Washer drop), `samples/found/metal/4.mp3` (Pipe ping), `samples/found/metal/5.mp3` (Tin can thud), `samples/found/metal/6.mp3` (Bike spoke pluck) |
| Paper | `samples/found/paper/1.mp3` (Page flick), `samples/found/paper/2.mp3` (Paper tear), `samples/found/paper/3.mp3` (Crumple), `samples/found/paper/4.mp3` (Card snap), `samples/found/paper/5.mp3` (Envelope slap), `samples/found/paper/6.mp3` (Book riffle) |
| Plastic | `samples/found/plastic/1.mp3` (Bottle squeeze), `samples/found/plastic/2.mp3` (Lid pop), `samples/found/plastic/3.mp3` (Ruler twang), `samples/found/plastic/4.mp3` (Cup crush), `samples/found/plastic/5.mp3` (Hollow box), `samples/found/plastic/6.mp3` (Pen click case) |
| Wood | `samples/found/wood/1.mp3` (Chopstick clack), `samples/found/wood/2.mp3` (Desk knock), `samples/found/wood/3.mp3` (Pencil roll), `samples/found/wood/4.mp3` (Twig snap), `samples/found/wood/5.mp3` (Spoon on board), `samples/found/wood/6.mp3` (Drawer bump) |
| Cloth | `samples/found/cloth/1.mp3` (Sleeve swish), `samples/found/cloth/2.mp3` (Denim rub), `samples/found/cloth/3.mp3` (Towel flap), `samples/found/cloth/4.mp3` (Sheet pull), `samples/found/cloth/5.mp3` (Pocket pat), `samples/found/cloth/6.mp3` (Wool brush) |
| Breath | `samples/found/breath/1.mp3` (Short puff), `samples/found/breath/2.mp3` (Inhale), `samples/found/breath/3.mp3` (Exhale), `samples/found/breath/4.mp3` (Whisper "t"), `samples/found/breath/5.mp3` (Whisper "sh"), `samples/found/breath/6.mp3` (Blow on mic) |
| Mouth clicks | `samples/found/mouth/1.mp3` (Tongue click), `samples/found/mouth/2.mp3` (Lip pop), `samples/found/mouth/3.mp3` (Tsk), `samples/found/mouth/4.mp3` (Cheek pop), `samples/found/mouth/5.mp3` (Teeth tick), `samples/found/mouth/6.mp3` (Kiss smack) |
| Insect ticks | `samples/found/ticks/1.mp3` (Cricket tick), `samples/found/ticks/2.mp3` (Beetle step), `samples/found/ticks/3.mp3` (Cicada burst), `samples/found/ticks/4.mp3` (Wing flutter), `samples/found/ticks/5.mp3` (Mandible snap), `samples/found/ticks/6.mp3` (Clock tick) |
| Ice & crunch | `samples/found/crunch/1.mp3` (Ice crack), `samples/found/crunch/2.mp3` (Snow step), `samples/found/crunch/3.mp3` (Cereal crunch), `samples/found/crunch/4.mp3` (Frost scrape), `samples/found/crunch/5.mp3` (Eggshell), `samples/found/crunch/6.mp3` (Ice cube drop) |
| Gravel & stone | `samples/found/gravel/1.mp3` (Pebble clack), `samples/found/gravel/2.mp3` (Gravel step), `samples/found/gravel/3.mp3` (Sand pour), `samples/found/gravel/4.mp3` (Stone tumble), `samples/found/gravel/5.mp3` (Grit shake), `samples/found/gravel/6.mp3` (Rock thud) |
| Keys & coins | `samples/found/keys/1.mp3` (Key jingle), `samples/found/keys/2.mp3` (Coin drop), `samples/found/keys/3.mp3` (Coin spin), `samples/found/keys/4.mp3` (Keyring tap), `samples/found/keys/5.mp3` (Coins in palm), `samples/found/keys/6.mp3` (Padlock snap) |
| Zipper | `samples/found/zipper/1.mp3` (Zip up), `samples/found/zipper/2.mp3` (Zip down), `samples/found/zipper/3.mp3` (Short zip), `samples/found/zipper/4.mp3` (Bag zip), `samples/found/zipper/5.mp3` (Jacket zip tug), `samples/found/zipper/6.mp3` (Pencil case zip) |
| Velcro | `samples/found/velcro/1.mp3` (Velcro rip), `samples/found/velcro/2.mp3` (Velcro short), `samples/found/velcro/3.mp3` (Velcro slow), `samples/found/velcro/4.mp3` (Strap tear), `samples/found/velcro/5.mp3` (Shoe strap), `samples/found/velcro/6.mp3` (Patch press) |
| Switch clicks | `samples/found/switches/1.mp3` (Light switch), `samples/found/switches/2.mp3` (Mouse click), `samples/found/switches/3.mp3` (Keyboard key), `samples/found/switches/4.mp3` (Pen click), `samples/found/switches/5.mp3` (Toggle clunk), `samples/found/switches/6.mp3` (Relay click) |
| Ceramic | `samples/found/ceramic/1.mp3` (Cup clink), `samples/found/ceramic/2.mp3` (Plate tap), `samples/found/ceramic/3.mp3` (Bowl ring), `samples/found/ceramic/4.mp3` (Mug thunk), `samples/found/ceramic/5.mp3` (Tile tick), `samples/found/ceramic/6.mp3` (Saucer spin) |
| Lab & theatre | `samples/found/lab/1.mp3` (Monitor beep), `samples/found/lab/2.mp3` (Pipette squelch), `samples/found/lab/3.mp3` (Scissor snip), `samples/found/lab/4.mp3` (Tray clank), `samples/found/lab/5.mp3` (Forceps tick), `samples/found/lab/6.mp3` (Centrifuge whir) |
| Dust & static | `samples/found/dust/1.mp3` (Dust crackle), `samples/found/dust/2.mp3` (Static pop), `samples/found/dust/3.mp3` (Mote tick), `samples/found/dust/4.mp3` (Fibre snap), `samples/found/dust/5.mp3` (Granular hiss), `samples/found/dust/6.mp3` (Vinyl dust) |
| Bubbles | `samples/found/bubbles/1.mp3` (Bubble blip), `samples/found/bubbles/2.mp3` (Bubble pair), `samples/found/bubbles/3.mp3` (Fizz), `samples/found/bubbles/4.mp3` (Gloop), `samples/found/bubbles/5.mp3` (Cell burst), `samples/found/bubbles/6.mp3` (Agar plop) |
| Body | `samples/found/body/1.mp3` (Finger snap), `samples/found/body/2.mp3` (Hand clap), `samples/found/body/3.mp3` (Chest thump), `samples/found/body/4.mp3` (Thigh slap), `samples/found/body/5.mp3` (Knuckle crack), `samples/found/body/6.mp3` (Heartbeat) |

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

The loops and style templates are original pattern data (notes, not audio) written for Cilia (`src/data/loops.ts`), CC0. They play through the instruments and kits above.


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
