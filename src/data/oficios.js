import { DEMO_WA_NUMBER, ROSARIO_MAPS_EMBED, DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'oficios',
  businessName: 'Instalaciones Rodríguez',
  tagline: 'Electricista · Gasista · Plomero',
  heroTitle: 'El oficio que necesitás, en el día que lo pedís',
  heroSubtitle: 'Más de 15 años de experiencia en Rosario. Matriculado y habilitado. Presupuesto sin cargo.',
  heroImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&auto=format&fit=crop&q=80',

  theme: {
    primaryColor:   '#1A3C5E',
    secondaryColor: '#F5A623',
    bgColor:        '#f5f7fa',
    altBgColor:     '#e8ecf1',
    textPrimary:    '#1a2a3a',
    textMuted:      '#5a6a7a',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(10,20,40,0.65)',
    btnBg:          '#F5A623',
    btnText:        '#1A3C5E',
    fontTitle:      '"Roboto", "Arial", sans-serif',
    fontBody:       '"Roboto", "Arial", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  },

  servicesTitle: 'Lo que hacemos',
  services: [
    { icon: 'Zap',           name: 'Electricidad',      price: 'Desde $15.000', desc: 'Instalaciones, tableros, luces y reparaciones.' },
    { icon: 'Flame',         name: 'Gas',               price: 'Desde $18.000', desc: 'Habilitaciones, instalaciones y reparaciones de gas.' },
    { icon: 'Droplets',      name: 'Plomería',          price: 'Desde $12.000', desc: 'Destapes, caños, canillas y calefones.' },
    { icon: 'Hammer',        name: 'Reformas y obras',  price: 'A consultar',   desc: 'Revoque, pintura, colocación de cerámicos y más.' },
    { icon: 'Lock',          name: 'Cerrajería',        price: 'Desde $8.000',  desc: 'Apertura de puertas, cambio de cilindros y cerraduras.' },
    { icon: 'Clock',         name: 'Urgencias 24hs',    price: 'A consultar',   desc: 'Pérdidas de gas, sin luz o inundación: llamanos.' },
  ],

  features: { ...DEFAULT_FEATURES, gallery: false },

  galleryTitle: 'Trabajos realizados',
  gallery: [
    { image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80', alt: 'Caja de herramientas profesional', title: 'Herramientas profesionales' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80', alt: 'Trabajo de instalación', title: 'Instalaciones' },
    { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80', alt: 'Trabajo de plomería', title: 'Plomería' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] Rápido, prolijo y a buen precio. Arregló mi instalación eléctrica en horas.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Me habilitó el gas el mismo día que llamé. Muy serio y transparente con el precio.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Contacto y cobertura',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '8:00 — 19:00' },
    { dia: 'Sábados',         horario: '8:00 — 13:00' },
    { dia: 'Urgencias',       horario: 'Las 24 horas' },
  ],

  ubicacion: {
    texto:     'Zona norte y oeste de Rosario',
    barrio:    'Radio de cobertura: 15 km desde el centro',
    mapsEmbed: ROSARIO_MAPS_EMBED,
  },

  ctaHighlight: 'Presupuesto gratuito y sin compromiso',
  ctaText:      'Pedir presupuesto',
  ctaSubtext:   'Describinos qué necesitás y te respondemos con el precio.',

  whatsappNumber:  DEMO_WA_NUMBER,
  whatsappMessage: 'Hola! Quiero un presupuesto de Instalaciones Rodríguez.',

  footerTagline: 'Instalaciones Rodríguez · Rosario, Santa Fe',
}
