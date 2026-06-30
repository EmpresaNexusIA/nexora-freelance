export default function DemoGaleria({ data }) {
  const { theme, gallery } = data
  const title = data.galleryTitle ?? 'Galería'

  const gridCols =
    gallery.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' :
    gallery.length === 4 ? 'grid-cols-2 lg:grid-cols-4' :
                           'grid-cols-2 sm:grid-cols-3'

  return (
    <section
      id="galeria"
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

        <div className={`grid ${gridCols} gap-3 sm:gap-4`}>
          {gallery.map((item, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl aspect-square group">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.title && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-semibold px-4 py-3">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
