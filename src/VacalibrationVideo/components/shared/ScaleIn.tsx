import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { EASING } from '../../constants';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  springConfig?: typeof EASING.spring.default;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  style = {},
  springConfig = EASING.spring.default,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: springConfig,
    from: 0,
    to: 1,
  });

  return (
    <div
      style={{
        ...style,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};
