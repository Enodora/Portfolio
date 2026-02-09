import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { presentations } from '../data/presentations'
import '../styles/presentation.css'

function PresentationCard({ presentation, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        to={`/presentation/${presentation.slug}`}
        className="group block bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-nintendo/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(230,0,18,0.1)]"
      >
        <div className="h-56 overflow-hidden relative">
          {presentation.thumbnail ? (
            <img
              src={presentation.thumbnail}
              alt={presentation.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-dark-surface" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-transparent to-transparent" />
        </div>
        <div className="p-8">
          <div className="w-8 h-[2px] bg-nintendo mb-5 transition-all duration-500 group-hover:w-14" />
          <h3 className="text-xl font-display font-semibold text-cream mb-3 group-hover:text-nintendo transition-colors duration-300">
            {presentation.title}
          </h3>
          <p className="text-sm text-muted font-body font-light leading-relaxed mb-6">
            {presentation.description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm text-nintendo/80 font-body tracking-wide group-hover:text-nintendo transition-colors">
            View Presentation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

function PresentationsListPage() {
  return (
    <div className="min-h-screen bg-dark text-cream presentation-grain">
      {/* Back link */}
      <div className="fixed top-6 left-8 z-[60]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted font-body hover:text-cream transition-colors duration-200"
        >
          <span>←</span>
          <span>Portfolio</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-12 h-[2px] bg-nintendo mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight">
            Presentations
          </h1>
          <p className="mt-6 text-lg text-muted font-body font-light max-w-xl">
            プレゼンテーション資料
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {presentations.map((presentation, index) => (
            <PresentationCard key={presentation.slug} presentation={presentation} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PresentationsListPage
