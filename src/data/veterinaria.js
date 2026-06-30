import { DEMO_WA_NUMBER, ROSARIO_MAPS_EMBED, DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'veterinaria',
  businessName: 'Veterinaria San Martín',
  tagline: 'Cuidamos a los que más querés',
  heroTitle: 'La salud de tu mascota, nuestra prioridad',
  heroSubtitle: 'Consultas, vacunas, cirugías y grooming. Atención con amor y profesionalismo.',
  heroImage: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1600&auto=format&fit=crop&q=80',

  theme: {
    primaryColor:   '#0E9F9F',
    secondaryColor: '#2D6A4F',
    bgColor:        '#f0fafa',
    altBgColor:     '#e0f5f5',
    textPrimary:    '#1a3a3a',
    textMuted:      '#5a7a7a',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(5,30,30,0.50)',
    btnBg:          '#0E9F9F',
    btnText:        '#ffffff',
    fontTitle:      '"Nunito", "Helvetica Neue", sans-serif',
    fontBody:       '"Nunito", "Helvetica Neue", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap',
  },

  servicesTitle: 'Nuestros servicios',
  services: [
    { icon: 'Stethoscope',   name: 'Consulta veterinaria',    price: 'Desde $8.000',  desc: 'Diagnóstico y seguimiento personalizado para tu mascota.' },
    { icon: 'Syringe',       name: 'Vacunas y desparasitación', price: 'Desde $5.500', desc: 'Plan sanitario completo para perros y gatos.' },
    { icon: 'Scissors',      name: 'Grooming y estética',     price: 'Desde $7.000',  desc: 'Baño, corte y arreglo con productos premium.' },
    { icon: 'Microscope',    name: 'Análisis de laboratorio', price: 'A consultar',   desc: 'Análisis de sangre, orina y cultivos en el día.' },
    { icon: 'Activity',      name: 'Cirugías',                price: 'A consultar',   desc: 'Castración, esterilización y cirugías generales.' },
    { icon: 'AlertTriangle', name: 'Urgencias',               price: 'A consultar',   desc: 'Atención de urgencias con turno preferencial.' },
  ],

  features: { ...DEFAULT_FEATURES },

  galleryTitle: 'Nuestros pacientes',
  gallery: [
    { image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80', alt: 'Perro golden retriever feliz', title: 'Pacientes felices' },
    { image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80', alt: 'Gato atigrado descansando', title: 'También atendemos gatos' },
    { image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&auto=format&fit=crop&q=80', alt: 'Cachorro tierno', title: 'Desde cachorros' },
    { image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=80', alt: 'Perro y gato juntos', title: 'Toda la familia' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] Muy atentos y profesionales. Explican todo claramente y el precio es justo.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Llevé mi gata de urgencia y la atendieron al instante. Los recomiendo con los ojos cerrados.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Horarios y ubicación',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '9:00 — 13:00 / 16:00 — 20:00' },
    { dia: 'Sábados',         horario: '9:00 — 13:00' },
    { dia: 'Domingos',        horario: 'Solo urgencias (con turno)' },
  ],

  ubicacion: {
    texto:     'Av. Pellegrini 567, Rosario',
    barrio:    'Barrio República de la Sexta',
    mapsEmbed: ROSARIO_MAPS_EMBED,
  },

  ctaHighlight: 'Turnos disponibles esta semana',
  ctaText:      'Pedí tu turno',
  ctaSubtext:   'Escribinos el nombre de tu mascota y te asignamos el turno más cercano.',

  whatsappNumber:  DEMO_WA_NUMBER,
  whatsappMessage: 'Hola! Quiero pedir un turno en Veterinaria San Martín.',

  footerTagline: 'Veterinaria San Martín · Rosario, Santa Fe',
}
