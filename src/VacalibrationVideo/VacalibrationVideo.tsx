import React from 'react';
import { Sequence } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Inter';
import '@remotion/google-fonts/JetBrainsMono';
import { AUDIO_FILES, AUDIO_DELAYS, AUDIO_VOLUME } from './constants';
import { SceneAudio } from './components/shared/SceneAudio';
import { Scene1_Title } from './scenes/Scene1_Title';
import { Scene2_Problem } from './scenes/Scene2_Problem';
import { Scene3_Solution } from './scenes/Scene3_Solution';
import { Scene4_Math } from './scenes/Scene4_Math';
import { Scene5_Results } from './scenes/Scene5_Results';
import { Scene6_CTA } from './scenes/Scene6_CTA';
import { Scene7_Outro } from './scenes/Scene7_Outro';
import { CalculatedTiming } from './calculate-metadata';

// Load Google Fonts
const { fontFamily: interFontFamily } = loadFont();

export type VacalibrationVideoProps = {
  timing: CalculatedTiming;
};

export const VacalibrationVideo: React.FC<VacalibrationVideoProps> = ({ timing }) => {
  return (
    <div
      style={{
        fontFamily: `${interFontFamily}, sans-serif`,
        width: '100%',
        height: '100%',
      }}
    >
      {/* Scene 1: Title & Hook */}
      <Sequence
        from={timing.scene1.start}
        durationInFrames={timing.scene1.end - timing.scene1.start}
      >
        <Scene1_Title />
        <Sequence from={AUDIO_DELAYS.scene1}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene1}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene1.end - timing.scene1.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 2: The Problem */}
      <Sequence
        from={timing.scene2.start}
        durationInFrames={timing.scene2.end - timing.scene2.start}
      >
        <Scene2_Problem />
        <Sequence from={AUDIO_DELAYS.scene2}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene2}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene2.end - timing.scene2.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 3: The Solution */}
      <Sequence
        from={timing.scene3.start}
        durationInFrames={timing.scene3.end - timing.scene3.start}
      >
        <Scene3_Solution />
        <Sequence from={AUDIO_DELAYS.scene3}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene3}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene3.end - timing.scene3.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 4: Mathematical Framework */}
      <Sequence
        from={timing.scene4.start}
        durationInFrames={timing.scene4.end - timing.scene4.start}
      >
        <Scene4_Math />
        <Sequence from={AUDIO_DELAYS.scene4}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene4}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene4.end - timing.scene4.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 5: Results & Impact */}
      <Sequence
        from={timing.scene5.start}
        durationInFrames={timing.scene5.end - timing.scene5.start}
      >
        <Scene5_Results />
        <Sequence from={AUDIO_DELAYS.scene5}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene5}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene5.end - timing.scene5.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 6: Call to Action */}
      <Sequence
        from={timing.scene6.start}
        durationInFrames={timing.scene6.end - timing.scene6.start}
      >
        <Scene6_CTA />
        <Sequence from={AUDIO_DELAYS.scene6}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene6}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene6.end - timing.scene6.start}
          />
        </Sequence>
      </Sequence>

      {/* Scene 7: Credits & Outro */}
      <Sequence
        from={timing.scene7.start}
        durationInFrames={timing.scene7.end - timing.scene7.start}
      >
        <Scene7_Outro />
        <Sequence from={AUDIO_DELAYS.scene7}>
          <SceneAudio
            audioFile={AUDIO_FILES.scene7}
            fadeInDuration={AUDIO_VOLUME.fadeInDuration}
            fadeOutDuration={AUDIO_VOLUME.fadeOutDuration}
            volume={AUDIO_VOLUME.narration}
            sceneDuration={timing.scene7.end - timing.scene7.start}
          />
        </Sequence>
      </Sequence>
    </div>
  );
};
