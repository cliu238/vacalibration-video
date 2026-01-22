import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../constants';
import { FadeIn } from '../components/shared/FadeIn';
import { SlideUp } from '../components/shared/SlideUp';
import { ShieldIcon } from '../components/icons/ShieldIcon';
import { MITSIcon } from '../components/icons/MITSIcon';
import { WorldMap } from '../components/diagrams/WorldMap';
import { FlowchartPhase1 } from '../components/diagrams/FlowchartPhase1';
import { FlowchartPhase2 } from '../components/diagrams/FlowchartPhase2';

export const Scene3_Solution: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {/* Section 1: The VA-Calibration Solution (frames 0-300) */}
      {frame < 300 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ShieldIcon size={150} delay={0} />

          <FadeIn delay={25} duration={30}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.secondaryGreen,
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              The VA-Calibration Solution
            </div>
          </FadeIn>

          <FadeIn delay={55} duration={40}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                color: COLORS.text,
                textAlign: 'center',
                maxWidth: 1000,
                lineHeight: 1.6,
              }}
            >
              Uses gold-standard MITS data from CHAMPS to quantify and correct systematic biases
            </div>
          </FadeIn>

          {/* MITS Icon */}
          <div style={{ marginTop: 60 }}>
            <MITSIcon size={130} delay={110} />
          </div>

          <FadeIn delay={140} duration={40}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                color: COLORS.text,
                textAlign: 'center',
                marginTop: 20,
                maxWidth: 900,
              }}
            >
              <span style={{ fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.mitsGold }}>MITS</span>
              {' '}(Minimally Invasive Tissue Sampling) provides the most accurate cause of death determination
            </div>
          </FadeIn>
        </div>
      )}

      {/* Section 2: CHAMPS Project (frames 300-600) */}
      {frame >= 300 && frame < 600 && (
        <div style={{ width: '100%' }}>
          <WorldMap delay={300} />
        </div>
      )}

      {/* Section 3: How It Works - Phase 1 (frames 600-900) */}
      {frame >= 600 && frame < 900 && (
        <div style={{ width: '100%' }}>
          <FlowchartPhase1 delay={600} />
        </div>
      )}

      {/* Section 4: How It Works - Phase 2 (frames 900-1200) */}
      {frame >= 900 && (
        <div style={{ width: '100%' }}>
          <FlowchartPhase2 delay={900} />
        </div>
      )}
    </AbsoluteFill>
  );
};
