import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { COLORS } from '../constants';
import { BaseModelDiagram } from '../components/diagrams/BaseModelDiagram';
import { AnimatedMatrix } from '../components/charts/AnimatedMatrix';
import { HierarchyPyramid } from '../components/diagrams/HierarchyPyramid';

export const Scene4_Math: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Section 1: Base Model (frames 0-450) */}
      {frame < 450 && (
        <div style={{ width: '100%' }}>
          <BaseModelDiagram delay={0} />
        </div>
      )}

      {/* Section 2: Misclassification Matrix Example (frames 450-900) */}
      {frame >= 450 && frame < 900 && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <AnimatedMatrix delay={450} cellDelay={5} />
        </div>
      )}

      {/* Section 3: Hierarchical Model (frames 900-1200) */}
      {frame >= 900 && (
        <div style={{ width: '100%' }}>
          <HierarchyPyramid delay={900} />
        </div>
      )}
    </AbsoluteFill>
  );
};
