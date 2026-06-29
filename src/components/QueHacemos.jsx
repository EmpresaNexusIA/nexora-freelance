import { motion } from 'framer-motion'

const servicios = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'blue',
    titulo: 'Diseño web profesional',
    desc: 'Tu sitio listo en pocos días, que se ve bien en el celular y en la computadora. Con tu logo, tus colores y tu información.',
    items: ['Diseño a tu imagen', 'Adaptado al celular', 'Carga rápida'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'orange',
    titulo: 'Mantenimiento mensual',
    desc: 'Actualizamos precios, fotos y texto cuando lo necesitás. Tu sitio siempre al día, sin que tengas que saber de tecnología.',
    items: ['Cambios ilimitados chicos', 'Dominio y hosting incluidos', 'Atención por WhatsApp'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'blue',
    titulo: 'Crecimiento en Google',
    desc: 'Te ayudamos a aparecer cuando alguien busca tu negocio en el barrio. Ficha de Google Maps, SEO básico y todo configurado.',
    items: ['Ficha de Google Maps', 'SEO local activado', 'Más visibilidad = más clientes'],
  },
]

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="blob-orange w-[500px] h-[500px] -right-40 top-0 opacity-[0.07]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Servicios
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Qué hacemos por tu negocio
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Todo lo que necesitás para tener presencia online sin complicaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group bg-slate-900/70 border border-slate-800/80 rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:border-slate-700/80 transition-all duration-300"
            >
              {/* Icono */}
              <div className={`inline-flex p-3 rounded-xl mb-5 ${
                s.color === 'blue'
                  ? 'bg-blue-500/10 text-blue-400'
                  : 'bg-orange-500/10 text-orange-400'
              }`}>
                {s.icon}
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3">{s.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>

              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <svg className={`w-4 h-4 shrink-0 ${s.color === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
