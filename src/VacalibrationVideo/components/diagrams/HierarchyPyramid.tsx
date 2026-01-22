import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../../constants';

interface HierarchyPyramidProps {
  delay?: number;
  style?: React.CSSProperties;
}

export const HierarchyPyramid: React.FC<HierarchyPyramidProps> = ({
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const level1Opacity = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const level2Opacity = interpolate(frame, [delay + 25, delay + 45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const level3Opacity = interpolate(frame, [delay + 50, delay + 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

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
        Hierarchical Model Structure
      </div>

      {/* Pyramid */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        {/* Level 1: Country-specific */}
        <div style={{ opacity: level1Opacity }}>
          <div
            style={{
              width: 500,
              padding: 30,
              backgroundColor: COLORS.primaryBlue,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.white,
                marginBottom: 8,
              }}
            >
              Country-Specific Parameters
            </div>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                color: COLORS.white,
              }}
            >
              Most flexible, uses local data when available
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <svg width="40" height="30" style={{ opacity: level1Opacity }}>
          <defs>
            <marker id="arrowdown1" markerWidth="10" markerHeight="10" refX="5" refY="9" orient="auto">
              <polygon points="0 0, 10 0, 5 10" fill={COLORS.mediumGray} />
            </marker>
          </defs>
          <line x1="20" y1="0" x2="20" y2="25" stroke={COLORS.mediumGray} strokeWidth="3" markerEnd="url(#arrowdown1)" />
        </svg>

        {/* Level 2: Pooled */}
        <div style={{ opacity: level2Opacity }}>
          <div
            style={{
              width: 400,
              padding: 30,
              backgroundColor: COLORS.accentOrange,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.white,
                marginBottom: 8,
              }}
            >
              Pooled Parameters
            </div>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                color: COLORS.white,
              }}
            >
              Shares information across countries
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <svg width="40" height="30" style={{ opacity: level2Opacity }}>
          <defs>
            <marker id="arrowdown2" markerWidth="10" markerHeight="10" refX="5" refY="9" orient="auto">
              <polygon points="0 0, 10 0, 5 10" fill={COLORS.mediumGray} />
            </marker>
          </defs>
          <line x1="20" y1="0" x2="20" y2="25" stroke={COLORS.mediumGray} strokeWidth="3" markerEnd="url(#arrowdown2)" />
        </svg>

        {/* Level 3: Base Model */}
        <div style={{ opacity: level3Opacity }}>
          <div
            style={{
              width: 300,
              padding: 30,
              backgroundColor: COLORS.secondaryGreen,
              borderRadius: 12,
              border: `3px solid ${COLORS.white}`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.body,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.white,
                marginBottom: 8,
              }}
            >
              Base Model
            </div>
            <div
              style={{
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                color: COLORS.white,
              }}
            >
              Foundation (aᵢ, ρⱼ)
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div
        style={{
          marginTop: 40,
          textAlign: 'center',
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.caption,
          color: COLORS.mediumGray,
          fontStyle: 'italic',
          opacity: interpolate(frame, [delay + 75, delay + 95], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        Borrows strength across countries when data is limited
      </div>
    </div>
  );
};
