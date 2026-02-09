export default function KeySystems({ systems }) {
  return (
    <div className="mt-8 mb-4 text-left max-w-2xl mx-auto w-full">
      <h3 className="text-xl font-display font-semibold text-nintendo mb-5 pb-3 border-b border-nintendo/30">
        主要システム
      </h3>
      <ul className="space-y-3">
        {systems.map((system, index) => (
          <li
            key={index}
            className="text-[15px] text-cream-dim font-body font-light leading-relaxed"
          >
            {system}
          </li>
        ))}
      </ul>
    </div>
  )
}
