import SlideLayout from '../../../components/presentation/SlideLayout'
import ProjectMeta from '../../../components/presentation/ProjectMeta'
import KeySystems from '../../../components/presentation/KeySystems'
import { motion } from 'framer-motion'

export default function SaikaiOverviewSlide() {
  const systems = [
    'Newtonsoft.Jsonセーブ／ロード',
    '物理ベースアイテム操作（レイキャスト＋拘束処理）',
    'ビューイング・フラスタム活用ホラー演出',
  ]

  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold text-nintendo mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        砕幻
      </motion.h2>
      <motion.div
        className="w-full max-w-6xl grid grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center">
          <ProjectMeta tool="Unity C#" team="個人開発" period="約1年" playtime="約2時間" />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/presentation-images/Fractured Reverie Horror.png"
            alt="Fractured Reverie Horror"
            className="max-w-full max-h-[35vh] h-auto object-contain rounded-xl shadow-2xl shadow-black/20 border border-dark-border"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/presentation-images/Fractured Reverie Gameplay screenshot.png"
            alt="Fractured Reverie Gameplay"
            className="max-w-full max-h-[35vh] h-auto object-contain rounded-xl shadow-2xl shadow-black/20 border border-dark-border"
          />
        </div>
        <div className="flex items-center justify-center text-center">
          <KeySystems systems={systems} />
        </div>
      </motion.div>
    </SlideLayout>
  )
}
