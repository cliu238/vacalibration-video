# Scene Timing Update - Audio-First Approach

## Summary

Updated all scene durations to match actual audio file lengths. Audio narration now drives the video timing, ensuring no audio is cut off.

## Audio Durations (Actual)

| Scene | Audio File | Duration | Frames (30 FPS) |
|-------|-----------|----------|-----------------|
| Scene 1 | scene1-title.mp3 | 10.51s | 315 frames |
| Scene 2 | scene2-problem.mp3 | 28.82s | 865 frames |
| Scene 3 | scene3-solution.mp3 | 35.47s | 1064 frames |
| Scene 4 | scene4-math.mp3 | 37.20s | 1116 frames |
| Scene 5 | scene5-results.mp3 | 21.58s | 647 frames |
| Scene 6 | scene6-cta.mp3 | 9.31s | 279 frames |
| Scene 7 | scene7-outro.mp3 | 4.06s | 122 frames |
| **TOTAL** | | **146.95s** | **4408 frames** |

## Scene Timing Comparison

### Before (Original Plan)

| Scene | Start Frame | End Frame | Duration | Seconds |
|-------|------------|-----------|----------|---------|
| Scene 1 | 0 | 300 | 300 | 10s |
| Scene 2 | 300 | 1200 | 900 | 30s |
| Scene 3 | 1200 | 2400 | 1200 | 40s |
| Scene 4 | 2400 | 3600 | 1200 | 40s |
| Scene 5 | 3600 | 4200 | 600 | 20s |
| Scene 6 | 4200 | 4500 | 300 | 10s |
| Scene 7 | 4500 | 4650 | 150 | 5s |
| **TOTAL** | | | **4650** | **155s** |

**Issues**:
- Scene 1: Too short (300 frames vs 315 needed)
- Scene 3: Too long (1200 frames vs 1064 needed)
- Scene 4: Too long (1200 frames vs 1116 needed)
- Scene 5: Too short (600 frames vs 647 needed)

### After (Audio-Driven)

| Scene | Start Frame | End Frame | Duration | Seconds | Buffer |
|-------|------------|-----------|----------|---------|--------|
| Scene 1 | 0 | 330 | 330 | 11s | +0.5s |
| Scene 2 | 330 | 1230 | 900 | 30s | +1.2s |
| Scene 3 | 1230 | 2340 | 1110 | 37s | +1.5s |
| Scene 4 | 2340 | 3510 | 1170 | 39s | +1.8s |
| Scene 5 | 3510 | 4200 | 690 | 23s | +1.4s |
| Scene 6 | 4200 | 4530 | 330 | 11s | +1.7s |
| Scene 7 | 4530 | 4680 | 150 | 5s | +0.9s |
| **TOTAL** | | | **4680** | **156s** | |

**Improvements**:
- All scenes now have enough time for audio to complete
- Added 1-2 second buffer per scene for breathing room
- Total video length: 156 seconds (increased by 1 second)
- No audio will be cut off

## Changes Made

### File: `src/VacalibrationVideo/constants.ts`

```typescript
// BEFORE
export const SCENE_TIMING = {
  scene1: { start: 0, end: 300 },       // 10s
  scene2: { start: 300, end: 1200 },    // 30s
  scene3: { start: 1200, end: 2400 },   // 40s
  scene4: { start: 2400, end: 3600 },   // 40s
  scene5: { start: 3600, end: 4200 },   // 20s
  scene6: { start: 4200, end: 4500 },   // 10s
  scene7: { start: 4500, end: 4650 },   // 5s
} as const;

export const TOTAL_DURATION = 4650; // 155 seconds

// AFTER
export const SCENE_TIMING = {
  scene1: { start: 0, end: 330 },       // 11s (audio: 10.51s)
  scene2: { start: 330, end: 1230 },    // 30s (audio: 28.82s)
  scene3: { start: 1230, end: 2340 },   // 37s (audio: 35.47s)
  scene4: { start: 2340, end: 3510 },   // 39s (audio: 37.20s)
  scene5: { start: 3510, end: 4200 },   // 23s (audio: 21.58s)
  scene6: { start: 4200, end: 4530 },   // 11s (audio: 9.31s)
  scene7: { start: 4530, end: 4680 },   // 5s (audio: 4.06s)
} as const;

export const TOTAL_DURATION = 4680; // 156 seconds
```

### File: `src/Root.tsx`

No changes needed - already uses `TOTAL_DURATION` constant, so it automatically picks up the new duration.

## Testing Checklist

- [ ] Open http://localhost:3000 (dev server should be running)
- [ ] Select "VacalibrationVideo" composition
- [ ] Verify video duration shows 156 seconds (2:36)
- [ ] Play through each scene and verify:
  - [ ] Scene 1: Audio completes before scene ends
  - [ ] Scene 2: Audio completes before scene ends
  - [ ] Scene 3: Audio completes before scene ends
  - [ ] Scene 4: Audio completes before scene ends
  - [ ] Scene 5: Audio completes before scene ends
  - [ ] Scene 6: Audio completes before scene ends
  - [ ] Scene 7: Audio completes before scene ends
- [ ] No audio cuts off abruptly
- [ ] Scene transitions feel natural

## Rendering

To render the final video with updated timing:

```bash
npx remotion render VacalibrationVideo out/vacalibration-video.mp4
```

Output:
- Duration: 156 seconds (2 minutes 36 seconds)
- Resolution: 1920x1080 (Full HD)
- FPS: 30
- Audio: Synchronized narration with fade in/out

## Benefits of Audio-First Timing

1. **No Audio Cutoff**: Every scene has enough time for narration to complete
2. **Natural Pacing**: Buffer time allows audio to breathe and prevents rushed feel
3. **Flexible**: Easy to adjust individual scene lengths if needed
4. **Professional**: Audio quality drives the experience, not rigid time constraints

## Future Adjustments

If you need to adjust timing for any scene:

1. Measure audio duration: `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 public/audio/sceneX-name.mp3`
2. Calculate frames: `duration * 30` (round up)
3. Add buffer: `frames + 30-60` (1-2 seconds)
4. Update `SCENE_TIMING` in `constants.ts`
5. Adjust subsequent scenes' start times accordingly
6. Update `TOTAL_DURATION`

---

**Updated**: 2026-01-22
**Status**: ✅ Complete
**Ready to Preview**: Yes - refresh browser at http://localhost:3000
