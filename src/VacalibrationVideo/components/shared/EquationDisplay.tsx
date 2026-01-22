import React from 'react';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { FadeIn } from './FadeIn';

interface EquationDisplayProps {
  equation: string;
  description?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const EquationDisplay: React.FC<EquationDisplayProps> = ({
  equation,
  description,
  delay = 0,
  style = {},
}) => {
  return (
    <FadeIn delay={delay} duration={30}>
      <div
        style={{
          backgroundColor: COLORS.white,
          padding: '20px 40px',
          borderRadius: '12px',
          border: `2px solid ${COLORS.primaryBlue}`,
          textAlign: 'center',
          ...style,
        }}
      >
        <div
          style={{
            fontFamily: TYPOGRAPHY.fontFamily.code,
            fontSize: TYPOGRAPHY.fontSize.h3,
            color: COLORS.text,
            fontStyle: 'italic',
            marginBottom: description ? '10px' : 0,
          }}
        >
          {equation}
        </div>
        {description && (
          <div
            style={{
              fontFamily: TYPOGRAPHY.fontFamily.body,
              fontSize: TYPOGRAPHY.fontSize.caption,
              color: COLORS.mediumGray,
            }}
          >
            {description}
          </div>
        )}
      </div>
    </FadeIn>
  );
};
