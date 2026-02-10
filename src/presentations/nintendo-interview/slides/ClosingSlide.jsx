import SlideLayout from '../../../components/presentation/SlideLayout'
import { motion } from 'framer-motion'

export default function ClosingSlide() {
  return (
    <SlideLayout className="flex flex-col items-center justify-center text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-display font-bold text-nintendo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ありがとうございました
      </motion.h2>
    </SlideLayout>
  )
}
