import { buildWAUrl } from '../../config/demoDefaults.js'

const WA_SVG = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.03a.75.75 0 0 0 .916.916l5.174-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.952-1.348l-.355-.21-3.673 1.048 1.048-3.673-.21-.355A9.73 9.73 0 0 1 2.25 12C2.25 6.617 6.617 2.25 12 2.25S21.75 6.617 21.75 12 17.383 21.75 12 21.75z" />
  </svg>
)

export default function DemoCTA({ data }) {
  const { theme, ctaText, ctaSubtext, ctaHighlight, whatsappNumber, whatsappMessage } = data
  const waUrl = buildWAUrl(whatsappNumber, whatsappMessage)

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28"
      style={{ backgroundColor: theme.primaryColor, scrollMarginTop: '64px' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {ctaHighlight && (
          <p
            className="font-semibold uppercase tracking-widest text-sm mb-4"
            style={{ color: theme.secondaryColor }}
          >
            {ctaHighlight}
          </p>
        )}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: theme.fontTitle }}
        >
          ¿Listo para hablar?
        </h2>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: '#ffffff', color: theme.primaryColor, fontFamily: theme.fontBody }}
        >
          {WA_SVG}
          {ctaText}
        </a>
        {ctaSubtext && (
          <p className="text-white/60 text-base mt-4">{ctaSubtext}</p>
        )}
      </div>
    </section>
  )
}
