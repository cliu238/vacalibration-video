import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../constants';
import { FadeIn } from '../components/shared/FadeIn';
import { SlideUp } from '../components/shared/SlideUp';
import { InterviewIcon } from '../components/icons/InterviewIcon';
import { BarChartComparison } from '../components/charts/BarChartComparison';

export const Scene2_Problem: React.FC = () => {
  const frame = useCurrentFrame();

  // Example data for the bar chart
  const comparisonData = [
    { label: 'Pneumonia', uncalibrated: 25.0, true: 30.0 },
    { label: 'Malaria', uncalibrated: 18.0, true: 15.0 },
    { label: 'Sepsis', uncalibrated: 15.0, true: 12.0 },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      {/* Section 1: What is Verbal Autopsy? (frames 0-150) */}
      {frame < 150 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InterviewIcon size={150} delay={0} />

          <FadeIn delay={20} duration={30}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.primaryBlue,
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              What is Verbal Autopsy?
            </div>
          </FadeIn>

          <FadeIn delay={50} duration={40}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                color: COLORS.text,
                textAlign: 'center',
                maxWidth: 900,
                lineHeight: 1.6,
              }}
            >
              Determining cause of death through family interviews when medical records are unavailable
            </div>
          </FadeIn>
        </div>
      )}

      {/* Section 2: The Misclassification Problem (frames 150-450) */}
      {frame >= 150 && frame < 450 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <SlideUp delay={150} duration={30}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.errorRed,
                marginBottom: 30,
              }}
            >
              The Misclassification Problem
            </div>
          </SlideUp>

          <FadeIn delay={180} duration={40}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                color: COLORS.text,
                textAlign: 'center',
                maxWidth: 1000,
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              VA algorithms systematically misclassify causes of death
            </div>
          </FadeIn>

          <FadeIn delay={220} duration={40}>
            <div
              style={{
                backgroundColor: COLORS.white,
                padding: '30px 50px',
                borderRadius: 12,
                border: `3px solid ${COLORS.accentOrange}`,
                marginBottom: 30,
              }}
            >
              <div
                style={{
                  fontFamily: TYPOGRAPHY.fontFamily.body,
                  fontSize: TYPOGRAPHY.fontSize.body,
                  color: COLORS.text,
                  textAlign: 'center',
                }}
              >
                Example: True cause <span style={{ fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.secondaryGreen }}>Pneumonia</span>
                {' '} → VA predicts <span style={{ fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.errorRed }}>Sepsis</span> (20% of time)
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={270} duration={40}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                backgroundColor: COLORS.white,
                padding: '20px 40px',
                borderRadius: 12,
                border: `2px solid ${COLORS.accentOrange}`,
              }}
            >
              <svg width="60" height="60" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke={COLORS.accentOrange} strokeWidth="8" />
                <text x="50" y="65" fontSize="50" fill={COLORS.accentOrange} textAnchor="middle" fontWeight="bold">!</text>
              </svg>
              <div
                style={{
                  fontFamily: TYPOGRAPHY.fontFamily.body,
                  fontSize: TYPOGRAPHY.fontSize.body,
                  color: COLORS.text,
                }}
              >
                Systematic errors lead to biased mortality estimates
              </div>
            </div>
          </FadeIn>
        </div>
      )}

      {/* Section 3: Why This Matters (frames 450-900) */}
      {frame >= 450 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <SlideUp delay={450} duration={30}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.primaryBlue,
                marginBottom: 40,
              }}
            >
              Why This Matters
            </div>
          </SlideUp>

          <BarChartComparison data={comparisonData} delay={490} />

          <FadeIn delay={700} duration={40}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                color: COLORS.text,
                textAlign: 'center',
                maxWidth: 1000,
                lineHeight: 1.6,
                marginTop: 30,
              }}
            >
              Biased estimates mislead public health decisions and resource allocation
            </div>
          </FadeIn>
        </div>
      )}
    </AbsoluteFill>
  );
};
