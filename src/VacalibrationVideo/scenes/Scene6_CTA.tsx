import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../constants';
import { FadeIn } from '../components/shared/FadeIn';
import { SlideUp } from '../components/shared/SlideUp';
import { CodeSnippet } from '../components/shared/CodeSnippet';

export const Scene6_CTA: React.FC = () => {
  const frame = useCurrentFrame();

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
      {/* Title */}
      <SlideUp delay={0} duration={30}>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.h2,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.primaryBlue,
            marginBottom: 50,
          }}
        >
          Use VA-Calibration
        </div>
      </SlideUp>

      {/* R Package section */}
      {frame < 150 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <FadeIn delay={40} duration={30}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                marginBottom: 30,
              }}
            >
              {/* R Logo */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: COLORS.primaryBlue,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: 48,
                    fontWeight: TYPOGRAPHY.fontWeight.bold,
                    color: COLORS.white,
                  }}
                >
                  R
                </div>
              </div>

              <div
                style={{
                  fontFamily: TYPOGRAPHY.fontFamily.body,
                  fontSize: TYPOGRAPHY.fontSize.h3,
                  color: COLORS.text,
                }}
              >
                R Package: <span style={{ fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.primaryBlue }}>vacalibration</span>
              </div>
            </div>
          </FadeIn>

          <CodeSnippet
            code="vacalibration(va_data, age_group, country)"
            delay={80}
          />
        </div>
      )}

      {/* Public Resources section */}
      {frame >= 150 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <SlideUp delay={150} duration={30}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h3,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.text,
                marginBottom: 40,
              }}
            >
              Public Resources
            </div>
          </SlideUp>

          <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
            {/* Box 1: R Package */}
            <FadeIn delay={190} duration={30}>
              <div
                style={{
                  width: 250,
                  padding: 30,
                  backgroundColor: COLORS.white,
                  borderRadius: 12,
                  border: `3px solid ${COLORS.primaryBlue}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M 20 30 L 20 70 L 40 70 L 40 50 L 60 70 L 80 70 L 80 30 L 60 30 L 40 50 L 40 30 Z" fill={COLORS.primaryBlue} />
                </svg>
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.body,
                    fontWeight: TYPOGRAPHY.fontWeight.bold,
                    color: COLORS.primaryBlue,
                    marginTop: 20,
                  }}
                >
                  R Package
                </div>
              </div>
            </FadeIn>

            {/* Box 2: Misclassification Matrices */}
            <FadeIn delay={220} duration={30}>
              <div
                style={{
                  width: 250,
                  padding: 30,
                  backgroundColor: COLORS.white,
                  borderRadius: 12,
                  border: `3px solid ${COLORS.secondaryGreen}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <path d="M 30 20 L 70 20 L 70 35 L 55 50 L 70 65 L 70 80 L 30 80 Z" fill={COLORS.secondaryGreen} />
                </svg>
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.body,
                    fontWeight: TYPOGRAPHY.fontWeight.bold,
                    color: COLORS.secondaryGreen,
                    marginTop: 20,
                    textAlign: 'center',
                  }}
                >
                  Misclassification Matrices
                </div>
              </div>
            </FadeIn>

            {/* Box 3: Documentation */}
            <FadeIn delay={250} duration={30}>
              <div
                style={{
                  width: 250,
                  padding: 30,
                  backgroundColor: COLORS.white,
                  borderRadius: 12,
                  border: `3px solid ${COLORS.accentOrange}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <rect x="25" y="15" width="50" height="70" rx="4" fill={COLORS.accentOrange} />
                  <line x1="35" y1="30" x2="65" y2="30" stroke={COLORS.white} strokeWidth="3" />
                  <line x1="35" y1="45" x2="65" y2="45" stroke={COLORS.white} strokeWidth="3" />
                  <line x1="35" y1="60" x2="55" y2="60" stroke={COLORS.white} strokeWidth="3" />
                </svg>
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.body,
                    fontWeight: TYPOGRAPHY.fontWeight.bold,
                    color: COLORS.accentOrange,
                    marginTop: 20,
                  }}
                >
                  Documentation
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Footer */}
          <FadeIn delay={280} duration={30}>
            <div
              style={{
                marginTop: 50,
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                color: COLORS.mediumGray,
                textAlign: 'center',
              }}
            >
              sandy-pramanik/CCVA-Misclassification-Matrices
            </div>
          </FadeIn>
        </div>
      )}
    </AbsoluteFill>
  );
};
