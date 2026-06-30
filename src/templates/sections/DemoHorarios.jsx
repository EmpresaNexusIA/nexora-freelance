import { MapPin } from 'lucide-react'

export default function DemoHorarios({ data }) {
  const { theme, horarios, ubicacion, features } = data
  const title = data.horariosTitle ?? 'Horarios y ubicación'

  return (
    <section
      id="horarios"
      className="py-16 sm:py-24"
      style={{ backgroundColor: theme.altBgColor, scrollMarginTop: '64px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: theme.fontTitle, color: theme.textPrimary }}
          >
            {title}
          </h2>
          {ubicacion.texto && (
            <p className="text-lg flex items-center justify-center gap-1.5" style={{ color: theme.textMuted }}>
              <MapPin size={16} strokeWidth={1.5} style={{ color: theme.secondaryColor, flexShrink: 0 }} />
              {ubicacion.texto}
              {ubicacion.barrio && <span className="hidden sm:inline"> · {ubicacion.barrio}</span>}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            className="rounded-xl p-6 sm:p-8 shadow-sm"
            style={{ backgroundColor: theme.cardBg }}
          >
            <h3
              className="font-bold text-xl mb-6"
              style={{ fontFamily: theme.fontTitle, color: theme.textPrimary }}
            >
              Horarios de atención
            </h3>
            <div className="space-y-0">
              {horarios.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                  style={{ borderColor: `${theme.textPrimary}10` }}
                >
                  <span className="font-medium" style={{ color: theme.textPrimary }}>
                    {h.dia}
                  </span>
                  <span
                    className="font-semibold"
                    style={{ color: h.horario === 'Cerrado' ? '#ef4444' : theme.secondaryColor }}
                  >
                    {h.horario}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {features.map && ubicacion.mapsEmbed && (
            <div className="rounded-xl overflow-hidden shadow-sm" style={{ minHeight: '320px' }}>
              <iframe
                src={ubicacion.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Ubicación de ${data.businessName}`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
