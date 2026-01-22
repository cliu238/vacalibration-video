import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../constants';
import { AnimatedText } from '../components/shared/AnimatedText';
import { FadeIn } from '../components/shared/FadeIn';

export const Scene1_Title: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      {/* Main Title */}
      <AnimatedText
        text="VA-Calibration: Improving Cause of Death Estimates"
        delay={30}
        stagger={4}
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.heading,
          fontSize: TYPOGRAPHY.fontSize.hero,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.primaryBlue,
          textAlign: 'center',
          marginBottom: 40,
          maxWidth: 1600,
        }}
      />

      {/* Subtitle */}
      <FadeIn delay={120} duration={40}>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.h3,
            fontWeight: TYPOGRAPHY.fontWeight.medium,
            color: COLORS.text,
            textAlign: 'center',
            maxWidth: 1200,
          }}
        >
          Using Gold-Standard Data to Correct Systematic Biases
        </div>
      </FadeIn>

      {/* Decorative line */}
      <FadeIn delay={180} duration={30}>
        <div
          style={{
            width: 400,
            height: 4,
            backgroundColor: COLORS.accentOrange,
            marginTop: 40,
            borderRadius: 2,
          }}
        />
      </FadeIn>
    </AbsoluteFill>
  );
};
