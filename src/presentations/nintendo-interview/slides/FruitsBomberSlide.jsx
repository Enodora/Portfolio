import SlideLayout from '../../../components/presentation/SlideLayout'
import ProjectMeta from '../../../components/presentation/ProjectMeta'
import KeySystems from '../../../components/presentation/KeySystems'
import { motion } from 'framer-motion'

export default function FruitsBomberSlide() {
  const systems = [
    'マグネットスナップ付きドラッグ＆ドロップ',
    '確実な当たり判定',
    '四方向レーンベース軌道スポーン',
    'Google AdMob広告実装',
  ]

  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-display font-bold text-nintendo mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        フルーツボンバー
      </motion.h2>
      <motion.div
        className="w-full max-w-6xl flex flex-row gap-8 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/presentation-images/Fruits Bomber Gameplay Screenshot.png"
            alt="Fruits Bomber Gameplay"
            className="max-w-full max-h-[60vh] h-auto object-contain rounded-xl shadow-2xl shadow-black/20 border border-dark-border"
          />
        </div>
        <div className="flex-1 text-left">
          <ProjectMeta tool="Unity C#" team="個人開発" period="6ヵ月" playtime="一回数分" />
          <KeySystems systems={systems} />
        </div>
      </motion.div>
    </SlideLayout>
  )
}
