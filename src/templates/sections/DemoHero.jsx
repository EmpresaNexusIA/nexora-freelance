import { buildWAUrl } from '../../config/demoDefaults.js'

export default function DemoHero({ data }) {
  const { theme, businessName, heroTitle, heroSubtitle, heroImage, ctaText, whatsappNumber, whatsappMessage } = data
  const waUrl = buildWAUrl(whatsappNumber, whatsappMessage)

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end sm:items-center"
      style={{ scrollMarginTop: '64px' }}
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: theme.heroOverlay }} />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 pt-36 sm:py-0">
        <div className="max-w-2xl">
          <p
            className="font-semibold uppercase tracking-widest text-sm mb-4"
            style={{ color: theme.secondaryColor, fontFamily: theme.fontBody }}
          >
            {businessName}
          </p>
          <h1
            className="font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight"
            style={{ fontFamily: theme.fontTitle }}
          >
            {heroTitle}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mb-8 leading-relaxed">
            {heroSubtitle}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: theme.btnBg, color: theme.btnText, fontFamily: theme.fontBody }}
          >
            {ctaText}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce hidden sm:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
