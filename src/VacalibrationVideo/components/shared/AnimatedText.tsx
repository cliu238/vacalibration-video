import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  stagger = 3, // frames between each word
  style = {},
  wordStyle = {},
}) => {
  const frame = useCurrentFrame();
  const words = text.split(' ');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em', ...style }}>
      {words.map((word, index) => {
        const wordDelay = delay + index * stagger;
        const opacity = interpolate(
          frame,
          [wordDelay, wordDelay + 10],
          [0, 1],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );

        const translateY = interpolate(
          frame,
          [wordDelay, wordDelay + 10],
          [10, 0],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );

        return (
          <span
            key={index}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              ...wordStyle,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
