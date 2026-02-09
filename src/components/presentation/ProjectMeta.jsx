export default function ProjectMeta({ tool, team, period, playtime }) {
  const items = [
    { label: '開発ツール', value: tool },
    { label: '開発体制', value: team },
    { label: '開発期間', value: period },
    { label: '想定プレイ時間', value: playtime },
  ]

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-5 my-4 max-w-2xl mx-auto">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-[0.15em] text-muted font-body">
            {item.label}
          </span>
          <span className="text-base text-cream font-body font-light">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}
