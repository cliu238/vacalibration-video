// Color Palette
export const COLORS = {
  // Primary Colors
  primaryBlue: '#3B82F6',
  secondaryGreen: '#10B981',
  accentOrange: '#F59E0B',
  background: '#F9FAFB',
  text: '#1F2937',

  // Accent Colors
  errorRed: '#EF4444',
  mitsGold: '#FBBF24',
  matrixGreen: '#34D399',
  matrixOrange: '#FDBA74',

  // Additional Utility Colors
  white: '#FFFFFF',
  black: '#000000',
  lightGray: '#E5E7EB',
  mediumGray: '#9CA3AF',
  darkGray: '#4B5563',
} as const;

// Scene Timing (in frames at 30 FPS)
export const SCENE_TIMING = {
  scene1: { start: 0, end: 300 },       // Title & Hook (0-10s)
  scene2: { start: 300, end: 1200 },    // The Problem (10-40s)
  scene3: { start: 1200, end: 2400 },   // The Solution (40-80s)
  scene4: { start: 2400, end: 3600 },   // Mathematical Framework (80-120s)
  scene5: { start: 3600, end: 4200 },   // Results & Impact (120-140s)
  scene6: { start: 4200, end: 4500 },   // Call to Action (140-150s)
  scene7: { start: 4500, end: 4650 },   // Credits & Outro (150-155s)
} as const;

// Total duration
export const TOTAL_DURATION = 4650; // 155 seconds at 30 FPS

// Video Configuration
export const VIDEO_CONFIG = {
  width: 1920,
  height: 1080,
  fps: 30,
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    code: 'JetBrains Mono, monospace',
  },
  fontSize: {
    hero: 64,
    h1: 56,
    h2: 48,
    h3: 36,
    body: 28,
    bodySmall: 24,
    caption: 20,
    code: 20,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
} as const;

// Animation Easing
export const EASING = {
  // Spring configs for natural motion
  spring: {
    default: { damping: 20, stiffness: 80, mass: 1 },
    snappy: { damping: 15, stiffness: 120, mass: 0.5 },
    gentle: { damping: 25, stiffness: 60, mass: 1 },
  },
} as const;

// Common Animation Durations (in frames)
export const ANIMATION_DURATION = {
  fast: 15,      // 0.5s
  medium: 30,    // 1s
  slow: 60,      // 2s
  verySlow: 90,  // 3s
} as const;

// Z-Index Layers
export const Z_INDEX = {
  background: 0,
  content: 10,
  overlay: 20,
  foreground: 30,
} as const;

// CHAMPS Countries
export const CHAMPS_COUNTRIES = [
  'Bangladesh',
  'Ethiopia',
  'Kenya',
  'Mali',
  'Mozambique',
  'Sierra Leone',
  'South Africa',
] as const;

// Example Data for Visualizations
export const MOZAMBIQUE_DATA = {
  before: {
    IPRE: 37.8,
    Infections: 26.8,
    Other: 2.5,
  },
  after: {
    IPRE: 32.0,
    Infections: 31.0,
    Other: 6.5,
  },
  totalNeonates: 1192,
} as const;

// Misclassification Matrix Example (3x3)
export const EXAMPLE_MATRIX = [
  [0.70, 0.15, 0.15], // True: Pneumonia
  [0.20, 0.75, 0.05], // True: Sepsis
  [0.10, 0.10, 0.80], // True: Malaria
] as const;

// Cause Labels
export const CAUSE_LABELS = ['Pneumonia', 'Sepsis', 'Malaria'] as const;

// Audio file paths
export const AUDIO_FILES = {
  scene1: 'audio/scene1-title.mp3',
  scene2: 'audio/scene2-problem.mp3',
  scene3: 'audio/scene3-solution.mp3',
  scene4: 'audio/scene4-math.mp3',
  scene5: 'audio/scene5-results.mp3',
  scene6: 'audio/scene6-cta.mp3',
  scene7: 'audio/scene7-outro.mp3',
} as const;

// Audio timing adjustments (delays in frames)
export const AUDIO_DELAYS = {
  scene1: 30,  // Start 1 second after scene begins
  scene2: 0,   // Start immediately
  scene3: 0,   // Start immediately
  scene4: 0,   // Start immediately
  scene5: 0,   // Start immediately
  scene6: 0,   // Start immediately
  scene7: 0,   // Start immediately
} as const;

// Audio volume settings
export const AUDIO_VOLUME = {
  narration: 0.8,      // Main narration volume
  fadeInDuration: 15,  // Fade in duration (frames)
  fadeOutDuration: 15, // Fade out duration (frames)
} as const;
