import React from 'react';
import { Sequence } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Inter';
import { loadFont as loadJetBrainsMono } from '@remotion/google-fonts/JetBrainsMono';
import { SCENE_TIMING, AUDIO_FILES, AUDIO_DELAYS, AUDIO_VOLUME } from './constants';
import { SceneAudio } from './components/shared/SceneAudio';
import { Scene1_Title } from './scenes/Scene1_Title';
import { Scene2_Problem } from './scenes/Scene2_Problem';
import { Scene3_Solution } from './scenes/Scene3_Solution';
import { Scene4_Math } from './scenes/Scene4_Math';
import { Scene5_Results } from './scenes/Scene5_Results';
import { Scene6_CTA } from './scenes/Scene6_CTA';
import { Scene7_Outro } from './scenes/Scene7_Outro';

// Load Google Fonts
const { fontFamily: interFontFamily } = loadFont();
const { fontFamily: jetbrainsMonoFontFamily } = loadJetBrainsMono();

export const VacalibrationVideo: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: `${interFontFamily}, sans-serif`,
        width: '100%',
        height: '100%',
      }}
    >
      {/* Scene 1: Title & Hook (0-10 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene1.start}
        durationInFrames={SCENE_TIMING.scene1.end - SCENE_TIMING.scene1.start}
      >
        <Scene1_Title />
        <Sequence from={AUDIO_DELAYS.scene1}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene1}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene1.end - SCENE_TIMING.scene1.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 2: The Problem (10-40 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene2.start}
        durationInFrames={SCENE_TIMING.scene2.end - SCENE_TIMING.scene2.start}
      >
        <Scene2_Problem />
        <Sequence from={AUDIO_DELAYS.scene2}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene2}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene2.end - SCENE_TIMING.scene2.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 3: The Solution (40-80 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene3.start}
        durationInFrames={SCENE_TIMING.scene3.end - SCENE_TIMING.scene3.start}
      >
        <Scene3_Solution />
        <Sequence from={AUDIO_DELAYS.scene3}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene3}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene3.end - SCENE_TIMING.scene3.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 4: Mathematical Framework (80-120 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene4.start}
        durationInFrames={SCENE_TIMING.scene4.end - SCENE_TIMING.scene4.start}
      >
        <Scene4_Math />
        <Sequence from={AUDIO_DELAYS.scene4}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene4}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene4.end - SCENE_TIMING.scene4.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 5: Results & Impact (120-140 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene5.start}
        durationInFrames={SCENE_TIMING.scene5.end - SCENE_TIMING.scene5.start}
      >
        <Scene5_Results />
        <Sequence from={AUDIO_DELAYS.scene5}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene5}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene5.end - SCENE_TIMING.scene5.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 6: Call to Action (140-150 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene6.start}
        durationInFrames={SCENE_TIMING.scene6.end - SCENE_TIMING.scene6.start}
      >
        <Scene6_CTA />
        <Sequence from={AUDIO_DELAYS.scene6}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene6}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene6.end - SCENE_TIMING.scene6.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 7: Credits & Outro (150-155 seconds) */}
      <Sequence
        from={SCENE_TIMING.scene7.start}
        durationInFrames={SCENE_TIMING.scene7.end - SCENE_TIMING.scene7.start}
      >
        <Scene7_Outro />
        <Sequence from={AUDIO_DELAYS.scene7}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene7}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={SCENE_TIMING.scene7.end - SCENE_TIMING.scene7.start}
          />
        </Sequence>
      </Sequence>
    </div>
  );
};
