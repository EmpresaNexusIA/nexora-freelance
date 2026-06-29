import { motion } from 'framer-motion'
import { WA_BASE } from '../lib/schema'

const WA_URL = `${WA_BASE}?text=${encodeURIComponent('Hola Nexora! Quiero saber más sobre el sitio web para mi negocio.')}`

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots">
      {/* Blobs decorativos */}
      <div className="blob-blue w-[600px] h-[600px] -top-40 -right-40 opacity-[0.12]" />
      <div className="blob-orange w-[400px] h-[400px] bottom-0 -left-20 opacity-[0.08]" />

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
          Hacemos sitios web para comercios en Rosario. Rápidos, modernos y que aparecen en Google.
          <br className="hidden sm:block" />
          Vos te ocupás del negocio, nosotros de lo digital.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-glow-orange hover:shadow-glow-orange-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.03a.75.75 0 0 0 .916.916l5.174-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.952-1.348l-.355-.21-3.673 1.048 1.048-3.673-.21-.355A9.73 9.73 0 0 1 2.25 12C2.25 6.617 6.617 2.25 12 2.25S21.75 6.617 21.75 12 17.383 21.75 12 21.75z"/>
            </svg>
            Quiero mi sitio web
          </a>

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
