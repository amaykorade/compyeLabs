import { motion } from 'framer-motion'

const Section = ({ 
  children, 
  id,
  className = '',
  background = 'dark',
  padding = 'default',
  ...props 
}) => {
  const backgrounds = {
    dark: 'bg-black',
    gray: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
  }
  
  const paddings = {
    none: '',
    sm: 'py-16',
    default: 'py-24 lg:py-32',
    lg: 'py-32 lg:py-40',
    xl: 'py-40 lg:py-48'
  }

  const classes = `${backgrounds[background]} ${paddings[padding]} relative ${className}`

  return (
    <section
      id={id}
      className={classes}
      {...props}
    >
      {children}
    </section>
  )
}

export default Section 