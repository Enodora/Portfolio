import SlideLayout from '../components/SlideLayout';
import ProjectMeta from '../components/ProjectMeta';
import KeySystems from '../components/KeySystems';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './FruitsBomberSlide.css';

export default function FruitsBomberSlide() {
  const systems = [
    'マグネットスナップ付きドラッグ＆ドロップ',
    '確実な当たり判定',
    '四方向レーンベース軌道スポーン',
    'Google AdMob広告実装'
  ];

  return (
    <SlideLayout className="fruits-bomber-slide">
      <h2 className="slide-title">フルーツボンバー</h2>
      <div className="slide-content">
        <div className="image-section">
          <img 
            src="/images/Fruits Bomber Gameplay Screenshot.png" 
            alt="Fruits Bomber Gameplay"
            className="gameplay-image"
          />
        </div>
        <ProjectMeta
          tool="Unity C#"
          team="個人開発"
          period="6ヵ月"
          playtime="一回数分"
        />
        <KeySystems systems={systems} />
        <div className="video-section">
          <YouTubeEmbed videoId="KHVJSGmGBdU" />
        </div>
      </div>
    </SlideLayout>
  );
}
