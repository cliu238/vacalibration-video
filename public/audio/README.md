# Audio Files for VA-Calibration Video

This directory contains audio narration files for the VA-Calibration video.

## Required Audio Files

The following 7 audio files are needed (MP3 format, 44.1 kHz, 128+ kbps):

1. **scene1-title.mp3** (~8 seconds, ~140 words)
   - Narration: "Verbal autopsy algorithms help determine causes of death, but they're not perfect. Introducing VA-Calibration: a method to correct systematic errors using gold-standard data."

2. **scene2-problem.mp3** (~28 seconds, ~100 words)
   - Narration about verbal autopsy misclassification problem

3. **scene3-solution.mp3** (~38 seconds, ~130 words)
   - Narration introducing VA-calibration methodology and CHAMPS data

4. **scene4-math.mp3** (~38 seconds, ~120 words)
   - Narration explaining mathematical framework

5. **scene5-results.mp3** (~18 seconds, ~65 words)
   - Narration showing real-world validation and impact

6. **scene6-cta.mp3** (~8 seconds, ~30 words)
   - Narration about how to use and resources

7. **scene7-outro.mp3** (~3 seconds, ~12 words)
   - Narration: "Based on research by Pramanik and colleagues, twenty twenty-five."

## How to Generate Audio Files

See `docs/audio-generation-guide.md` for detailed instructions on generating these audio files using text-to-speech services or recording your own voice.

## Current Status

- [ ] scene1-title.mp3
- [ ] scene2-problem.mp3
- [ ] scene3-solution.mp3
- [ ] scene4-math.mp3
- [ ] scene5-results.mp3
- [ ] scene6-cta.mp3
- [ ] scene7-outro.mp3

Once generated, place the audio files in this directory. The video will automatically use them when rendered.
