// Sección desactivada por defecto (features.testimonials = false).
// Solo activar con reseñas reales o texto claramente marcado como "de ejemplo".
// No usar nombres realistas para reseñas ficticias.

export default function DemoTestimonios({ data }) {
  const { theme, testimonials = [] } = data
  const title = data.testimonialsTitle ?? 'Lo que dicen nuestros clientes'

  if (!testimonials.length) return null

  return (
    <section
      id="testimonios"
      className="py-16 sm:py-24"
      style={{ backgroundColor: theme.bgColor, scrollMarginTop: '64px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: theme.fontTitle, color: theme.textPrimary }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: theme.cardBg }}
            >
              {/* Estrellas */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: Math.min(t.rating, 5) }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg leading-none">★</span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed mb-4 italic"
                style={{ color: theme.textPrimary }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-semibold" style={{ color: theme.textMuted }}>
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
