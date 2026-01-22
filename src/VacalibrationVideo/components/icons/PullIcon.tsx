import React from 'react';
import { COLORS } from '../../constants';
import { ScaleIn } from '../shared/ScaleIn';

interface PullIconProps {
  size?: number;
  delay?: number;
  color?: string;
}

export const PullIcon: React.FC<PullIconProps> = ({
  size = 100,
  delay = 0,
  color = COLORS.errorRed,
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
        {/* Magnet shape */}
        <rect x="25" y="20" width="15" height="40" rx="3" fill={color} />
        <rect x="60" y="20" width="15" height="40" rx="3" fill={COLORS.primaryBlue} />
        <rect x="25" y="55" width="50" height="15" rx="3" fill={COLORS.mediumGray} />

        {/* Magnetic field lines (arrows pointing inward) */}
        <path d="M 15 30 Q 10 35 15 40" stroke={COLORS.mediumGray} strokeWidth="2" fill="none" />
        <path d="M 85 30 Q 90 35 85 40" stroke={COLORS.mediumGray} strokeWidth="2" fill="none" />
        <path d="M 50 10 L 50 15" stroke={COLORS.mediumGray} strokeWidth="2" />

        {/* Arrow heads */}
        <path d="M 13 40 L 15 43 L 17 40" fill={COLORS.mediumGray} />
        <path d="M 83 40 L 85 43 L 87 40" fill={COLORS.mediumGray} />
      </svg>
    </ScaleIn>
  );
};
