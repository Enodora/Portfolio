import SlideLayout from '../components/SlideLayout';
import KeySystems from '../components/KeySystems';
import YouTubeEmbed from '../components/YouTubeEmbed';
import './SaikaiSystemsSlide.css';

export default function SaikaiSystemsSlide() {
  const systems = [
    'ScriptableObject＋グラフノードの分岐型シナリオ制御',
    'Google Sheetsによる多言語管理',
    'Newtonsoft.Jsonセーブ／ロード',
    '物理ベースアイテム操作（レイキャスト＋拘束処理）',
    'ビューイング・フラスタム活用ホラー演出'
  ];

  return (
    <SlideLayout className="saikai-systems-slide">
      <h2 className="slide-title">砕幻 - 主要システム</h2>
      <div className="slide-content">
        <KeySystems systems={systems} />
        <div className="video-section">
          <YouTubeEmbed videoId="s_RIxhlEp0A" />
        </div>
      </div>
    </SlideLayout>
  );
}
