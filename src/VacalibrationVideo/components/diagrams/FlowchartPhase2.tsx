import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { FadeIn } from '../shared/FadeIn';

interface FlowchartPhase2Props {
  delay?: number;
  style?: React.CSSProperties;
}

export const FlowchartPhase2: React.FC<FlowchartPhase2Props> = ({
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
        Phase 2: Apply Corrections
      </div>

      {/* Flowchart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
        {/* Box 1: VA-only data */}
        <div style={{ opacity: boxOpacity1 }}>
          <div
            style={{
              width: 200,
              padding: 30,
              backgroundColor: COLORS.accentOrange,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.body, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.white, textAlign: 'center', marginBottom: 10 }}>
              VA-Only Data
            </div>
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.white, textAlign: 'center' }}>
              Uncalibrated CSMF (p)
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <svg width="80" height="40" style={{ opacity: arrowOpacity1 }}>
          <defs>
            <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={COLORS.primaryBlue} />
            </marker>
          </defs>
          <line x1="0" y1="20" x2="70" y2="20" stroke={COLORS.primaryBlue} strokeWidth="4" markerEnd="url(#arrowhead3)" />
        </svg>

        {/* Box 2: Apply Φ */}
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
              Apply Matrix
            </div>
            <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.white, textAlign: 'center' }}>
              q = Φᵀp
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <svg width="80" height="40" style={{ opacity: arrowOpacity2 }}>
          <defs>
            <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill={COLORS.secondaryGreen} />
            </marker>
          </defs>
          <line x1="0" y1="20" x2="70" y2="20" stroke={COLORS.secondaryGreen} strokeWidth="4" markerEnd="url(#arrowhead4)" />
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
              Calibrated CSMF (q)
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
            q = Φᵀp
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
