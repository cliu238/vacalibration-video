import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { FadeIn } from '../shared/FadeIn';

interface FlowchartPhase1Props {
  delay?: number;
  style?: React.CSSProperties;
}

export const FlowchartPhase1: React.FC<FlowchartPhase1Props> = ({
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const boxOpacity1 = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const boxOpacity2 = interpolate(frame, [delay + 25, delay + 45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const boxOpacity3 = interpolate(frame, [delay + 50, delay + 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const arrowOpacity1 = interpolate(frame, [delay + 20, delay + 30], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const arrowOpacity2 = interpolate(frame, [delay + 45, delay + 55], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 40, ...style }}>
      {/* Title */}
      <div
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.h3,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.text,
          marginBottom: 40,
        }}
      >
        Phase 1: Estimate Error Patterns
      </div>

      {/* Flowchart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
        {/* Box 1: MITS + VA */}
        <div style={{ opacity: boxOpacity1 }}>
          <div
            style={{
              width: 200,
              padding: 30,
              backgroundColor: COLORS.mitsGold,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.body, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.white, textAlign: 'center', marginBottom: 10 }}>
              Gold Standard
            </div>
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.white, textAlign: 'center' }}>
              MITS + VA Pairs
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <svg width="80" height="40" style={{ opacity: arrowOpacity1 }}>
          <defs>
            <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={COLORS.primaryBlue} />
            </marker>
          </defs>
          <line x1="0" y1="20" x2="70" y2="20" stroke={COLORS.primaryBlue} strokeWidth="4" markerEnd="url(#arrowhead1)" />
        </svg>

        {/* Box 2: Analysis */}
        <div style={{ opacity: boxOpacity2 }}>
          <div
            style={{
              width: 200,
              padding: 30,
              backgroundColor: COLORS.primaryBlue,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.body, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.white, textAlign: 'center', marginBottom: 10 }}>
              Bayesian Model
            </div>
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.white, textAlign: 'center' }}>
              Estimate Φᵢⱼ
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <svg width="80" height="40" style={{ opacity: arrowOpacity2 }}>
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={COLORS.secondaryGreen} />
            </marker>
          </defs>
          <line x1="0" y1="20" x2="70" y2="20" stroke={COLORS.secondaryGreen} strokeWidth="4" markerEnd="url(#arrowhead2)" />
        </svg>

        {/* Box 3: Output */}
        <div style={{ opacity: boxOpacity3 }}>
          <div
            style={{
              width: 200,
              padding: 30,
              backgroundColor: COLORS.secondaryGreen,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.body, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.white, textAlign: 'center', marginBottom: 10 }}>
              Output
            </div>
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.white, textAlign: 'center' }}>
              Misclassification Matrix
            </div>
          </div>
        </div>
      </div>

      {/* Equation */}
      <FadeIn delay={delay + 75} duration={30}>
        <div
          style={{
            marginTop: 40,
            backgroundColor: COLORS.white,
            padding: '20px 40px',
            borderRadius: 12,
            border: `2px solid ${COLORS.primaryBlue}`,
          }}
        >
          <div
            style={{
              fontFamily: TYPOGRAPHY.fontFamily.code,
              fontSize: TYPOGRAPHY.fontSize.h3,
              color: COLORS.text,
              fontStyle: 'italic',
            }}
          >
            Φᵢⱼ = P(V = j | M = i)
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
