import './ProjectMeta.css';

export default function ProjectMeta({ tool, team, period, playtime }) {
  return (
    <div className="project-meta">
      <div className="meta-item">
        <span className="meta-label">開発ツール:</span>
        <span className="meta-value">{tool}</span>
      </div>
      <div className="meta-item">
        <span className="meta-label">開発体制:</span>
        <span className="meta-value">{team}</span>
      </div>
      <div className="meta-item">
        <span className="meta-label">開発期間:</span>
        <span className="meta-value">{period}</span>
      </div>
      <div className="meta-item">
        <span className="meta-label">想定プレイ時間:</span>
        <span className="meta-value">{playtime}</span>
      </div>
    </div>
  );
}
