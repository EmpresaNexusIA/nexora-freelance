import { DEMO_WA_NUMBER, ROSARIO_MAPS_EMBED, DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'peluqueria',
  businessName: 'Barbería Dos Mundos',
  tagline: 'Cortes clásicos, estilo moderno',
  heroTitle: 'Tu mejor versión, a una cuadra',
  heroSubtitle: 'Barbería profesional en el corazón de Rosario. Atendemos sin turno, de lunes a sábado.',
  heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&auto=format&fit=crop&q=80',

  theme: {
    primaryColor:   '#1a1a1a',
    secondaryColor: '#c9a84c',
    bgColor:        '#f9f8f5',
    altBgColor:     '#f0ede6',
    textPrimary:    '#1a1a1a',
    textMuted:      '#666666',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(10,10,10,0.58)',
    btnBg:          '#c9a84c',
    btnText:        '#1a1a1a',
    fontTitle:      '"Playfair Display", Georgia, serif',
    fontBody:       '"Inter", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
  },

  servicesTitle: 'Nuestros servicios',
  services: [
    { icon: 'Scissors', name: 'Corte de cabello',  price: '$4.500', desc: 'Clásico o moderno, a tu gusto.' },
    { icon: 'Wand2',    name: 'Arreglo de barba',   price: '$2.500', desc: 'Perfilado y arreglo con navaja.' },
    { icon: 'Sparkles', name: 'Combo corte + barba', price: '$6.000', desc: 'El servicio completo al mejor precio.' },
    { icon: 'Feather',  name: 'Afeitado clásico',   price: '$3.000', desc: 'Espuma caliente y navaja tradicional.' },
  ],

  features: { ...DEFAULT_FEATURES },

  galleryTitle: 'Galería',
  gallery: [
    { image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&auto=format&fit=crop&q=80', alt: 'Corte de cabello moderno', title: 'Corte moderno' },
    { image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&auto=format&fit=crop&q=80', alt: 'Interior de la barbería', title: 'Nuestro local' },
    { image: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=600&auto=format&fit=crop&q=80', alt: 'Herramientas de barbería', title: 'Herramientas' },
    { image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&auto=format&fit=crop&q=80', alt: 'Barba perfilada', title: 'Arreglo de barba' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] El mejor corte que me hicieron, siempre quedo conforme. Muy recomendable.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Trato excelente y precios accesibles. Ya soy cliente fijo.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Horarios y ubicación',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '9:00 — 20:00' },
    { dia: 'Sábados',         horario: '9:00 — 18:00' },
    { dia: 'Domingos',        horario: 'Cerrado' },
  ],

  ubicacion: {
    texto:     'Av. San Martín 1234, Rosario',
    barrio:    'Barrio Centro',
    mapsEmbed: ROSARIO_MAPS_EMBED,
  },

  ctaHighlight: '¡Turnos disponibles esta semana!',
  ctaText:      'Reservá tu turno',
  ctaSubtext:   'Escribinos y te confirmamos en menos de una hora.',

  whatsappNumber:  DEMO_WA_NUMBER,
  whatsappMessage: 'Hola! Quiero reservar un turno en Barbería Dos Mundos.',

  footerTagline: 'Barbería Dos Mundos · Rosario, Santa Fe',
}
