import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../constants';
import { FadeIn } from '../components/shared/FadeIn';
import { SlideUp } from '../components/shared/SlideUp';
import { BeforeAfterChart } from '../components/charts/BeforeAfterChart';

export const Scene5_Results: React.FC = () => {
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
      {/* Section 1: Mozambique Case Study (frames 0-300) */}
      {frame < 300 && (
        <div style={{ width: '100%' }}>
          <BeforeAfterChart delay={0} />
        </div>
      )}

      {/* Section 2: Model Performance (frames 300-600) */}
      {frame >= 300 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <SlideUp delay={300} duration={30}>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h2,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.primaryBlue,
                marginBottom: 50,
              }}
            >
              Model Performance
            </div>
          </SlideUp>

          {/* Checkmarks with statistics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Item 1 */}
            <FadeIn delay={340} duration={30}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: COLORS.secondaryGreen,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 100 100">
                    <path
                      d="M 20 50 L 40 70 L 80 30"
                      stroke={COLORS.white}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.body,
                    color: COLORS.text,
                  }}
                >
                  <span style={{ fontWeight: TYPOGRAPHY.fontWeight.bold, fontSize: TYPOGRAPHY.fontSize.h3, color: COLORS.secondaryGreen }}>
                    34-38%
                  </span>
                  {' '}reduction in error (neonates)
                </div>
              </div>
            </FadeIn>

            {/* Item 2 */}
            <FadeIn delay={380} duration={30}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: COLORS.secondaryGreen,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 100 100">
                    <path
                      d="M 20 50 L 40 70 L 80 30"
                      stroke={COLORS.white}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.body,
                    color: COLORS.text,
                  }}
                >
                  <span style={{ fontWeight: TYPOGRAPHY.fontWeight.bold, fontSize: TYPOGRAPHY.fontSize.h3, color: COLORS.secondaryGreen }}>
                    95%
                  </span>
                  {' '}credible intervals well-calibrated
                </div>
              </div>
            </FadeIn>

            {/* Item 3 */}
            <FadeIn delay={420} duration={30}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: COLORS.secondaryGreen,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 100 100">
                    <path
                      d="M 20 50 L 40 70 L 80 30"
                      stroke={COLORS.white}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.body,
                    color: COLORS.text,
                  }}
                >
                  Outperforms simpler calibration models
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
