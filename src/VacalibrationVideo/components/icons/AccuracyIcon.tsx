import React from 'react';
import { COLORS } from '../../constants';
import { ScaleIn } from '../shared/ScaleIn';

interface AccuracyIconProps {
  size?: number;
  delay?: number;
  color?: string;
}

export const AccuracyIcon: React.FC<AccuracyIconProps> = ({
  size = 100,
  delay = 0,
  color = COLORS.primaryBlue,
}) => {
  return (
    <ScaleIn delay={delay}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Target circles */}
        <circle cx="50" cy="50" r="35" fill={COLORS.lightGray} stroke={color} strokeWidth="2" />
        <circle cx="50" cy="50" r="25" fill={COLORS.white} stroke={color} strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill={COLORS.lightGray} stroke={color} strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill={color} />

        {/* Arrow hitting bullseye */}
        <line
          x1="20"
          y1="20"
          x2="48"
          y2="48"
          stroke={COLORS.errorRed}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M 15 20 L 20 15 L 25 23 Z" fill={COLORS.errorRed} />
      </svg>
    </ScaleIn>
  );
};
