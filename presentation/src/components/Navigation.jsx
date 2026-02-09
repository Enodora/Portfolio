import './Navigation.css';

export default function Navigation({ onPrevious, onNext, currentSlide, totalSlides }) {
  return (
    <div className="navigation">
      <button
        className="nav-button prev"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        aria-label="前のスライド"
      >
        ←
      </button>
      <button
        className="nav-button next"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="次のスライド"
      >
        →
      </button>
    </div>
  );
}
