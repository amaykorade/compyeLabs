import { motion } from 'framer-motion'

const Heading = ({ 
  children, 
  level = 1,
  variant = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-bold leading-tight tracking-tight'
  
  const levels = {
    1: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black',
    2: 'text-4xl md:text-5xl lg:text-6xl font-extrabold',
    3: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    4: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    5: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    6: 'text-lg md:text-xl lg:text-2xl font-medium'
  }
  
  const variants = {
    default: 'text-white',
    gradient: 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent',
    muted: 'text-gray-300'
  }

  const classes = `${baseClasses} ${levels[level]} ${variants[variant]} ${className}`

  const Component = `h${level}`

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Heading 