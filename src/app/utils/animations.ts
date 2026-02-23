/**
 * Animation variants and easing curves for Framer Motion
 * Ensures consistent, smooth animations throughout the app with premium feel
 */

// Easing curves
export const easing = {
  smooth: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
};

// Container animations (for stagger effects)
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Item animations
export const fadeInUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

export const fadeInDownVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

export const fadeInLeftVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

export const fadeInRightVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

export const scaleInVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
};

// Button/Interactive element hover states
export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easing.easeOut,
    },
  },
};

export const hoverBrightVariants = {
  rest: { opacity: 1 },
  hover: {
    opacity: 0.9,
    transition: {
      duration: 0.2,
      ease: easing.easeOut,
    },
  },
};

// Card animations - for result cards with elevation effect
export const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: easing.easeOut,
    },
  },
};

// Page transition animations
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
  out: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: easing.easeIn,
    },
  },
};

// Pulse/glow animations for CTAs
export const pulseVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Skeleton loading animation
export const skeletonVariants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Micro-interactions
export const clickVariants = {
  tap: { scale: 0.95 },
};

export const textHighlightVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    textShadow: [
      "0 0 0px rgba(124, 58, 237, 0)",
      "0 0 10px rgba(124, 58, 237, 0.5)",
      "0 0 0px rgba(124, 58, 237, 0)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Tab switching animations
export const tabVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easing.easeOut,
    },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.2,
      ease: easing.easeIn,
    },
  },
};

// Success/error message animations
export const toastVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easing.bounce,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};
