import SlideLayout from '../components/SlideLayout';
import ProjectMeta from '../components/ProjectMeta';
import KeySystems from '../components/KeySystems';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './UBCRoidSlide.css';

export default function UBCRoidSlide() {
  const systems = [
    '動的障害物対応A*探索アルゴリズム',
    '決定木AI',
    '自作AABBコリジョン基盤',
    '物理ベースキャラクター挙動',
    'スキル重視の戦闘'
  ];

  return (
    <SlideLayout className="ubcroid-slide">
      <h2 className="slide-title">UBCRoid</h2>
      <div className="slide-content">
        <div className="image-section">
          <img 
            src="/images/UBCRoid Gameplay screenshot.png" 
            alt="UBCRoid Gameplay"
            className="gameplay-image"
          />
        </div>
        <ProjectMeta
          tool="C++"
          team="4人"
          period="4ヵ月"
          playtime="10分"
        />
        <KeySystems systems={systems} />
        <div className="video-section">
          <YouTubeEmbed videoId="GQJeqVL3ANM" />
        </div>
      </div>
    </SlideLayout>
  );
}
