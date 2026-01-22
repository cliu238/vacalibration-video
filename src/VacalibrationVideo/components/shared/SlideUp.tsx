import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  style?: React.CSSProperties;
}

export const SlideUp: React.FC<SlideUpProps> = ({
  children,
  delay = 0,
  duration = 30,
  distance = 50,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const translateY = interpolate(
    frame,
    [delay, delay + duration],
    [distance, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const opacity = interpolate(
    frame,
    [delay, delay + duration],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div
      style={{
        ...style,
        transform: `translateY(${translateY}px)`,
        opacity,
      }}
    >
      {children}
    </div>
  );
};
