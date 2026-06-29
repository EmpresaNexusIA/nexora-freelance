import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Cuánto tarda en estar listo el sitio?',
    a: 'Entre 5 y 10 días hábiles desde que nos confirmás los datos y el pago. Si necesitás algo más rápido, avisanos y vemos qué podemos hacer.',
  },
  {
    q: '¿Necesito saber de tecnología para manejar mi sitio?',
    a: 'Para nada. Vos nos escribís por WhatsApp lo que querés cambiar y nosotros lo hacemos. No tenés que tocar nada técnico.',
  },
  {
    q: '¿El mantenimiento mensual es obligatorio?',
    a: 'No es obligatorio. Pero sin mantenimiento el sitio puede quedar desactualizado o el hosting puede caerse. Lo recomendamos para que siempre esté andando.',
  },
  {
    q: '¿Qué incluye el mantenimiento mensual?',
    a: 'Cambios de precios, fotos, texto y horarios. Dominio y hosting activos. Atención directa por WhatsApp. Cambios grandes (nueva sección, nueva página) se cotizan aparte.',
  },
  {
    q: '¿El dominio (la dirección del sitio) es mío?',
    a: 'Sí, siempre. El dominio queda a tu nombre, no al nuestro. Si algún día no querés seguir con nosotros, el sitio te lo llevás.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Transferencia bancaria o Mercado Pago, lo que te sea más cómodo. Te mandamos los datos cuando confirmás.',
  },
]

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-800/80 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-medium text-base transition-colors duration-200 ${
          isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
        }`}>
          {q}
        </span>
        <span className={`shrink-0 mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
          isOpen
            ? 'border-blue-500 bg-blue-500/20 text-blue-400'
            : 'border-slate-700 text-slate-500 group-hover:border-slate-500'
        }`}>
          <svg className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="blob-blue w-[400px] h-[400px] right-0 top-1/2 -translate-y-1/2 opacity-[0.07]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Dudas que siempre nos hacen
          </h2>
          <p className="text-slate-400 text-lg">
            Si no encontrás la respuesta, escribinos por WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-900/60 border border-slate-800/80 rounded-2xl px-6 sm:px-8 shadow-card"
        >
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
