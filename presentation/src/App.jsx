import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import TitleSlide from './slides/TitleSlide';
import IntroSlide from './slides/IntroSlide';
import UBCRoidSlide from './slides/UBCRoidSlide';
import FruitsBomberSlide from './slides/FruitsBomberSlide';
import SaikaiOverviewSlide from './slides/SaikaiOverviewSlide';
import SaikaiSystemsSlide from './slides/SaikaiSystemsSlide';
import ClosingSlide from './slides/ClosingSlide';
import './App.css';

const slides = [
  TitleSlide,
  IntroSlide,
  UBCRoidSlide,
  FruitsBomberSlide,
  SaikaiOverviewSlide,
  SaikaiSystemsSlide,
  ClosingSlide,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="app">
      <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>
      <Navigation
        onPrevious={previousSlide}
        onNext={nextSlide}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
}

export default App;
