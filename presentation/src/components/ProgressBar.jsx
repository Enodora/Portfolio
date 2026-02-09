import './ProgressBar.css';

export default function ProgressBar({ currentSlide, totalSlides }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="slide-counter">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
