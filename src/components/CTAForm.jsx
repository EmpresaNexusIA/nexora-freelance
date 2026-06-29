import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { contactSchema, buildWAUrl } from '../lib/schema'

const rubros = [
  'Peluquería / Barbería',
  'Carnicería / Almacén',
  'Taller mecánico',
  'Gastronomía (restó / rotisería)',
  'Veterinaria / Petshop',
  'Electricista / Plomero / Gasista',
  'Otro',
]

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  )
}

const inputClass = `w-full bg-slate-800/60 border border-slate-700/80 focus:border-blue-500/70 focus:bg-slate-800
  text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3 outline-none
  transition-all duration-200 focus:ring-2 focus:ring-blue-500/20`

export default function CTAForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(contactSchema) })

  const onSubmit = (data) => {
    const url = buildWAUrl(data)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="blob-orange w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-0 opacity-[0.07]" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Hablemos
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              ¿Querés un sitio para tu negocio?
            </h2>
            <p className="text-slate-400 text-lg">
              Completá el formulario y te contactamos en menos de 24 horas.
              Sin compromiso.
            </p>
          </div>

          {/* Form */}
          <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-7 sm:p-8 shadow-card">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

              <Field label="Tu nombre" error={errors.nombre}>
                <input
                  {...register('nombre')}
                  type="text"
                  placeholder="Ej: Carlos Pérez"
                  className={inputClass}
                  autoComplete="given-name"
                />
              </Field>

              <Field label="Tu rubro" error={errors.rubro}>
                <select
                  {...register('rubro')}
                  className={`${inputClass} cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-slate-900">Seleccioná tu rubro</option>
                  {rubros.map((r) => (
                    <option key={r} value={r} className="bg-slate-900">{r}</option>
                  ))}
                </select>
              </Field>

              <Field label="Tu número de WhatsApp" error={errors.whatsapp}>
                <input
                  {...register('whatsapp')}
                  type="tel"
                  placeholder="Ej: 341 123 4567"
                  className={inputClass}
                  autoComplete="tel"
                />
              </Field>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-[0.98] text-white font-semibold text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-glow-orange hover:shadow-glow-orange-lg mt-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.03a.75.75 0 0 0 .916.916l5.174-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.952-1.348l-.355-.21-3.673 1.048 1.048-3.673-.21-.355A9.73 9.73 0 0 1 2.25 12C2.25 6.617 6.617 2.25 12 2.25S21.75 6.617 21.75 12 17.383 21.75 12 21.75z"/>
                </svg>
                Consultá gratis por WhatsApp
              </button>

              <p className="text-center text-slate-500 text-xs mt-2">
                Al enviar, se abre WhatsApp con tu consulta lista para mandar.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
