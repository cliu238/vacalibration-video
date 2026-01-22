import React from 'react';
import { COLORS, TYPOGRAPHY } from '../../constants';
import { FadeIn } from './FadeIn';

interface CodeSnippetProps {
  code: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  delay = 0,
  style = {},
}) => {
  return (
    <FadeIn delay={delay} duration={30}>
      <div
        style={{
          backgroundColor: COLORS.darkGray,
          padding: '30px',
          borderRadius: '12px',
          fontFamily: TYPOGRAPHY.fontFamily.code,
          fontSize: TYPOGRAPHY.fontSize.code,
          color: COLORS.white,
          textAlign: 'left',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          ...style,
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          <code>{code}</code>
        </pre>
      </div>
    </FadeIn>
  );
};
