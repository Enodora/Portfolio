import SlideLayout from '../../../components/presentation/SlideLayout'
import { motion } from 'framer-motion'

export default function IntroSlide() {
  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-display font-bold text-nintendo mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        自己紹介
      </motion.h2>
      <div className="flex flex-col gap-14 max-w-lg">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-semibold text-cream mb-3">
            ブリティッシュコロンビア大学 (UBC)
          </h3>
          <p className="text-lg text-muted font-body font-light leading-relaxed">
            世界トップ40、カナダ第2位
          </p>
        </motion.div>
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-semibold text-cream mb-3">
            ゲーム開発者
          </h3>
          <p className="text-lg text-muted font-body font-light leading-relaxed">
            複数の公開タイトル
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
