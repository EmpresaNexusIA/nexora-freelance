import { motion } from 'framer-motion'

const pasos = [
  {
    n: '01',
    titulo: 'Nos contás de tu negocio',
    desc: 'Hablamos 10 minutos por WhatsApp. Nada complicado: tu rubro, tus servicios y cómo querés que te vean tus clientes.',
  },
  {
    n: '02',
    titulo: 'Armamos tu sitio',
    desc: 'Con lo que nos contaste, diseñamos y construimos tu sitio web. Sin que tengas que enviar archivos raros ni aprender nada.',
  },
  {
    n: '03',
    titulo: 'Lo revisamos juntos',
    desc: 'Te mostramos el resultado. Si querés cambiar algo, lo cambiamos. Seguimos hasta que estés conforme.',
  },
  {
    n: '04',
    titulo: 'Lo publicamos y listo',
    desc: 'Tu sitio queda online con tu dominio a tu nombre. A partir de ahí, tus clientes te pueden encontrar en Google.',
  },
]

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Línea de fondo decorativa */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-slate-700/40 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Proceso
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Simple, sin tecnicismos y sin que tengas que moverte de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < pasos.length - 1 && (
                <div className="absolute top-7 left-full w-full h-px bg-gradient-to-r from-slate-700/60 to-transparent hidden lg:block z-0" />
              )}

              <div className="relative z-10 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 h-full shadow-card">
                {/* Número */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-5">
                  <span className="font-heading font-bold text-blue-400 text-sm">{p.n}</span>
                </div>

                <h3 className="font-heading font-semibold text-white text-lg mb-2 leading-tight">
                  {p.titulo}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
