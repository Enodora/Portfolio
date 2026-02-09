import { motion } from 'framer-motion'

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 0.98,
    y: 12,
  },
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -12,
  },
}

export default function SlideLayout({ children, className = '' }) {
  return (
    <motion.div
      className={`h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-6 pb-14 box-border overflow-hidden ${className}`}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
