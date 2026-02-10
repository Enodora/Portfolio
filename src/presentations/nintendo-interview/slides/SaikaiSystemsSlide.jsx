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
        className="w-full max-w-5xl flex gap-6 items-start mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <KeySystems systems={systems} />
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/15 border border-dark-border">
            <img
              src="/presentation-images/Google Excel Sheet Dialogue.png"
              alt="Google Sheets dialogue management"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex-shrink-0 w-[280px]">
          <YouTubeEmbed videoId="QUPzc3jfpZo" portrait title="砕幻 gameplay" />
        </div>
      </motion.div>
    </SlideLayout>
  )
}
