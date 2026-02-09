import { motion } from 'framer-motion';
import './SlideLayout.css';

const slideVariants = {
  enter: {
    opacity: 0,
    x: 100,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

export default function SlideLayout({ children, className = '' }) {
  return (
    <motion.div
      className={`slide-layout ${className}`}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
