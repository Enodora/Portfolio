import SlideLayout from '../components/SlideLayout';
import './ClosingSlide.css';

export default function ClosingSlide() {
  return (
    <SlideLayout className="closing-slide">
      <h2 className="closing-title">ありがとうございました</h2>
      <div className="closing-content">
        <div className="contact-section">
          <h3 className="contact-heading">連絡先</h3>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-label">電話:</span>
              <a href="tel:+15878948833" className="contact-link">+1 (587) 894-8833</a>
            </p>
            <p className="contact-item">
              <span className="contact-label">メール:</span>
              <a href="mailto:atsuhiro.shirakaki@gmail.com" className="contact-link">atsuhiro.shirakaki@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="social-section">
          <h3 className="social-heading">SNS</h3>
          <div className="social-links">
            <a href="https://github.com/Enodora" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/atsuhiro-shirakaki/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@Enodora_GameDev" target="_blank" rel="noopener noreferrer" className="social-link">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
