'use client'

import { motion } from 'framer-motion'

const AnimatedWrapper = ({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  className = '',
  ...props 
}) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    slideInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    slideInUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay }
    }
  }

  const animationConfig = animations[animation]

  return (
    <motion.div
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      transition={animationConfig.transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper 