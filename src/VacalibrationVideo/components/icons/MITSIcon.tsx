import React from 'react';
import { COLORS } from '../../constants';
import { ScaleIn } from '../shared/ScaleIn';

interface MITSIconProps {
  size?: number;
  delay?: number;
  color?: string;
}

export const MITSIcon: React.FC<MITSIconProps> = ({
  size = 100,
  delay = 0,
  color = COLORS.mitsGold,
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
        {/* Microscope body */}
        <rect x="35" y="15" width="6" height="30" fill={color} />
        <rect x="30" y="45" width="16" height="4" fill={color} />

        {/* Eyepiece */}
        <circle cx="38" cy="10" r="4" fill={color} />

        {/* Objective lens */}
        <circle cx="38" cy="52" r="6" fill={color} />
        <circle cx="38" cy="52" r="3" fill={COLORS.primaryBlue} />

        {/* Stage */}
        <rect x="20" y="58" width="36" height="3" fill={color} />

        {/* Base */}
        <ellipse cx="38" cy="80" rx="25" ry="8" fill={color} />
        <rect x="36" y="60" width="4" height="20" fill={color} />

        {/* Star to indicate "gold standard" */}
        <path
          d="M 75 20 L 78 28 L 86 28 L 80 33 L 82 41 L 75 36 L 68 41 L 70 33 L 64 28 L 72 28 Z"
          fill={COLORS.mitsGold}
          stroke={COLORS.white}
          strokeWidth="1"
        />
      </svg>
    </ScaleIn>
  );
};
