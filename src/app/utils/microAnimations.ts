/**
 * Micro-animation utilities for enhanced UX
 * Provides reusable animation hooks and transition helpers
 */

// Micro-interaction delays (in ms)
export const ANIMATION_DELAYS = {
  quick: 100,
  normal: 200,
  slow: 300,
} as const;

// Transition durations
export const DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.7,
} as const;

/**
 * Generate staggered animation delays for list items
 * Useful for animating multiple items sequentially
 */
export const getStaggerDelay = (index: number, baseDelay = 50): number => {
  return index * baseDelay;
};

/**
 * Spring-like easing for natural feel
 */
export const springConfig = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};

/**
 * Cubic bezier easing curves for different effects
 */
export const easingCurves = {
  // Smooth, natural easing
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Fast ease out for snappy feel
  snappy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  // Ease in for exit animations
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // Bounce effect
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
} as const;

/**
 * Creates a stagger container for list animations
 */
export const createStaggerContainer = (itemCount: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
});

/**
 * Creates hover lift effect for cards
 */
export const hoverLiftEffect = {
  rest: { y: 0 },
  hover: { y: -8 },
  transition: { type: "spring", damping: 20, stiffness: 100 },
};
