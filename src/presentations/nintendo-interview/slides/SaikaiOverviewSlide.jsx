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
        className="w-full max-w-6xl flex flex-row gap-8 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex-1 relative flex flex-col items-center">
          <img
            src="/presentation-images/Fracutred Reverie Title_Logo.png"
            alt="砕幻 Title Logo"
            className="max-w-full max-h-64 h-auto object-contain drop-shadow-2xl relative z-0 -mb-8"
          />
          <img
            src="/presentation-images/Fractured Reverie Gameplay screenshot.png"
            alt="Fractured Reverie Gameplay"
            className="max-w-full max-h-[40vh] h-auto object-contain rounded-xl shadow-2xl shadow-black/20 border border-dark-border relative z-10"
          />
        </div>
        <div className="flex-1 text-left">
          <ProjectMeta tool="Unity C#" team="個人開発" period="約1年" playtime="約2時間" />
          <KeySystems systems={systems} />
        </div>
      </motion.div>
    </SlideLayout>
  )
}
