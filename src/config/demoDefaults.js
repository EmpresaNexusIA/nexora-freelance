// Valores compartidos por todos los demos.
// Editá acá para cambiar algo en los 6 rubros a la vez.
// TODO(OG): Open Graph deferred — crawlers no ejecutan JS; requiere SSR o prerendering.

export const DEMO_WA_NUMBER = '5493410000000'
export const DEMO_WA_BASE   = `https://wa.me/${DEMO_WA_NUMBER}`

// Embed genérico centrado en Rosario — se puede overridear por rubro en ubicacion.mapsEmbed
export const ROSARIO_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105547.0!2d-60.6393!3d-32.9468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b652dbe0e4a8b7%3A0xb6e9f0f62cadb73!2sRosario%2C+Santa+Fe!5e0!3m2!1ses-419!2sar!4v1718638400000!5m2!1ses-419!2sar'

export const DEFAULT_FEATURES = {
  gallery:      true,
  testimonials: false, // desactivado por defecto — activar solo con reseñas reales o claramente etiquetadas
  map:          true,
  horarios:     true,
}

export function buildWAUrl(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
