import { motion } from 'framer-motion'
import { WA_BASE } from '../lib/schema'

const WA_URL = `${WA_BASE}?text=${encodeURIComponent('Hola Nexora! Quiero saber más sobre el sitio web para mi negocio.')}`

const diferenciales = [
  {
    icon: '💰',
    titulo: 'Precios en pesos, sin sorpresas',
    desc: 'El precio que acordamos es el que pagás. Sin dólares, sin costos ocultos.',
  },
  {
    icon: '🔑',
    titulo: 'El dominio es tuyo',
    desc: 'Nunca quedás atado a nosotros. Tu dominio y tu contenido son de tu propiedad.',
  },
  {
    icon: '💬',
    titulo: 'Atención directa por WhatsApp',
    desc: 'Sin tickets ni formularios. Me escribís y te respondo. Sin vueltas.',
  },
  {
    icon: '🏪',
    titulo: 'Hechos para comercios de barrio',
    desc: 'No somos una agencia de empresas grandes. Nos especializamos en negocios como el tuyo.',
  },
]

export default function PorQueNexora() {
  return (
    <section id="por-que-nexora" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="blob-blue w-[500px] h-[500px] -right-20 top-0 opacity-[0.08]" />
      <div className="blob-orange w-[350px] h-[350px] -left-10 bottom-0 opacity-[0.06]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Izquierda: texto + precio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Por qué Nexora
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-5 leading-tight">
              Un sitio web que realmente<br />
              <span className="text-gradient-blue">te trae clientes</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Hay muchas agencias. Pero pocas que entiendan lo que necesita un comercio de barrio: precio justo, respuesta rápida y un sitio que funcione.
            </p>

            {/* Precio Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-700/60 rounded-2xl p-6 shadow-card mb-8">
              <p className="text-slate-400 text-sm mb-4 uppercase tracking-wide font-medium">Oferta de lanzamiento — Julio 2026</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1 bg-slate-800/60 rounded-xl p-4">
                  <p className="text-slate-400 text-xs mb-1">Tu sitio web</p>
                  <p className="font-heading font-bold text-2xl text-white">$170.000</p>
                  <p className="text-slate-500 text-xs mt-0.5">pago único</p>
                </div>
                <div className="flex-1 bg-slate-800/60 rounded-xl p-4">
                  <p className="text-slate-400 text-xs mb-1">Mantenimiento</p>
                  <p className="font-heading font-bold text-2xl text-white">$35.000</p>
                  <p className="text-slate-500 text-xs mt-0.5">por mes</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-slow" />
                Cupos limitados — entrá antes que se llenen
              </div>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-glow-orange hover:shadow-glow-orange-lg"
            >
              Consultá sin compromiso
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Derecha: diferenciales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciales.map((d, i) => (
              <motion.div
                key={d.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-card hover:border-slate-700/80 transition-colors"
              >
                <span className="text-2xl block mb-3">{d.icon}</span>
                <h3 className="font-heading font-semibold text-white text-base mb-1.5 leading-tight">{d.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
