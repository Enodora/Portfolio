import SlideLayout from '../../../components/presentation/SlideLayout'
import KeySystems from '../../../components/presentation/KeySystems'
import YouTubeEmbed from '../../../components/presentation/YouTubeEmbed'
import { motion } from 'framer-motion'

export default function SaikaiSystemsSlide() {
  const systems = [
    'ScriptableObject＋グラフノードの分岐型シナリオ制御',
    'Google Sheetsによる多言語管理',
  ]

  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold text-nintendo mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        砕幻 — 主要システム
      </motion.h2>
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <KeySystems systems={systems} />
        <YouTubeEmbed videoId="s_RIxhlEp0A" />
      </motion.div>
    </SlideLayout>
  )
}
