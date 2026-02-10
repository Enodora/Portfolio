import SlideLayout from '../../../components/presentation/SlideLayout'
import YouTubeEmbed from '../../../components/presentation/YouTubeEmbed'
import { motion } from 'framer-motion'

export default function MontageSlide() {
  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold text-nintendo mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        作品集
      </motion.h2>
      <motion.div
        className="w-full max-w-5xl flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <YouTubeEmbed videoId="wgjlqEV-OFk" title="作品集 montage" />
      </motion.div>
    </SlideLayout>
  )
}
