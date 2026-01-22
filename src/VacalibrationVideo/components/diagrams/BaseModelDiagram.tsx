import React from 'react';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { FadeIn } from '../shared/FadeIn';
import { AccuracyIcon } from '../icons/AccuracyIcon';
import { PullIcon } from '../icons/PullIcon';

interface BaseModelDiagramProps {
  delay?: number;
  style?: React.CSSProperties;
}

export const BaseModelDiagram: React.FC<BaseModelDiagramProps> = ({
  delay = 0,
  style = {},
}) => {
  return (
    <div style={{ padding: 40, ...style }}>
      {/* Title */}
      <FadeIn delay={delay} duration={20}>
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.h3,
            fontWeight: TYPOGRAPHY.fontWeight.bold,
            color: COLORS.text,
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Base Model: Two Key Components
        </div>
      </FadeIn>

      {/* Split screen */}
      <div style={{ display: 'flex', gap: 60, justifyContent: 'center' }}>
        {/* Left: Accuracy */}
        <FadeIn delay={delay + 30} duration={30}>
          <div
            style={{
              flex: 1,
              maxWidth: 400,
              padding: 40,
              backgroundColor: COLORS.white,
              borderRadius: 16,
              border: `3px solid ${COLORS.primaryBlue}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <AccuracyIcon size={120} delay={delay + 40} color={COLORS.primaryBlue} />

            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h3,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.primaryBlue,
                marginTop: 20,
                marginBottom: 15,
              }}
            >
              Intrinsic Accuracy
            </div>

            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.code,
                fontSize: TYPOGRAPHY.fontSize.h2,
                color: COLORS.text,
                marginBottom: 20,
                fontStyle: 'italic',
              }}
            >
              aᵢ
            </div>

            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                color: COLORS.text,
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              How accurately the algorithm detects cause i when it's truly present
            </div>
          </div>
        </FadeIn>

        {/* Right: Pull */}
        <FadeIn delay={delay + 50} duration={30}>
          <div
            style={{
              flex: 1,
              maxWidth: 400,
              padding: 40,
              backgroundColor: COLORS.white,
              borderRadius: 16,
              border: `3px solid ${COLORS.errorRed}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <PullIcon size={120} delay={delay + 60} color={COLORS.errorRed} />

            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.h3,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.errorRed,
                marginTop: 20,
                marginBottom: 15,
              }}
            >
              Pull
            </div>

            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.code,
                fontSize: TYPOGRAPHY.fontSize.h2,
                color: COLORS.text,
                marginBottom: 20,
                fontStyle: 'italic',
              }}
            >
              ρⱼ
            </div>

            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                color: COLORS.text,
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Tendency of the algorithm to incorrectly assign deaths to cause j
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer note */}
      <FadeIn delay={delay + 90} duration={30}>
        <div
          style={{
            marginTop: 40,
            textAlign: 'center',
            fontFamily: TYPOGRAPHY.fontFamily.body,
            fontSize: TYPOGRAPHY.fontSize.caption,
            color: COLORS.mediumGray,
            fontStyle: 'italic',
          }}
        >
          Reduces complexity from C² to 2C parameters
        </div>
      </FadeIn>
    </div>
  );
};
