import './KeySystems.css';

export default function KeySystems({ systems }) {
  return (
    <div className="key-systems">
      <h3 className="systems-title">主要システム</h3>
      <ul className="systems-list">
        {systems.map((system, index) => (
          <li key={index} className="system-item">
            {system}
          </li>
        ))}
      </ul>
    </div>
  );
}
