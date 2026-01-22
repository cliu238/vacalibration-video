import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY, MOZAMBIQUE_DATA } from '../../constants';

interface BeforeAfterChartProps {
  delay?: number;
  style?: React.CSSProperties;
}

export const BeforeAfterChart: React.FC<BeforeAfterChartProps> = ({
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const barHeight = 60;
  const maxBarWidth = 400;

  const categories = Object.keys(MOZAMBIQUE_DATA.before) as (keyof typeof MOZAMBIQUE_DATA.before)[];

  return (
    <div style={{ padding: 40, ...style }}>
      {/* Title */}
      <div
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.h3,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.text,
          marginBottom: 10,
          textAlign: 'center',
        }}
      >
        Mozambique Neonatal Case Study
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.caption,
          color: COLORS.mediumGray,
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        {MOZAMBIQUE_DATA.totalNeonates} neonates calibrated
      </div>

      {/* Before/After comparison */}
      <div style={{ display: 'flex', gap: 60, justifyContent: 'center' }}>
        {/* Before (Uncalibrated) */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: TYPOGRAPHY.fontFamily.body,
              fontSize: TYPOGRAPHY.fontSize.h3,
              fontWeight: TYPOGRAPHY.fontWeight.bold,
              color: COLORS.accentOrange,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Before (Uncalibrated)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {categories.map((category, index) => {
              const value = MOZAMBIQUE_DATA.before[category];
              const itemDelay = delay + index * 15;
              const barWidth = (value / 40) * maxBarWidth;

              const progress = interpolate(
                frame,
                [itemDelay, itemDelay + 30],
                [0, barWidth],
                { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
              );

              return (
                <div key={category}>
                  <div
                    style={{
                      fontFamily: TYPOGRAPHY.fontFamily.body,
                      fontSize: TYPOGRAPHY.fontSize.caption,
                      color: COLORS.text,
                      marginBottom: 8,
                    }}
                  >
                    {category}
                  </div>
                  <div
                    style={{
                      width: progress,
                      height: barHeight,
                      backgroundColor: COLORS.accentOrange,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 15,
                    }}
                  >
                    {progress > 60 && (
                      <span
                        style={{
                          fontFamily: TYPOGRAPHY.fontFamily.body,
                          fontSize: TYPOGRAPHY.fontSize.body,
                          fontWeight: TYPOGRAPHY.fontWeight.bold,
                          color: COLORS.white,
                        }}
                      >
                        {value.toFixed(1)}%
                      </span>
                    )}
                  </div>
                  {progress <= 60 && progress > 0 && (
                    <span
                      style={{
                        fontFamily: TYPOGRAPHY.fontFamily.body,
                        fontSize: TYPOGRAPHY.fontSize.body,
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        color: COLORS.text,
                        marginLeft: 10,
                      }}
                    >
                      {value.toFixed(1)}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* After (Calibrated) */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: TYPOGRAPHY.fontFamily.body,
              fontSize: TYPOGRAPHY.fontSize.h3,
              fontWeight: TYPOGRAPHY.fontWeight.bold,
              color: COLORS.secondaryGreen,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            After (Calibrated)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {categories.map((category, index) => {
              const value = MOZAMBIQUE_DATA.after[category];
              const itemDelay = delay + 45 + index * 15;
              const barWidth = (value / 40) * maxBarWidth;

              const progress = interpolate(
                frame,
                [itemDelay, itemDelay + 30],
                [0, barWidth],
                { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
              );

              return (
                <div key={category}>
                  <div
                    style={{
                      fontFamily: TYPOGRAPHY.fontFamily.body,
                      fontSize: TYPOGRAPHY.fontSize.caption,
                      color: COLORS.text,
                      marginBottom: 8,
                    }}
                  >
                    {category}
                  </div>
                  <div
                    style={{
                      width: progress,
                      height: barHeight,
                      backgroundColor: COLORS.secondaryGreen,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 15,
                    }}
                  >
                    {progress > 60 && (
                      <span
                        style={{
                          fontFamily: TYPOGRAPHY.fontFamily.body,
                          fontSize: TYPOGRAPHY.fontSize.body,
                          fontWeight: TYPOGRAPHY.fontWeight.bold,
                          color: COLORS.white,
                        }}
                      >
                        {value.toFixed(1)}%
                      </span>
                    )}
                  </div>
                  {progress <= 60 && progress > 0 && (
                    <span
                      style={{
                        fontFamily: TYPOGRAPHY.fontFamily.body,
                        fontSize: TYPOGRAPHY.fontSize.body,
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        color: COLORS.text,
                        marginLeft: 10,
                      }}
                    >
                      {value.toFixed(1)}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
