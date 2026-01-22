import React from 'react';
import { COLORS } from '../../constants';
import { ScaleIn } from '../shared/ScaleIn';

interface ShieldIconProps {
  size?: number;
  delay?: number;
  color?: string;
}

export const ShieldIcon: React.FC<ShieldIconProps> = ({
  size = 100,
  delay = 0,
  color = COLORS.secondaryGreen,
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
        {/* Shield shape */}
        <path
          d="M 50 10 C 35 10 25 15 20 18 L 20 45 C 20 65 35 80 50 90 C 65 80 80 65 80 45 L 80 18 C 75 15 65 10 50 10 Z"
          fill={color}
          stroke={COLORS.white}
          strokeWidth="2"
        />

        {/* Checkmark */}
        <path
          d="M 35 45 L 45 55 L 65 35"
          stroke={COLORS.white}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </ScaleIn>
  );
};
