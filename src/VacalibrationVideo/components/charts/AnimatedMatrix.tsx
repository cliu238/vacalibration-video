import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY, CAUSE_LABELS, EXAMPLE_MATRIX } from '../../constants';

interface AnimatedMatrixProps {
  delay?: number;
  cellDelay?: number;
  style?: React.CSSProperties;
}

export const AnimatedMatrix: React.FC<AnimatedMatrixProps> = ({
  delay = 0,
  cellDelay = 5,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const cellSize = 120;
  const headerSize = 100;

  const getCellOpacity = (row: number, col: number) => {
    const cellIndex = row * 3 + col;
    const cellStart = delay + cellIndex * cellDelay;
    return interpolate(
      frame,
      [cellStart, cellStart + 15],
      [0, 1],
      {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      }
    );
  };

  const getCellColor = (row: number, col: number, value: number) => {
    if (row === col) {
      // Diagonal (sensitivity) - green
      return COLORS.matrixGreen;
    } else {
      // Off-diagonal (errors) - orange
      return COLORS.matrixOrange;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...style }}>
      {/* Title */}
      <div
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.h3,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.text,
          marginBottom: 20,
          opacity: interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        Misclassification Matrix (Φ)
      </div>

      {/* Matrix container */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Column headers */}
        <div style={{ display: 'flex', marginLeft: headerSize }}>
          <div style={{ width: cellSize, textAlign: 'center', fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.text, marginBottom: 10 }}>
            {CAUSE_LABELS[0]}
          </div>
          <div style={{ width: cellSize, textAlign: 'center', fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.text, marginBottom: 10 }}>
            {CAUSE_LABELS[1]}
          </div>
          <div style={{ width: cellSize, textAlign: 'center', fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, fontWeight: TYPOGRAPHY.fontWeight.bold, color: COLORS.text, marginBottom: 10 }}>
            {CAUSE_LABELS[2]}
          </div>
        </div>

        {/* Rows */}
        {EXAMPLE_MATRIX.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', alignItems: 'center' }}>
            {/* Row header */}
            <div
              style={{
                width: headerSize,
                textAlign: 'right',
                paddingRight: 15,
                fontFamily: TYPOGRAPHY.fontFamily.body,
                fontSize: TYPOGRAPHY.fontSize.caption,
                fontWeight: TYPOGRAPHY.fontWeight.bold,
                color: COLORS.text,
              }}
            >
              {CAUSE_LABELS[rowIndex]}
            </div>

            {/* Cells */}
            {row.map((value, colIndex) => {
              const opacity = getCellOpacity(rowIndex, colIndex);
              const bgColor = getCellColor(rowIndex, colIndex, value);

              return (
                <div
                  key={colIndex}
                  style={{
                    width: cellSize,
                    height: cellSize,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: bgColor,
                    border: `2px solid ${COLORS.white}`,
                    opacity,
                    margin: 2,
                  }}
                >
                  <div
                    style={{
                      fontFamily: TYPOGRAPHY.fontFamily.body,
                      fontSize: TYPOGRAPHY.fontSize.h2,
                      fontWeight: TYPOGRAPHY.fontWeight.bold,
                      color: COLORS.white,
                    }}
                  >
                    {(value * 100).toFixed(0)}%
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'flex',
          gap: 40,
          marginTop: 30,
          opacity: interpolate(frame, [delay + 50, delay + 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, backgroundColor: COLORS.matrixGreen }} />
          <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.text }}>
            Sensitivity (correct)
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, backgroundColor: COLORS.matrixOrange }} />
          <div style={{ fontFamily: TYPOGRAPHY.fontFamily.body, fontSize: TYPOGRAPHY.fontSize.caption, color: COLORS.text }}>
            Misclassification
          </div>
        </div>
      </div>
    </div>
  );
};
