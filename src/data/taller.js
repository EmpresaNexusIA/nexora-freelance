import { DEMO_WA_NUMBER, ROSARIO_MAPS_EMBED, DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'taller',
  businessName: 'Taller Sur',
  tagline: 'Mecánica de confianza desde hace 20 años',
  heroTitle: 'Tu auto en buenas manos',
  heroSubtitle: 'Diagnóstico, service y reparación con repuestos de calidad. Presupuesto sin cargo.',
  heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&auto=format&fit=crop&q=80',

  theme: {
    primaryColor:   '#1B3A5C',
    secondaryColor: '#E85D04',
    bgColor:        '#f4f5f7',
    altBgColor:     '#e8ecf0',
    textPrimary:    '#1a2a3a',
    textMuted:      '#5a6a7a',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(10,20,35,0.65)',
    btnBg:          '#E85D04',
    btnText:        '#ffffff',
    fontTitle:      '"Oswald", "Arial Narrow", sans-serif',
    fontBody:       '"Inter", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
  },

  servicesTitle: 'Nuestros servicios',
  services: [
    { icon: 'Wrench',        name: 'Service completo',    price: 'Desde $35.000', desc: 'Cambio de aceite, filtros y revisión general.' },
    { icon: 'RotateCcw',     name: 'Frenos y neumáticos', price: 'Desde $18.000', desc: 'Pastillas, discos, balanceo y alineación.' },
    { icon: 'Zap',           name: 'Electricidad',        price: 'A consultar',   desc: 'Diagnóstico electrónico con scanner profesional.' },
    { icon: 'Gauge',         name: 'Suspensión',          price: 'A consultar',   desc: 'Amortiguadores, bujes y trenes delanteros/traseros.' },
    { icon: 'Settings2',     name: 'Motor y caja',        price: 'A consultar',   desc: 'Reparación y ajuste de motor, embrague y caja.' },
    { icon: 'AlertTriangle', name: 'Urgencias',           price: 'A consultar',   desc: 'Atención rápida para problemas críticos en el día.' },
  ],

  features: { ...DEFAULT_FEATURES },

  galleryTitle: 'Nuestro taller',
  gallery: [
    { image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&auto=format&fit=crop&q=80', alt: 'Mecánico realizando revisión', title: 'Revisión completa' },
    { image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&auto=format&fit=crop&q=80', alt: 'Auto en elevador', title: 'Equipamiento moderno' },
    { image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&auto=format&fit=crop&q=80', alt: 'Herramientas de mecánica', title: 'Herramientas profesionales' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] Muy buen taller, rápido y honesto con el presupuesto. Lo recomiendo.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Llevé mi auto con un problema que otros no pudieron solucionar y acá lo arreglaron el mismo día.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Horarios y ubicación',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '8:00 — 18:00' },
    { dia: 'Sábados',         horario: '8:00 — 13:00' },
    { dia: 'Domingos',        horario: 'Cerrado' },
  ],

  ubicacion: {
    texto:     'Calle Wheelwright 2345, Rosario',
    barrio:    'Barrio Sur',
    mapsEmbed: ROSARIO_MAPS_EMBED,
  },

  ctaHighlight: 'Presupuesto sin cargo',
  ctaText:      'Consultá por tu auto',
  ctaSubtext:   'Describinos el problema y te respondemos rápido.',

  whatsappNumber:  DEMO_WA_NUMBER,
  whatsappMessage: 'Hola Taller Sur! Quiero consultar por mi auto.',

  footerTagline: 'Taller Sur · Mecánica de confianza · Rosario, Santa Fe',
}
