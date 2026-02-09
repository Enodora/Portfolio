import SlideLayout from '../../../components/presentation/SlideLayout'
import ProjectMeta from '../../../components/presentation/ProjectMeta'
import KeySystems from '../../../components/presentation/KeySystems'
import { motion } from 'framer-motion'

export default function UBCRoidSlide() {
  const systems = [
    '動的障害物対応A*探索アルゴリズム',
    '決定木AI',
    '自作AABBコリジョン基盤',
    '物理ベースキャラクター挙動',
    'スキル重視の戦闘',
  ]

  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold text-nintendo mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        UBCRoid
      </motion.h2>
      <motion.div
        className="w-full max-w-6xl flex flex-row gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/presentation-images/UBCRoid Gameplay screenshot.png"
            alt="UBCRoid Gameplay"
            className="max-w-full max-h-[60vh] h-auto object-contain rounded-xl shadow-2xl shadow-black/20 border border-dark-border"
          />
        </div>
        <div className="flex-1 text-left">
          <ProjectMeta tool="C++" team="4人" period="4ヵ月" playtime="10分" />
          <KeySystems systems={systems} />
        </div>
      </motion.div>
    </SlideLayout>
  )
}
