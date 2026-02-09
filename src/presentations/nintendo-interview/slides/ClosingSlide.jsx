import SlideLayout from '../../../components/presentation/SlideLayout'
import { motion } from 'framer-motion'

export default function ClosingSlide() {
  return (
    <SlideLayout className="text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-display font-bold text-nintendo mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ありがとうございました
      </motion.h2>
      <motion.div
        className="flex flex-col gap-14 max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Contact */}
        <div className="text-left">
          <h3 className="text-lg font-display font-semibold text-nintendo mb-5 pb-3 border-b border-nintendo/30">
            連絡先
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.15em] text-muted font-body">
                電話
              </span>
              <a
                href="tel:+15878948833"
                className="text-cream font-body font-light hover:text-nintendo transition-colors duration-200"
              >
                +1 (587) 894-8833
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.15em] text-muted font-body">
                メール
              </span>
              <a
                href="mailto:atsuhiro.shirakaki@gmail.com"
                className="text-cream font-body font-light hover:text-nintendo transition-colors duration-200"
              >
                atsuhiro.shirakaki@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="text-left">
          <h3 className="text-lg font-display font-semibold text-nintendo mb-5 pb-3 border-b border-nintendo/30">
            SNS
          </h3>
          <div className="flex flex-col gap-3">
            {[
              { label: 'GitHub', href: 'https://github.com/Enodora' },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/atsuhiro-shirakaki/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@Enodora_GameDev',
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 font-body font-light hover:text-nintendo hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2.5 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-nintendo/50" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}
