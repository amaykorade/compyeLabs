const Card = ({ 
  children, 
  variant = 'default',
  glow = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300'
  
  const variants = {
    default: 'bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50',
    feature: 'bg-gray-900/30 backdrop-blur-sm border border-gray-700/20 hover:border-blue-500/30',
    pricing: 'bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30',
    contact: 'bg-gray-900/30 backdrop-blur-sm border border-gray-700/20'
  }
  
  const glowClasses = glow ? 'hover:shadow-2xl hover:shadow-blue-500/20' : ''

  const classes = `${baseClasses} ${variants[variant]} ${glowClasses} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card 