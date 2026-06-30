import { ICON_MAP } from '../../config/iconMap.js'

export default function DemoServicios({ data }) {
  const { theme, services } = data
  const title    = data.servicesTitle    ?? 'Nuestros servicios'
  const subtitle = data.servicesSubtitle ?? null

  const gridCols =
    services.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' :
    services.length <= 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                           'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section
      id="servicios"
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
          {subtitle && (
            <p className="text-lg max-w-xl mx-auto" style={{ color: theme.textMuted }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid ${gridCols} gap-6`}>
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <div
                key={i}
                className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{ backgroundColor: theme.cardBg }}
              >
                {Icon && (
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="mb-4"
                    style={{ color: theme.secondaryColor }}
                  />
                )}
                <h3
                  className="font-bold text-xl mb-1"
                  style={{ fontFamily: theme.fontTitle, color: theme.textPrimary }}
                >
                  {service.name}
                </h3>
                <p className="font-semibold text-lg mb-2" style={{ color: theme.secondaryColor }}>
                  {service.price}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
