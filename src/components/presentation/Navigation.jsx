export default function Navigation({ onPrevious, onNext, currentSlide, totalSlides, isFullscreen, onToggleFullscreen, visible = true }) {
  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 px-2 py-2 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        className="w-11 h-11 rounded-full flex items-center justify-center text-cream/50 hover:text-nintendo hover:bg-nintendo/10 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-cream/50 text-lg select-none focus:outline-none focus:ring-0"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        ←
      </button>
      <div className="px-3 text-[11px] text-muted font-body tracking-[0.2em] select-none tabular-nums">
        {String(currentSlide + 1).padStart(2, '0')}
        <span className="text-dark-border mx-1.5">/</span>
        {String(totalSlides).padStart(2, '0')}
      </div>
      <button
        className="w-11 h-11 rounded-full flex items-center justify-center text-cream/50 hover:text-nintendo hover:bg-nintendo/10 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-cream/50 text-lg select-none focus:outline-none focus:ring-0"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
      >
        →
      </button>
      <button
        className="w-11 h-11 rounded-full flex items-center justify-center text-cream/50 hover:text-nintendo hover:bg-nintendo/10 transition-all duration-200 text-lg select-none focus:outline-none focus:ring-0"
        onClick={onToggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m7-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m7 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>
    </div>
  )
}
