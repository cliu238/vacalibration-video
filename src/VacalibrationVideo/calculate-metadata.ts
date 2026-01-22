import { CalculateMetadataFunction } from 'remotion';
import { staticFile } from 'remotion';
import { getAudioDuration } from './get-audio-duration';
import { AUDIO_FILES, VIDEO_CONFIG, AUDIO_DELAYS } from './constants';

export type SceneTiming = {
  start: number;
  end: number;
  audioDurationFrames: number;
};

export type CalculatedTiming = {
  scene1: SceneTiming;
  scene2: SceneTiming;
  scene3: SceneTiming;
  scene4: SceneTiming;
  scene5: SceneTiming;
  scene6: SceneTiming;
  scene7: SceneTiming;
  totalDuration: number;
};

export type VacalibrationProps = {
  timing: CalculatedTiming;
};

// Buffer frames to add at end of each scene (for transitions/padding)
const SCENE_BUFFER_FRAMES = 15; // 0.5 seconds at 30fps

// Default timing for initial render (will be replaced by calculateMetadata)
export const DEFAULT_TIMING: CalculatedTiming = {
  scene1: { start: 0, end: 300, audioDurationFrames: 255 },
  scene2: { start: 300, end: 1200, audioDurationFrames: 885 },
  scene3: { start: 1200, end: 2400, audioDurationFrames: 1185 },
  scene4: { start: 2400, end: 3600, audioDurationFrames: 1185 },
  scene5: { start: 3600, end: 4200, audioDurationFrames: 585 },
  scene6: { start: 4200, end: 4500, audioDurationFrames: 285 },
  scene7: { start: 4500, end: 4650, audioDurationFrames: 135 },
  totalDuration: 4650,
};

export const calculateMetadata: CalculateMetadataFunction<VacalibrationProps> = async ({
  props,
}) => {
  const fps = VIDEO_CONFIG.fps;

  // Fetch all audio durations in parallel
  const [
    scene1Duration,
    scene2Duration,
    scene3Duration,
    scene4Duration,
    scene5Duration,
    scene6Duration,
    scene7Duration,
  ] = await Promise.all([
    getAudioDuration(staticFile(AUDIO_FILES.scene1)),
    getAudioDuration(staticFile(AUDIO_FILES.scene2)),
    getAudioDuration(staticFile(AUDIO_FILES.scene3)),
    getAudioDuration(staticFile(AUDIO_FILES.scene4)),
    getAudioDuration(staticFile(AUDIO_FILES.scene5)),
    getAudioDuration(staticFile(AUDIO_FILES.scene6)),
    getAudioDuration(staticFile(AUDIO_FILES.scene7)),
  ]);

  // Convert to frames and add buffer + audio delay
  const scene1Frames = Math.ceil(scene1Duration * fps) + AUDIO_DELAYS.scene1 + SCENE_BUFFER_FRAMES;
  const scene2Frames = Math.ceil(scene2Duration * fps) + AUDIO_DELAYS.scene2 + SCENE_BUFFER_FRAMES;
  const scene3Frames = Math.ceil(scene3Duration * fps) + AUDIO_DELAYS.scene3 + SCENE_BUFFER_FRAMES;
  const scene4Frames = Math.ceil(scene4Duration * fps) + AUDIO_DELAYS.scene4 + SCENE_BUFFER_FRAMES;
  const scene5Frames = Math.ceil(scene5Duration * fps) + AUDIO_DELAYS.scene5 + SCENE_BUFFER_FRAMES;
  const scene6Frames = Math.ceil(scene6Duration * fps) + AUDIO_DELAYS.scene6 + SCENE_BUFFER_FRAMES;
  const scene7Frames = Math.ceil(scene7Duration * fps) + AUDIO_DELAYS.scene7 + SCENE_BUFFER_FRAMES;

  // Build the timing object
  let currentFrame = 0;

  const scene1: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene1Frames,
    audioDurationFrames: Math.ceil(scene1Duration * fps),
  };
  currentFrame = scene1.end;

  const scene2: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene2Frames,
    audioDurationFrames: Math.ceil(scene2Duration * fps),
  };
  currentFrame = scene2.end;

  const scene3: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene3Frames,
    audioDurationFrames: Math.ceil(scene3Duration * fps),
  };
  currentFrame = scene3.end;

  const scene4: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene4Frames,
    audioDurationFrames: Math.ceil(scene4Duration * fps),
  };
  currentFrame = scene4.end;

  const scene5: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene5Frames,
    audioDurationFrames: Math.ceil(scene5Duration * fps),
  };
  currentFrame = scene5.end;

  const scene6: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene6Frames,
    audioDurationFrames: Math.ceil(scene6Duration * fps),
  };
  currentFrame = scene6.end;

  const scene7: SceneTiming = {
    start: currentFrame,
    end: currentFrame + scene7Frames,
    audioDurationFrames: Math.ceil(scene7Duration * fps),
  };

  const timing: CalculatedTiming = {
    scene1,
    scene2,
    scene3,
    scene4,
    scene5,
    scene6,
    scene7,
    totalDuration: scene7.end,
  };

  return {
    durationInFrames: timing.totalDuration,
    props: {
      ...props,
      timing,
    },
  };
};
