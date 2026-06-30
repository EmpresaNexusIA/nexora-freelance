import { DEMO_WA_NUMBER, ROSARIO_MAPS_EMBED, DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'carniceria',
  businessName: 'Carnicería Don Pedro',
  tagline: 'Carne de primera, precio justo',
  heroTitle: 'Calidad que se nota desde la primera compra',
  heroSubtitle: 'Cortes seleccionados, embutidos artesanales y atención de siempre. Encontranos en el barrio.',
  heroImage: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1600&auto=format&fit=crop&q=80',

  theme: {
    primaryColor:   '#8B1A1A',
    secondaryColor: '#D4A017',
    bgColor:        '#fdfaf5',
    altBgColor:     '#fdf0e0',
    textPrimary:    '#2c1810',
    textMuted:      '#7a5c3a',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(20,5,0,0.55)',
    btnBg:          '#8B1A1A',
    btnText:        '#ffffff',
    fontTitle:      '"Merriweather", Georgia, serif',
    fontBody:       '"Inter", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
  },

  servicesTitle: 'Nuestros productos',
  services: [
    { icon: 'Scale',       name: 'Vacuno',              price: 'Desde $4.500/kg', desc: 'Asado, paleta, colita, cuadril y más cortes frescos.' },
    { icon: 'Layers',      name: 'Cerdo',               price: 'Desde $3.800/kg', desc: 'Bondiola, costillas, solomillo y paleta.' },
    { icon: 'Feather',     name: 'Pollo',               price: 'Desde $2.200/kg', desc: 'Pollo entero, presas y milanesas de pollo.' },
    { icon: 'Package',     name: 'Embutidos',           price: 'Desde $2.800/kg', desc: 'Chorizos, morcillas y longanizas artesanales.' },
    { icon: 'CalendarDays',name: 'Pedidos para eventos', price: 'A consultar',     desc: 'Asados completos, cumpleaños y reuniones.' },
    { icon: 'Tag',         name: 'Fiambres y quesos',   price: 'Desde $3.200/kg', desc: 'Selección de quesos, salames y jamones.' },
  ],

  features: { ...DEFAULT_FEATURES },

  galleryTitle: 'Nuestros productos',
  gallery: [
    { image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&auto=format&fit=crop&q=80', alt: 'Carne vacuna fresca', title: 'Cortes de vacuno' },
    { image: 'https://images.unsplash.com/photo-1544025162-d76538a2a5f5?w=600&auto=format&fit=crop&q=80', alt: 'Variedad de carnes', title: 'Variedad diaria' },
    { image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop&q=80', alt: 'Embutidos y fiambres', title: 'Embutidos artesanales' },
    { image: 'https://images.unsplash.com/photo-1551290464-ad17dc28e55c?w=600&auto=format&fit=crop&q=80', alt: 'Carnicero trabajando', title: 'Atención personalizada' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] La mejor carnicería del barrio, siempre fresco y buen precio.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Pedí para un asado de 20 personas y salió perfecto, los recomiendo.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Horarios y ubicación',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '7:00 — 13:00 / 17:00 — 20:30' },
    { dia: 'Sábados',         horario: '7:00 — 13:00' },
    { dia: 'Domingos',        horario: 'Cerrado' },
  ],

  ubicacion: {
    texto:     'Pasaje Huergo 456, Rosario',
    barrio:    'Barrio Pichincha',
    mapsEmbed: ROSARIO_MAPS_EMBED,
  },

  ctaHighlight: 'Pedidos por WhatsApp con anticipación',
  ctaText:      'Hacé tu pedido',
  ctaSubtext:   'Consultanos disponibilidad y te respondemos en el día.',

  whatsappNumber:  DEMO_WA_NUMBER,
  whatsappMessage: 'Hola Don Pedro! Quiero hacer un pedido.',

  footerTagline: 'Carnicería Don Pedro · Rosario, Santa Fe',
}
