import '../../styles/presentation.css'

export default function YouTubeEmbed({ videoId, title = 'YouTube video player', portrait = false }) {
  return (
    <div className={`w-full mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/15 border border-dark-border ${portrait ? 'max-w-[280px]' : 'max-w-3xl mt-8'}`}>
      <div className={portrait ? 'yt-responsive-portrait' : 'yt-responsive'}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
