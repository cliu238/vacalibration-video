import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS, TYPOGRAPHY, CHAMPS_COUNTRIES } from '../../constants';

interface WorldMapProps {
  delay?: number;
  style?: React.CSSProperties;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  delay = 0,
  style = {},
}) => {
  const frame = useCurrentFrame();

  // Country positions (approximate locations on a simplified map)
  const countryPositions = [
    { name: 'Bangladesh', x: 70, y: 35 },
    { name: 'Ethiopia', x: 55, y: 45 },
    { name: 'Kenya', x: 55, y: 50 },
    { name: 'Mali', x: 45, y: 40 },
    { name: 'Mozambique', x: 56, y: 65 },
    { name: 'Sierra Leone', x: 42, y: 45 },
    { name: 'South Africa', x: 54, y: 72 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ...style }}>
      {/* Title */}
      <div
        style={{
          fontFamily: TYPOGRAPHY.fontFamily.body,
          fontSize: TYPOGRAPHY.fontSize.h3,
          fontWeight: TYPOGRAPHY.fontWeight.bold,
          color: COLORS.text,
          marginBottom: 20,
        }}
      >
        CHAMPS Network: 7 Countries
      </div>

      {/* Simplified world map with country markers */}
      <svg width="800" height="400" viewBox="0 0 100 80" style={{ border: `2px solid ${COLORS.lightGray}`, borderRadius: 12, backgroundColor: COLORS.white }}>
        {/* Background continents (simplified shapes) */}
        <g opacity="0.2">
          {/* Africa */}
          <ellipse cx="50" cy="50" rx="12" ry="18" fill={COLORS.mediumGray} />
          {/* Asia */}
          <ellipse cx="70" cy="35" rx="15" ry="12" fill={COLORS.mediumGray} />
        </g>

        {/* Country markers */}
        {countryPositions.map((country, index) => {
          const markerDelay = delay + 30 + index * 8;
          const scale = interpolate(
            frame,
            [markerDelay, markerDelay + 15],
            [0, 1],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          const opacity = interpolate(
            frame,
            [markerDelay, markerDelay + 15],
            [0, 1],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          return (
            <g key={country.name} opacity={opacity}>
              {/* Marker pin */}
              <circle
                cx={country.x}
                cy={country.y}
                r={2 * scale}
                fill={COLORS.primaryBlue}
                stroke={COLORS.white}
                strokeWidth="0.5"
              />
              <circle
                cx={country.x}
                cy={country.y}
                r={3.5 * scale}
                fill="none"
                stroke={COLORS.primaryBlue}
                strokeWidth="0.5"
                opacity="0.5"
              />

              {/* Country label */}
              <text
                x={country.x}
                y={country.y - 4}
                fontSize="3"
                fill={COLORS.text}
                textAnchor="middle"
                fontFamily={TYPOGRAPHY.fontFamily.body}
                fontWeight={TYPOGRAPHY.fontWeight.medium}
              >
                {country.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Country list */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px 40px',
          marginTop: 30,
        }}
      >
        {CHAMPS_COUNTRIES.map((country, index) => {
          const listDelay = delay + 90 + index * 5;
          const opacity = interpolate(
            frame,
            [listDelay, listDelay + 10],
            [0, 1],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          return (
            <div
              key={country}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                opacity,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: COLORS.primaryBlue,
                }}
              />
              <div
                style={{
                  fontFamily: TYPOGRAPHY.fontFamily.body,
                  fontSize: TYPOGRAPHY.fontSize.caption,
                  color: COLORS.text,
                }}
              >
                {country}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
