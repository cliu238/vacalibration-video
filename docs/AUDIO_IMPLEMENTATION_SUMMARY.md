# Audio Commentary Implementation Summary

## What Was Implemented

Audio narration support has been successfully added to the VA-Calibration video. The implementation includes:

### 1. Package Installation
- ✅ Installed `@remotion/media` package for audio support

### 2. Directory Structure
- ✅ Created `public/audio/` directory for audio files
- ✅ Added README.md in audio directory with file checklist

### 3. Code Changes

#### `src/VacalibrationVideo/constants.ts`
Added three new constant exports:

```typescript
// Audio file paths
export const AUDIO_FILES = {
  scene1: 'audio/scene1-title.mp3',
  scene2: 'audio/scene2-problem.mp3',
  scene3: 'audio/scene3-solution.mp3',
  scene4: 'audio/scene4-math.mp3',
  scene5: 'audio/scene5-results.mp3',
  scene6: 'audio/scene6-cta.mp3',
  scene7: 'audio/scene7-outro.mp3',
}

// Audio timing adjustments (delays in frames)
export const AUDIO_DELAYS = {
  scene1: 30,  // Start 1 second after scene begins
  scene2: 0,   // Start immediately
  // ... etc
}

// Audio volume settings
export const AUDIO_VOLUME = {
  narration: 0.8,
  fadeInDuration: 15,
  fadeOutDuration: 15,
}
```

#### `src/VacalibrationVideo/components/shared/SceneAudio.tsx` (NEW)
Created reusable audio component with:
- Automatic fade-in/fade-out
- Configurable volume
- Per-scene timing control
- Smooth volume interpolation

#### `src/VacalibrationVideo/VacalibrationVideo.tsx`
Updated main composition to:
- Import audio-related constants and components
- Add `<SceneAudio>` component to each of the 7 scenes
- Configure audio delays and fade settings per scene

### 4. Documentation
- ✅ Created comprehensive audio generation guide: `docs/audio-generation-guide.md`
- ✅ Created implementation summary: `docs/AUDIO_IMPLEMENTATION_SUMMARY.md`

---

## Current State

### ✅ Completed
- Code is ready to use audio files
- Project builds successfully
- Audio components are integrated into all 7 scenes
- Documentation is complete

### ⏳ Next Steps (User Action Required)
- **Generate or record the 7 audio files** (see guide below)
- Place audio files in `public/audio/` directory
- Test in Remotion Studio
- Fine-tune timing if needed
- Render final video with audio

---

## How to Generate Audio Files

You need to create 7 MP3 files and place them in `public/audio/`:

```
public/audio/
├── scene1-title.mp3       (~8 seconds)
├── scene2-problem.mp3     (~28 seconds)
├── scene3-solution.mp3    (~38 seconds)
├── scene4-math.mp3        (~38 seconds)
├── scene5-results.mp3     (~18 seconds)
├── scene6-cta.mp3         (~8 seconds)
└── scene7-outro.mp3       (~3 seconds)
```

### Recommended Methods

1. **ElevenLabs (Recommended)** - Best quality AI TTS
   - Visit: https://elevenlabs.io
   - Free tier: 10,000 characters/month
   - Professional, natural-sounding voices
   - **See full guide**: `docs/audio-generation-guide.md`

2. **OpenAI TTS API** - Programmatic generation
   - Costs ~$0.02-0.04 for entire project
   - Python script included in guide
   - Good quality, fast generation

3. **Record Your Own Voice** - Free, personal touch
   - Use Audacity or QuickTime
   - Follow recording tips in guide

### Quick Start: ElevenLabs Method

1. Go to https://elevenlabs.io and sign up
2. Select "Speech Synthesis"
3. Choose a voice (recommend: "Adam" or "Rachel")
4. For each scene, copy the narration script from `docs/audio-generation-guide.md`
5. Paste into ElevenLabs and generate
6. Download the MP3 and save with the correct filename
7. Move all files to `public/audio/`

---

## Narration Scripts (Quick Reference)

### Scene 1: Title & Hook (~8 seconds)
```
Verbal autopsy algorithms help determine causes of death, but they're not perfect.
Introducing VA-Calibration: a method to correct systematic errors using gold-standard data.
```

### Scene 2: The Problem (~28 seconds)
```
When medical records aren't available, verbal autopsy uses family interviews to determine cause of death.
But these algorithms systematically misclassify causes. For example, when the true cause is pneumonia,
the algorithm might incorrectly predict sepsis twenty percent of the time.
This matters because biased estimates mislead public health decisions and resource allocation.
Without correction, we can't trust the mortality data we're basing critical decisions on.
```

### Scene 3: The Solution (~38 seconds)
```
VA-Calibration solves this problem using gold-standard data from the CHAMPS project.
CHAMPS collected paired data from seven countries across Africa and Asia, combining
minimally invasive tissue sampling—the most accurate method—with verbal autopsy results.
The method works in two phases: First, we estimate the misclassification matrix by comparing
verbal autopsy predictions to the gold-standard MITS diagnoses.
Second, we apply these corrections to verbal autopsy datasets, transforming biased estimates
into calibrated, accurate cause-specific mortality fractions.
```

### Scene 4: Mathematical Framework (~38 seconds)
```
The base model simplifies misclassification by breaking it into two components:
intrinsic accuracy—how well the algorithm detects each cause—and pull—the tendency
to incorrectly assign deaths to popular causes. This reduces complexity dramatically.
Here's a misclassification matrix showing how often each true cause gets classified.
The diagonal shows correct predictions in green, while off-diagonal errors appear in orange.
The hierarchical structure borrows strength across countries when local data is limited,
using country-specific estimates when possible, but falling back to pooled estimates when needed.
```

### Scene 5: Results & Impact (~18 seconds)
```
In Mozambique, calibration corrected biased estimates for over eleven hundred neonatal deaths,
revealing that infections were underestimated while other causes were overcounted.
The method reduces error by thirty-five to forty percent, produces well-calibrated confidence intervals,
and consistently outperforms simpler calibration approaches.
```

### Scene 6: Call to Action (~8 seconds)
```
You can use VA-Calibration through the R package. Pre-computed misclassification matrices,
documentation, and code are all publicly available on GitHub.
```

### Scene 7: Credits & Outro (~3 seconds)
```
Based on research by Pramanik and colleagues, twenty twenty-five.
```

---

## Testing After Audio Generation

### 1. Preview in Remotion Studio

```bash
npm run dev
```

Then:
- Open http://localhost:3000
- Select "VacalibrationVideo" composition
- Play the video
- Check that audio plays and syncs with visuals

### 2. Adjust Timing (if needed)

If audio is too early or late, edit `src/VacalibrationVideo/constants.ts`:

```typescript
export const AUDIO_DELAYS = {
  scene1: 30,  // Increase number to delay, decrease to start earlier
  scene2: 0,   // Each unit = 1 frame (1/30th second)
  // ... etc
}
```

### 3. Adjust Volume (if needed)

If audio is too quiet or loud:

```typescript
export const AUDIO_VOLUME = {
  narration: 0.8,  // Range: 0.0-1.0 (try 0.6-0.9)
  fadeInDuration: 15,
  fadeOutDuration: 15,
}
```

---

## Rendering Final Video

Once audio files are in place and tested:

```bash
npx remotion render VacalibrationVideo out/vacalibration-video.mp4
```

This will:
- Render all 7 scenes with synchronized audio
- Output a single MP4 file with audio track
- Duration: 155 seconds (2 minutes 35 seconds)
- Resolution: 1920x1080 (Full HD)

---

## File Structure (After Audio Generation)

```
my-video/
├── src/
│   └── VacalibrationVideo/
│       ├── VacalibrationVideo.tsx        [MODIFIED: Added audio]
│       ├── constants.ts                   [MODIFIED: Added audio constants]
│       ├── scenes/
│       │   └── ... (unchanged)
│       └── components/
│           └── shared/
│               ├── SceneAudio.tsx        [NEW: Audio wrapper component]
│               └── ... (existing components)
├── public/
│   └── audio/                             [NEW: Audio directory]
│       ├── README.md                      [Checklist of needed files]
│       ├── scene1-title.mp3              [TODO: Generate this]
│       ├── scene2-problem.mp3            [TODO: Generate this]
│       ├── scene3-solution.mp3           [TODO: Generate this]
│       ├── scene4-math.mp3               [TODO: Generate this]
│       ├── scene5-results.mp3            [TODO: Generate this]
│       ├── scene6-cta.mp3                [TODO: Generate this]
│       └── scene7-outro.mp3              [TODO: Generate this]
├── docs/
│   ├── audio-generation-guide.md         [NEW: Comprehensive guide]
│   └── AUDIO_IMPLEMENTATION_SUMMARY.md   [NEW: This file]
└── package.json                           [MODIFIED: Added @remotion/media]
```

---

## Technical Details

### How Audio Works in the Implementation

1. **Audio Files**: Stored in `public/audio/` and referenced via `staticFile()`
2. **Per-Scene Audio**: Each scene has its own `<SceneAudio>` component
3. **Timing Control**:
   - `AUDIO_DELAYS`: Controls when audio starts within each scene (in frames)
   - `sceneDuration`: Used to calculate fade-out timing
4. **Volume Control**:
   - Fade-in over first 15 frames (0.5 seconds)
   - Fade-out over last 15 frames (0.5 seconds)
   - Configurable narration volume (default: 0.8)

### Audio Sync Points

The implementation is designed to sync audio with key visual moments:

- **Scene 1** (1s delay): Audio starts after title animates
- **Scene 2** (no delay): Immediate start with scene
- **Scene 3-7** (no delay): Immediate start with each scene

You can adjust these delays in `constants.ts` after testing with real audio.

---

## Troubleshooting

### Audio Doesn't Play
- Check files exist: `ls -la public/audio/*.mp3`
- Check filenames are exact (case-sensitive)
- Check browser console for errors
- Verify files are MP3 format, not WAV/AIFF

### Audio Out of Sync
- Adjust `AUDIO_DELAYS` in `constants.ts`
- Trim silence from audio files
- Check that scene duration matches audio length

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check that imports are correct
- Verify file paths are correct

---

## Resources

- **Full Audio Guide**: `docs/audio-generation-guide.md`
- **Audio Checklist**: `public/audio/README.md`
- **Remotion Audio Docs**: https://www.remotion.dev/docs/using-audio
- **ElevenLabs**: https://elevenlabs.io
- **OpenAI TTS**: https://platform.openai.com/docs/guides/text-to-speech

---

## Summary

✅ **Code is ready** - Audio support fully implemented
⏳ **Audio files needed** - 7 MP3 files to be generated
📖 **Guide available** - Complete guide in `docs/audio-generation-guide.md`
🎬 **Ready to render** - Once audio is generated, video will render with sound

**Next Action**: Generate the 7 audio files using the guide, then test and render!
