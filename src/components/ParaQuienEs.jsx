import { motion } from 'framer-motion'

const rubros = [
  {
    emoji: '✂️',
    nombre: 'Peluquería / Barbería',
    desc: 'Mostrá tus trabajos, publicá precios y que los clientes pidan turno sin llamarte.',
  },
  {
    emoji: '🥩',
    nombre: 'Carnicería / Almacén',
    desc: 'Publicá tu lista de precios y horarios para que te encuentren antes que a la competencia.',
  },
  {
    emoji: '🔧',
    nombre: 'Taller Mecánico',
    desc: 'Aparecé en Google cuando alguien cerca busca un mecánico. Más llamados, más trabajo.',
  },
  {
    emoji: '🍕',
    nombre: 'Gastronomía',
    desc: 'Mostrá tu menú, horarios y recibí pedidos por WhatsApp directo desde el sitio.',
  },
  {
    emoji: '🐾',
    nombre: 'Veterinaria / Petshop',
    desc: 'Turnos online, info de servicios y catálogo de productos sin atender el teléfono.',
  },
  {
    emoji: '⚡',
    nombre: 'Oficios',
    desc: 'Electricista, plomero, gasista — que te llamen a vos cuando alguien busca en el barrio.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ParaQuienEs() {
  return (
    <section id="para-quien" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="blob-blue w-[500px] h-[500px] -left-40 top-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
            ¿Para quién es?
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Para el comercio que quiere<br className="hidden sm:block" />{' '}
            <span className="text-gradient-blue">más clientes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Si tenés un negocio en Rosario y todavía no estás en internet, esto es para vos.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rubros.map((r, i) => (
            <motion.div
              key={r.nombre}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-300" />

              <div className="relative">
                <span className="text-3xl mb-4 block">{r.emoji}</span>
                <h3 className="font-heading font-semibold text-white text-lg mb-2 leading-tight">
                  {r.nombre}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
