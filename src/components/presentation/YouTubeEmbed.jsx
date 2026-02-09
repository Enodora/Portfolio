import '../../styles/presentation.css'

export default function YouTubeEmbed({ videoId, title = 'YouTube video player' }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8 rounded-xl overflow-hidden shadow-2xl shadow-black/15 border border-dark-border">
      <div className="yt-responsive">
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
