import SlideLayout from '../components/SlideLayout';
import './IntroSlide.css';

export default function IntroSlide() {
  return (
    <SlideLayout className="intro-slide">
      <h2 className="intro-title">自己紹介</h2>
      <div className="intro-content">
        <div className="intro-section">
          <h3 className="intro-heading">ブリティッシュコロンビア大学 (UBC)</h3>
          <p className="intro-text">
            世界トップ40、カナダ第2位
          </p>
        </div>
        <div className="intro-section">
          <h3 className="intro-heading">ゲーム開発者</h3>
          <p className="intro-text">
            複数の公開タイトル
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
