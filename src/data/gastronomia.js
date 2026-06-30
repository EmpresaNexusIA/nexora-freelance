import { DEMO_WA_NUMBER, ROSARIO_MAPS_EMBED, DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'gastronomia',
  businessName: 'La Parrilla de Raúl',
  tagline: 'El sabor que te hace volver',
  heroTitle: 'Más que una parrilla, una experiencia',
  heroSubtitle: 'Carnes a las brasas, pastas caseras y atención de siempre. Reservas y pedidos por WhatsApp.',
  heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop&q=80',

  theme: {
    primaryColor:   '#C0392B',
    secondaryColor: '#F39C12',
    bgColor:        '#fefaf6',
    altBgColor:     '#fdf0e0',
    textPrimary:    '#2c1810',
    textMuted:      '#7a5c3a',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(20,10,5,0.52)',
    btnBg:          '#C0392B',
    btnText:        '#ffffff',
    fontTitle:      '"Lato", sans-serif',
    fontBody:       '"Lato", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap',
  },

  servicesTitle: 'Nuestro menú',
  services: [
    { icon: 'UtensilsCrossed', name: 'Entradas',             price: 'Desde $2.800', desc: 'Tabla de fiambres, provoleta y empanadas.' },
    { icon: 'Beef',            name: 'Carnes a la parrilla', price: 'Desde $5.500', desc: 'Asado, vacío, entraña y costillas a las brasas.' },
    { icon: 'Wheat',           name: 'Pastas caseras',       price: 'Desde $4.200', desc: 'Tallarines, ñoquis y lasagna hechos en el día.' },
    { icon: 'Flame',           name: 'Pizzas al horno',      price: 'Desde $3.800', desc: 'Masa fina y crocante con ingredientes frescos.' },
    { icon: 'GlassWater',      name: 'Bebidas',              price: 'A consultar',  desc: 'Vinos, cervezas artesanales y gaseosas.' },
    { icon: 'Cookie',          name: 'Postres',              price: 'Desde $1.800', desc: 'Tiramisú, flan con dulce de leche y mousse.' },
  ],

  features: { ...DEFAULT_FEATURES },

  galleryTitle: 'Nuestra cocina',
  gallery: [
    { image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop&q=80', alt: 'Carne a las brasas', title: 'Parrilla a las brasas' },
    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80', alt: 'Mesa del restaurante', title: 'Ambiente acogedor' },
    { image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80', alt: 'Plato de la casa', title: 'Platos de la casa' },
    { image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80', alt: 'Pizza al horno', title: 'Pizza artesanal' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] El asado es increíble, el ambiente familiar y los precios muy accesibles.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Las pastas caseras son las mejores que comí. Ya tenemos mesa reservada cada viernes.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Horarios y reservas',
  horarios: [
    { dia: 'Martes a Viernes', horario: '12:00 — 15:00 / 20:00 — 23:30' },
    { dia: 'Sábados',          horario: '12:00 — 16:00 / 20:00 — 00:00' },
    { dia: 'Domingos',         horario: '12:00 — 16:00' },
    { dia: 'Lunes',            horario: 'Cerrado' },
  ],

  ubicacion: {
    texto:     'Blvd. Oroño 890, Rosario',
    barrio:    'Barrio Echesortu',
    mapsEmbed: ROSARIO_MAPS_EMBED,
  },

  ctaHighlight: 'Reservas y pedidos por WhatsApp',
  ctaText:      'Reservar mesa',
  ctaSubtext:   'Mandanos un mensaje y confirmamos tu reserva al toque.',

  whatsappNumber:  DEMO_WA_NUMBER,
  whatsappMessage: 'Hola! Quiero reservar una mesa en La Parrilla de Raúl.',

  footerTagline: 'La Parrilla de Raúl · Rosario, Santa Fe',
}
