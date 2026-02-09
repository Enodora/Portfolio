export default function ProgressBar({ currentSlide, totalSlides, visible = true }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div className={`fixed top-0 left-0 right-0 h-[3px] bg-dark-border z-[60] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className="h-full bg-nintendo progress-glow transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className={`fixed top-3.5 right-6 text-[11px] font-body text-muted tracking-[0.2em] z-[60] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
  )
}
