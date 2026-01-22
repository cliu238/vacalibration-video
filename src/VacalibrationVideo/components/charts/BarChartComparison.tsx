import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY } from '../../constants';

interface DataPoint {
  label: string;
  uncalibrated: number;
  true: number;
}

interface BarChartComparisonProps {
  data: DataPoint[];
  delay?: number;
  style?: React.CSSProperties;
}

export const BarChartComparison: React.FC<BarChartComparisonProps> = ({
  data,
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const barHeight = 50;
  const maxBarWidth = 500;
  const maxValue = Math.max(...data.flatMap(d => [d.uncalibrated, d.true]));

  return (
    <div style={{ padding: 40, ...style }}>
      {/* Title */}
      <div
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.h3,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.text,
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        Uncalibrated vs True CSMF
      </div>

      {/* Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {data.map((item, index) => {
          const itemDelay = delay + index * 20;
          const uncalibratedWidth = (item.uncalibrated / maxValue) * maxBarWidth;
          const trueWidth = (item.true / maxValue) * maxBarWidth;

          const uncalibratedProgress = interpolate(
            frame,
            [itemDelay, itemDelay + 30],
            [0, uncalibratedWidth],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          const trueProgress = interpolate(
            frame,
            [itemDelay + 10, itemDelay + 40],
            [0, trueWidth],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          return (
            <div key={index}>
              {/* Label */}
              <div
                style={{
                  fontFamily: TYPOGRAPHY.fontFamily.body,
                  fontSize: TYPOGRAPHY.fontSize.body,
                  fontWeight: TYPOGRAPHY.fontWeight.medium,
                  color: COLORS.text,
                  marginBottom: 10,
                }}
              >
                {item.label}
              </div>

              {/* Uncalibrated bar */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <div
                  style={{
                    width: 150,
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.caption,
                    color: COLORS.mediumGray,
                  }}
                >
                  Uncalibrated:
                </div>
                <div
                  style={{
                    width: uncalibratedProgress,
                    height: barHeight,
                    backgroundColor: COLORS.accentOrange,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: 10,
                  }}
                >
                  {uncalibratedProgress > 80 && (
                    <span
                      style={{
                        fontFamily: TYPOGRAPHY.fontFamily.body,
                        fontSize: TYPOGRAPHY.fontSize.caption,
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        color: COLORS.white,
                      }}
                    >
                      {item.uncalibrated.toFixed(1)}%
                    </span>
                  )}
                </div>
                {uncalibratedProgress <= 80 && (
                  <span
                    style={{
                      fontFamily: TYPOGRAPHY.fontFamily.body,
                      fontSize: TYPOGRAPHY.fontSize.caption,
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      color: COLORS.text,
                      marginLeft: 10,
                    }}
                  >
                    {item.uncalibrated.toFixed(1)}%
                  </span>
                )}
              </div>

              {/* True bar */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: 150,
                    fontFamily: TYPOGRAPHY.fontFamily.body,
                    fontSize: TYPOGRAPHY.fontSize.caption,
                    color: COLORS.mediumGray,
                  }}
                >
                  True:
                </div>
                <div
                  style={{
                    width: trueProgress,
                    height: barHeight,
                    backgroundColor: COLORS.secondaryGreen,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: 10,
                  }}
                >
                  {trueProgress > 80 && (
                    <span
                      style={{
                        fontFamily: TYPOGRAPHY.fontFamily.body,
                        fontSize: TYPOGRAPHY.fontSize.caption,
                        fontWeight: TYPOGRAPHY.fontWeight.bold,
                        color: COLORS.white,
                      }}
                    >
                      {item.true.toFixed(1)}%
                    </span>
                  )}
                </div>
                {trueProgress <= 80 && (
                  <span
                    style={{
                      fontFamily: TYPOGRAPHY.fontFamily.body,
                      fontSize: TYPOGRAPHY.fontSize.caption,
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      color: COLORS.text,
                      marginLeft: 10,
                    }}
                  >
                    {item.true.toFixed(1)}%
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          gap: 40,
          marginTop: 40,
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, backgroundColor: COLORS.accentOrange }} />
          <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.text }}>
            Uncalibrated (biased)
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, backgroundColor: COLORS.secondaryGreen }} />
          <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.text }}>
            True CSMF
          </div>
        </div>
      </div>
    </div>
  );
};
