import SlideLayout from '../components/SlideLayout';
import ProjectMeta from '../components/ProjectMeta';
import './SaikaiOverviewSlide.css';

export default function SaikaiOverviewSlide() {
  return (
    <SlideLayout className="saikai-overview-slide">
      <h2 className="slide-title">砕幻</h2>
      <div className="slide-content">
        <div className="image-section">
          <img 
            src="/images/Fracutred Reverie Title_Logo.png" 
            alt="砕幻 Title Logo"
            className="title-logo"
          />
        </div>
        <ProjectMeta
          tool="Unity C#"
          team="個人開発"
          period="約1年"
          playtime="約2時間"
        />
        <div className="overview-section">
          <p className="overview-text">
            概要： 分岐型ストーリーを備えた心理ホラー。プレイヤーは6歳の少年 レイ。自室で目覚めるたびに違和感を覚え、母親に薬を飲まされた後は病院で目を覚ます――どちらかで眠ると、次はもう一方で目覚めるというループを繰り返しながら、何が現実なのかを探っていきます。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
