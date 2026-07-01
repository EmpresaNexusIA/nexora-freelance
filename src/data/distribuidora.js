import { DEFAULT_FEATURES } from '../config/demoDefaults.js'

export default {
  slug: 'distribuidora',
  businessName: 'Fernández Distribuidora',
  tagline: 'Mayorista y minorista de alimentos, bebidas y suministros',
  heroTitle: 'Todo para tu comercio, al mejor precio por mayor',
  heroSubtitle: 'Alimentos, bebidas, limpieza y suministros. Atendemos a kioscos, comercios y público en general — con envíos a domicilio.',
  heroImage: '/demos/distribuidora/deposito-interior.jpg',
  logoImage: '/demos/distribuidora/logo-fernandez.png',

  theme: {
    primaryColor:   '#1a1a1a',
    secondaryColor: '#C9A227',
    bgColor:        '#faf8f3',
    altBgColor:     '#f2ede0',
    textPrimary:    '#1a1a1a',
    textMuted:      '#6b6355',
    cardBg:         '#ffffff',
    heroOverlay:    'rgba(10,10,10,0.65)',
    btnBg:          '#1a1a1a',
    btnText:        '#E8C158',
    fontTitle:      '"Oswald", sans-serif',
    fontBody:       '"Inter", sans-serif',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&display=swap',
  },

  servicesTitle: 'Nuestros rubros',
  services: [
    { icon: 'GlassWater', name: 'Bebidas',                      price: 'Precio por mayor y menor', desc: 'Gaseosas, cervezas, aguas y vinos, por bulto o unidad.' },
    { icon: 'Package',    name: 'Almacén',                      price: 'Precio por mayor y menor', desc: 'Aceites, sal, huevos, conservas y productos secos.' },
    { icon: 'Droplets',   name: 'Limpieza y perfumería',        price: 'Precio por mayor y menor', desc: 'Detergentes, lavandina, higiene personal y del hogar.' },
    { icon: 'Cookie',     name: 'Kiosco y golosinas',           price: 'Precio por mayor y menor', desc: 'Golosinas, snacks y bebidas en lata para kioscos.' },
    { icon: 'Store',      name: 'Venta mayorista para comercios', price: 'A consultar',            desc: 'Precios especiales por cantidad para kioscos, almacenes y comercios.' },
  ],

  features: { ...DEFAULT_FEATURES },

  galleryTitle: 'Conocé el local',
  gallery: [
    { image: '/demos/distribuidora/fachada-precios.jpg',     alt: 'Fachada de Fernández Distribuidora con pizarras de precios', title: 'Nuestra fachada' },
    { image: '/demos/distribuidora/gondola-golosinas.jpg',   alt: 'Góndola de golosinas, fiambres y bebidas', title: 'Surtido en góndola' },
    { image: '/demos/distribuidora/bebidas-variedad.jpg',    alt: 'Variedad de bebidas', title: 'Bebidas' },
    { image: '/demos/distribuidora/limpieza-productos.jpg',  alt: 'Productos de limpieza', title: 'Limpieza' },
    { image: '/demos/distribuidora/aceite-almacen.jpg',      alt: 'Aceite de girasol de almacén', title: 'Almacén' },
    { image: '/demos/distribuidora/higiene-perfumeria.jpg',  alt: 'Crema dental y perfumería', title: 'Perfumería' },
  ],

  testimonials: [
    { text: '[Ejemplo de reseña] Buenos precios por mayor y siempre tienen stock de todo.', name: '[Cliente de ejemplo]', rating: 5 },
    { text: '[Ejemplo de reseña] Pedí para mi kiosco y me lo llevaron el mismo día.', name: '[Cliente de ejemplo]', rating: 5 },
  ],

  horariosTitle: 'Horarios y ubicación',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '8:30 — 17:00' },
    { dia: 'Sábados',         horario: '8:00 — 17:00' },
    { dia: 'Domingos',        horario: '9:00 — 13:00' },
  ],

  ubicacion: {
    texto:     'Cabal 971 bis, Rosario',
    mapsEmbed: 'https://www.google.com/maps?q=Cabal+971+bis+Rosario+Santa+Fe&output=embed',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Cabal+971+bis+Rosario+Santa+Fe',
  },

  ctaHighlight: 'Hacemos envíos a domicilio en Rosario',
  ctaText:      'Hacé tu pedido',
  ctaSubtext:   'Comercios, kioscos y público en general — consultanos precios por mayor.',

  whatsappNumber:  '5493413516827',
  whatsappMessage: 'Hola! Quiero hacer un pedido a Fernández Distribuidora.',

  instagram: 'https://www.instagram.com/fernandez_distribuidora.df',

  footerTagline: 'Fernández Distribuidora · Mayorista y Minorista · Rosario, Santa Fe',
}
