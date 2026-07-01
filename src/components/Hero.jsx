import { motion } from 'framer-motion'
import { WA_BASE } from '../lib/schema'

const WA_URL = `${WA_BASE}?text=${encodeURIComponent('Hola Nexora! Quiero saber más sobre el sitio web para mi negocio.')}`

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen y movimiento sutil (Ken Burns lento, solo transform, respeta prefers-reduced-motion) */}
      <div
        className="absolute inset-0 animate-hero-pan motion-reduce:animate-none"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
      />

      {/* Overlay para garantizar contraste del texto sobre el fondo */}
      <div className="absolute inset-0 bg-[#0f172a]/55 pointer-events-none" />

      {/* Gradiente superior para navbar */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs font-medium px-3.5 py-1.5 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse-slow" />
          Cupos limitados de lanzamiento — Julio 2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6"
        >
          El sitio web que{' '}
          <span className="text-gradient-blue">tu negocio</span>
          <br className="hidden sm:block" />
          {' '}necesita.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Hacemos sitios web para negocios que quieren crecer. Rápidos, modernos y diseñados para que más personas descubran tu negocio y puedan contactarte fácilmente.{' '}
          <br className="hidden sm:block" />
          Vos te ocupás del negocio, nosotros de lo digital.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#que-hacemos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-slate-800/50"
          >
            Ver qué hacemos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Precio destacado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease }}
          className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-2xl px-6 py-4"
        >
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-500 text-sm">Sitio web</span>
            <span className="font-heading font-bold text-xl text-white">$170.000</span>
            <span className="text-slate-500 text-xs">pago único</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-700" />
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-500 text-sm">Mantenimiento</span>
            <span className="font-heading font-bold text-xl text-white">$35.000</span>
            <span className="text-slate-500 text-xs">/ mes</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-700" />
          <span className="text-orange-400 text-sm font-semibold">⚡ Cupos limitados</span>
        </motion.div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  )
}
