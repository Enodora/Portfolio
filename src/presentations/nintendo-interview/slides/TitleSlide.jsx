import SlideLayout from '../../../components/presentation/SlideLayout'
import { motion } from 'framer-motion'

export default function TitleSlide() {
  return (
    <SlideLayout className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold text-cream tracking-tight leading-tight">
          白柿 有啓
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-8"
      >
        <div className="w-16 h-[2px] bg-nintendo mx-auto mb-6" />
        <h2 className="text-xl md:text-2xl font-body font-light text-muted tracking-wide">
          任天堂 面接用プレゼンテーション
        </h2>
      </motion.div>
    </SlideLayout>
  )
}
