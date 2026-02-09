import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { getPresentationBySlug } from '../data/presentations'
import ProgressBar from '../components/presentation/ProgressBar'
import Navigation from '../components/presentation/Navigation'
import '../styles/presentation.css'

function PresentationViewer() {
  const { slug } = useParams()
  const [slides, setSlides] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    const presentation = getPresentationBySlug(slug)
    if (presentation) {
      presentation.slides().then((module) => {
        setSlides(module.default)
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [slug])

  const nextSlide = useCallback(() => {
    if (slides && currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide, slides])

  const previousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }, [currentSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err)
      })
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Auto-hide controls on cursor idle
  useEffect(() => {
    let idleTimer = null

    const handleMouseMove = () => {
      setShowControls(true)
      if (idleTimer) {
        clearTimeout(idleTimer)
      }
      idleTimer = setTimeout(() => {
        setShowControls(false)
      }, 2000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Initialize timer on mount
    idleTimer = setTimeout(() => {
      setShowControls(false)
    }, 2000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (idleTimer) {
        clearTimeout(idleTimer)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        previousSlide()
      } else if (e.key === 'f' || e.key === 'F' || e.key === 'F11') {
        e.preventDefault()
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, previousSlide, toggleFullscreen])

  // Touch / swipe support
  useEffect(() => {
    let touchStartX = 0
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
    }
    const handleTouchEnd = (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX
      if (Math.abs(diff) > 60) {
        if (diff > 0) nextSlide()
        else previousSlide()
      }
    }
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, previousSlide])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark presentation-grain">
        <div className="flex flex-col items-center gap-6">
          <div className="w-10 h-10 rounded-full border-2 border-nintendo/30 border-t-nintendo animate-spin" />
          <span className="text-xs text-muted font-body tracking-[0.25em] uppercase">Loading</span>
        </div>
      </div>
    )
  }

  if (!slides) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark presentation-grain">
        <div className="text-center">
          <h2 className="text-3xl font-display text-cream mb-4">見つかりません</h2>
          <p className="text-muted font-body">Presentation not found</p>
        </div>
      </div>
    )
  }

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="h-screen w-full bg-dark text-cream presentation-grain relative overflow-hidden">
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} visible={showControls} />
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>
      <Navigation
        onPrevious={previousSlide}
        onNext={nextSlide}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        visible={showControls}
      />
    </div>
  )
}

export default PresentationViewer
