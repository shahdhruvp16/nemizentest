'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'w-10 h-10' }: LogoProps) {
  // SVG animation variants
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="currentColor"
        className="text-primary"
        variants={circleVariants}
      />

      {/* N Letter */}
      <motion.path
        d="M30 30 L30 70 L45 70 L45 50 L55 70 L70 70 L70 30 L55 30 L55 50 L45 30 Z"
        fill="white"
        variants={pathVariants}
      />

      {/* Zen Symbol */}
      <motion.circle
        cx="50"
        cy="50"
        r="10"
        fill="none"
        stroke="white"
        strokeWidth="2"
        variants={pathVariants}
      />

      {/* Tech Dots */}
      <motion.circle
        cx="25"
        cy="25"
        r="3"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
      <motion.circle
        cx="75"
        cy="25"
        r="3"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      />
      <motion.circle
        cx="75"
        cy="75"
        r="3"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
      />
      <motion.circle
        cx="25"
        cy="75"
        r="3"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      />
    </motion.svg>
  );
}