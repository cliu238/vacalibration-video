import React from 'react';
import { COLORS } from '../../constants';
import { ScaleIn } from '../shared/ScaleIn';

interface InterviewIconProps {
  size?: number;
  delay?: number;
  color?: string;
}

export const InterviewIcon: React.FC<InterviewIconProps> = ({
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
        {/* Person silhouette */}
        <circle cx="50" cy="30" r="12" fill={color} />
        <path
          d="M 50 45 C 35 45 30 50 30 60 L 30 75 L 70 75 L 70 60 C 70 50 65 45 50 45 Z"
          fill={color}
        />

        {/* Speech bubble */}
        <rect x="60" y="15" width="30" height="20" rx="4" fill={COLORS.accentOrange} />
        <path d="M 65 35 L 60 30 L 70 30 Z" fill={COLORS.accentOrange} />

        {/* Lines in speech bubble */}
        <line x1="65" y1="20" x2="85" y2="20" stroke={COLORS.white} strokeWidth="2" />
        <line x1="65" y1="26" x2="82" y2="26" stroke={COLORS.white} strokeWidth="2" />
      </svg>
    </ScaleIn>
  );
};
