import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../constants';
import { FadeIn } from '../components/shared/FadeIn';

export const Scene7_Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeOut = interpolate(
    frame,
    [100, 150],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
        opacity: fadeOut,
      }}
    >
      {/* Credits */}
      <FadeIn delay={0} duration={30}>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.h3,
            color: COLORS.text,
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          Based on research by
        </div>
      </FadeIn>

      <FadeIn delay={25} duration={30}>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.h2,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.primaryBlue,
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          Pramanik et al. 2025
        </div>
      </FadeIn>

      {/* CHAMPS & COMSA */}
      <FadeIn delay={50} duration={30}>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.body,
            color: COLORS.text,
            textAlign: 'center',
            lineHeight: 1.8,
          }}
        >
          <div>CHAMPS Network</div>
          <div>&</div>
          <div>COMSA Project</div>
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};
