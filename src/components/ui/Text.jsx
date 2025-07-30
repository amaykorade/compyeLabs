import { motion } from 'framer-motion'

const Text = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'leading-relaxed'
  
  const variants = {
    default: 'text-gray-300',
    muted: 'text-gray-400',
    white: 'text-white',
    accent: 'text-blue-400'
  }
  
  const sizes = {
    xs: 'text-xs leading-5',
    sm: 'text-sm leading-6',
    md: 'text-base leading-7',
    lg: 'text-lg leading-8',
    xl: 'text-xl leading-8',
    '2xl': 'text-2xl leading-9'
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

export default Text 