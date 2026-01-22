# Audio Generation Guide for VA-Calibration Video

This guide provides detailed instructions for generating audio narration files for the VA-Calibration explainer video.

## Overview

The video requires **7 audio files** (one per scene) with professional-quality narration. You have several options for generating these files:

1. **AI Text-to-Speech (TTS)** - Recommended for quick, professional results
2. **Professional Voice Actor** - Best quality, but more expensive
3. **Record Your Own Voice** - Free, but requires good equipment and editing

## Audio Specifications

All audio files must meet these requirements:

- **Format**: MP3
- **Sample Rate**: 44.1 kHz (CD quality)
- **Bit Rate**: 128 kbps or higher
- **Channels**: Mono (recommended) or Stereo
- **File Naming**: Exactly as specified below (case-sensitive)

## Required Audio Files

Place all files in the `public/audio/` directory:

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

---

## Option 1: ElevenLabs (Recommended - Best Quality AI TTS)

**Best for**: Professional-quality AI voices, natural-sounding speech

### Setup

1. Visit https://elevenlabs.io and create an account
2. Free tier: 10,000 characters/month (enough for this project)
3. Paid plans: Starting at $5/month for 30,000 characters

### Voice Selection

Recommended voices for explainer videos:
- **Adam**: Professional male voice, clear and authoritative
- **Rachel**: Professional female voice, warm and engaging
- **Antoni**: Friendly male voice, conversational
- **Bella**: Clear female voice, educational tone

### Generation Steps

For each scene:

1. Go to "Speech Synthesis" in ElevenLabs
2. Select your chosen voice
3. Copy the narration script from below
4. Paste into the text box
5. Adjust settings:
   - Stability: 50-70% (higher = more consistent, lower = more expressive)
   - Clarity: 75-85% (higher = clearer, crisper)
   - Style Exaggeration: 0-25% (use sparingly for educational content)
6. Click "Generate"
7. Listen to the preview
8. If satisfied, click "Download" and save as the appropriate filename
9. Move the file to `public/audio/`

### Pro Tips

- Generate multiple versions and choose the best one
- Add brief pauses using "..." in the script where needed
- Use SSML tags for fine control (e.g., `<break time="0.5s"/>`)
- Listen with video in Remotion Studio to check sync

---

## Option 2: OpenAI Text-to-Speech API

**Best for**: Programmatic generation, batch processing

### Setup

1. Get an API key from https://platform.openai.com/api-keys
2. Install OpenAI Python library: `pip install openai`
3. Set environment variable: `export OPENAI_API_KEY='your-key-here'`

### Voice Options

- **alloy**: Neutral, balanced
- **echo**: Clear male voice
- **fable**: Expressive, storytelling
- **onyx**: Deep male voice
- **nova**: Friendly female voice
- **shimmer**: Warm female voice

### Generation Script

Save this as `generate_audio.py` in the project root:

```python
#!/usr/bin/env python3
from openai import OpenAI
import os

client = OpenAI()

# Narration scripts for each scene
scripts = {
    "scene1-title.mp3": """
Verbal autopsy algorithms help determine causes of death, but they're not perfect.
Introducing VA-Calibration: a method to correct systematic errors using gold-standard data.
""",
    "scene2-problem.mp3": """
When medical records aren't available, verbal autopsy uses family interviews to determine cause of death.
But these algorithms systematically misclassify causes. For example, when the true cause is pneumonia,
the algorithm might incorrectly predict sepsis twenty percent of the time.
This matters because biased estimates mislead public health decisions and resource allocation.
Without correction, we can't trust the mortality data we're basing critical decisions on.
""",
    "scene3-solution.mp3": """
VA-Calibration solves this problem using gold-standard data from the CHAMPS project.
CHAMPS collected paired data from seven countries across Africa and Asia, combining
minimally invasive tissue sampling—the most accurate method—with verbal autopsy results.
The method works in two phases: First, we estimate the misclassification matrix by comparing
verbal autopsy predictions to the gold-standard MITS diagnoses.
Second, we apply these corrections to verbal autopsy datasets, transforming biased estimates
into calibrated, accurate cause-specific mortality fractions.
""",
    "scene4-math.mp3": """
The base model simplifies misclassification by breaking it into two components:
intrinsic accuracy—how well the algorithm detects each cause—and pull—the tendency
to incorrectly assign deaths to popular causes. This reduces complexity dramatically.
Here's a misclassification matrix showing how often each true cause gets classified.
The diagonal shows correct predictions in green, while off-diagonal errors appear in orange.
The hierarchical structure borrows strength across countries when local data is limited,
using country-specific estimates when possible, but falling back to pooled estimates when needed.
""",
    "scene5-results.mp3": """
In Mozambique, calibration corrected biased estimates for over eleven hundred neonatal deaths,
revealing that infections were underestimated while other causes were overcounted.
The method reduces error by thirty-five to forty percent, produces well-calibrated confidence intervals,
and consistently outperforms simpler calibration approaches.
""",
    "scene6-cta.mp3": """
You can use VA-Calibration through the R package. Pre-computed misclassification matrices,
documentation, and code are all publicly available on GitHub.
""",
    "scene7-outro.mp3": """
Based on research by Pramanik and colleagues, twenty twenty-five.
""",
}

# Output directory
output_dir = "public/audio"
os.makedirs(output_dir, exist_ok=True)

# Generate each audio file
for filename, text in scripts.items():
    print(f"Generating {filename}...")

    response = client.audio.speech.create(
        model="tts-1-hd",  # Use "tts-1" for faster/cheaper, "tts-1-hd" for higher quality
        voice="nova",       # Change to your preferred voice
        input=text.strip(),
        response_format="mp3"
    )

    output_path = os.path.join(output_dir, filename)
    response.stream_to_file(output_path)
    print(f"✓ Saved to {output_path}")

print("\n✓ All audio files generated successfully!")
print(f"Total files: {len(scripts)}")
print(f"Location: {output_dir}/")
```

### Run the Script

```bash
python generate_audio.py
```

### Cost Estimate

- Model: `tts-1` costs $15.00 per 1M characters
- Model: `tts-1-hd` costs $30.00 per 1M characters
- This project: ~600 characters total = **$0.02** (tts-1) or **$0.04** (tts-1-hd)

---

## Option 3: Record Your Own Voice

**Best for**: Budget-conscious, personal touch

### Equipment Needed

- **Microphone**: USB condenser mic (e.g., Blue Yeti, Audio-Technica AT2020USB+)
- **Headphones**: Closed-back headphones to prevent audio bleed
- **Recording Software**:
  - macOS: QuickTime Player (built-in) or GarageBand
  - Windows/Mac/Linux: Audacity (free, open-source)
- **Quiet Room**: Minimal echo, background noise

### Recording Setup

1. **Test Your Environment**:
   - Record 10 seconds of silence and listen for noise
   - Clap your hands - if you hear a long echo, add soft furnishings
   - Turn off HVAC, fans, and close windows

2. **Microphone Positioning**:
   - Position mic 6-8 inches from your mouth
   - Speak slightly off-axis to reduce plosives (P, B sounds)
   - Use a pop filter or improvise with a sock over the mic

3. **Recording Settings**:
   - Sample Rate: 44.1 kHz
   - Bit Depth: 16-bit or 24-bit
   - Format: WAV or AIFF (lossless, convert to MP3 later)

### Recording Process

For each scene:

1. Read the script 2-3 times to familiarize yourself
2. Take a deep breath and relax
3. Press record
4. Leave 1 second of silence at the start
5. Read the script clearly at a moderate pace
6. Leave 1 second of silence at the end
7. Stop recording
8. Listen back - if not satisfied, try again

### Editing Tips

Using Audacity:

1. **Trim Silence**: Remove excessive silence at start/end
2. **Normalize**: Effect → Normalize → -1.0 dB
3. **Noise Reduction** (if needed):
   - Select a portion of silence (background noise)
   - Effect → Noise Reduction → Get Noise Profile
   - Select entire audio
   - Effect → Noise Reduction → OK
4. **Compression** (optional): Effect → Compressor (makes volume more consistent)
5. **Export**: File → Export → Export as MP3
   - Quality: 192 kbps or higher
   - Save to `public/audio/` with correct filename

### Voice Tips

- **Pacing**: Speak slowly and clearly (aim for 140-160 words/minute)
- **Tone**: Professional, friendly, informative (like a documentary narrator)
- **Emphasis**: Stress important terms (e.g., "VA-Calibration", "CHAMPS")
- **Pauses**: Brief pause after commas (0.5s), longer after periods (1s)
- **Consistency**: Use same voice/tone across all scenes

---

## Narration Scripts by Scene

### Scene 1: Title & Hook (~8 seconds)

```
Verbal autopsy algorithms help determine causes of death, but they're not perfect.
Introducing VA-Calibration: a method to correct systematic errors using gold-standard data.
```

**Target Duration**: 8 seconds
**Word Count**: ~25 words
**Pacing**: Moderate, clear introduction

---

### Scene 2: The Problem (~28 seconds)

```
When medical records aren't available, verbal autopsy uses family interviews to determine cause of death.
But these algorithms systematically misclassify causes. For example, when the true cause is pneumonia,
the algorithm might incorrectly predict sepsis twenty percent of the time.
This matters because biased estimates mislead public health decisions and resource allocation.
Without correction, we can't trust the mortality data we're basing critical decisions on.
```

**Target Duration**: 28 seconds
**Word Count**: ~80 words
**Pacing**: Problem-focused, building concern
**Key Terms**: "verbal autopsy", "misclassify", "biased estimates"

---

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

**Target Duration**: 38 seconds
**Word Count**: ~95 words
**Pacing**: Solution-focused, optimistic
**Key Terms**: "CHAMPS", "MITS", "misclassification matrix", "calibration"

---

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

**Target Duration**: 38 seconds
**Word Count**: ~95 words
**Pacing**: Technical but accessible
**Key Terms**: "intrinsic accuracy", "pull", "hierarchical structure"

---

### Scene 5: Results & Impact (~18 seconds)

```
In Mozambique, calibration corrected biased estimates for over eleven hundred neonatal deaths,
revealing that infections were underestimated while other causes were overcounted.
The method reduces error by thirty-five to forty percent, produces well-calibrated confidence intervals,
and consistently outperforms simpler calibration approaches.
```

**Target Duration**: 18 seconds
**Word Count**: ~50 words
**Pacing**: Results-focused, confident
**Key Stats**: "eleven hundred", "thirty-five to forty percent"

---

### Scene 6: Call to Action (~8 seconds)

```
You can use VA-Calibration through the R package. Pre-computed misclassification matrices,
documentation, and code are all publicly available on GitHub.
```

**Target Duration**: 8 seconds
**Word Count**: ~22 words
**Pacing**: Actionable, inviting
**Key Terms**: "R package", "GitHub"

---

### Scene 7: Credits & Outro (~3 seconds)

```
Based on research by Pramanik and colleagues, twenty twenty-five.
```

**Target Duration**: 3 seconds
**Word Count**: ~9 words
**Pacing**: Credits pace, clear attribution

---

## Audio File Conversion

If you generated audio in a different format (WAV, AIFF, etc.), convert to MP3:

### Using FFmpeg (Cross-platform)

Install FFmpeg:
- macOS: `brew install ffmpeg`
- Ubuntu/Debian: `sudo apt install ffmpeg`
- Windows: Download from https://ffmpeg.org

Convert:
```bash
ffmpeg -i input.wav -codec:a libmp3lame -b:a 192k output.mp3
```

Batch convert all files:
```bash
for file in *.wav; do
  ffmpeg -i "$file" -codec:a libmp3lame -b:a 192k "${file%.wav}.mp3"
done
```

### Using macOS Built-in Tools

Convert AIFF to MP3:
```bash
afconvert -f mp4f -d aac -b 192000 input.aiff output.m4a
```

Then rename .m4a to .mp3 or use online converter.

---

## Testing Your Audio

### 1. Preview in Remotion Studio

```bash
npm run dev
```

- Navigate to the VacalibrationVideo composition
- Play through each scene
- Check that audio starts at the right time
- Verify narration matches visuals
- Listen for any audio glitches or quality issues

### 2. Check Sync Points

Verify these key sync moments:

- **Scene 1** (1s delay): Audio starts after title animates
- **Scene 2**: "verbal autopsy" syncs with interview icon
- **Scene 3**: "CHAMPS" syncs with world map
- **Scene 4**: "two components" syncs with diagram
- **Scene 5**: "Mozambique" syncs with chart
- **Scene 6**: "R package" syncs with code snippet

### 3. Adjust Timing if Needed

If audio is too early or too late, edit `src/VacalibrationVideo/constants.ts`:

```typescript
export const AUDIO_DELAYS = {
  scene1: 30,  // Increase to delay more, decrease to start earlier
  scene2: 0,
  // ... etc
}
```

Each unit = 1 frame (1/30th of a second at 30 FPS)

### 4. Volume Check

If audio is too quiet or too loud, adjust in `constants.ts`:

```typescript
export const AUDIO_VOLUME = {
  narration: 0.8,  // Range: 0.0 to 1.0 (0.7-0.9 recommended)
  fadeInDuration: 15,
  fadeOutDuration: 15,
}
```

---

## Troubleshooting

### Audio Doesn't Play

1. **Check file exists**: `ls -la public/audio/`
2. **Check filename** (case-sensitive): Must match exactly
3. **Check format**: Must be MP3, not WAV/AIFF
4. **Browser console**: Look for errors in DevTools

### Audio Out of Sync

1. **Adjust delays** in `constants.ts` → `AUDIO_DELAYS`
2. **Trim audio file**: Remove silence at start/end in Audacity
3. **Check scene duration**: Ensure audio fits within scene length

### Audio Cuts Off Early

1. **Check scene duration** in `constants.ts` → `SCENE_TIMING`
2. **Extend scene** if needed to accommodate longer narration
3. **Reduce fade out duration** in `AUDIO_VOLUME`

### Audio Quality Issues

1. **Check bit rate**: Should be 128 kbps or higher
2. **Check sample rate**: Should be 44.1 kHz
3. **Re-export**: Use higher quality settings
4. **Reduce noise**: Apply noise reduction in Audacity

### Voice Sounds Robotic (TTS)

1. **Try different voice**: Some voices are more natural
2. **Adjust stability**: Lower = more expressive (ElevenLabs)
3. **Add punctuation**: Use commas, periods for better pacing
4. **Use SSML**: Add pauses and emphasis (advanced)

---

## Cost Comparison

| Method | Cost | Time | Quality |
|--------|------|------|---------|
| ElevenLabs (Free) | $0 (10k chars/mo) | 30 min | ★★★★★ |
| ElevenLabs (Paid) | $5/mo | 30 min | ★★★★★ |
| OpenAI TTS | ~$0.02-0.04 | 5 min (scripted) | ★★★★☆ |
| Professional Actor | $100-500 | 1-2 weeks | ★★★★★ |
| DIY Recording | Free | 2-4 hours | ★★★☆☆ to ★★★★☆ |

---

## Next Steps

1. **Choose a method** from above (ElevenLabs recommended)
2. **Generate all 7 audio files** using the provided scripts
3. **Place files** in `public/audio/` directory
4. **Test in Remotion Studio**: `npm run dev`
5. **Adjust timing** if needed in `constants.ts`
6. **Render final video**: `npx remotion render VacalibrationVideo out/vacalibration-video.mp4`

---

## Additional Resources

- **ElevenLabs**: https://elevenlabs.io
- **OpenAI TTS**: https://platform.openai.com/docs/guides/text-to-speech
- **Audacity**: https://www.audacityteam.org
- **FFmpeg**: https://ffmpeg.org
- **Remotion Audio Docs**: https://www.remotion.dev/docs/using-audio

---

## Support

If you encounter issues:
1. Check `public/audio/README.md` for file checklist
2. Review browser console for errors
3. Test with a single scene first
4. Verify all dependencies are installed: `npm install`

Good luck with your audio generation!
