import { WA_BASE } from '../lib/schema'

const WA_URL = `${WA_BASE}?text=${encodeURIComponent('Hola Nexora! Quiero saber más sobre el sitio web para mi negocio.')}`

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Logo + descripción */}
          <div>
            <div className="mb-3">
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Nexora<span className="text-orange-500">.</span>
              </span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-[0.2em]">Desarrollos</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sitios web para comercios locales en Rosario, Argentina.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-slate-400 font-medium text-sm mb-4">Navegación</p>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#para-quien"     className="hover:text-slate-300 transition-colors">¿Para quién?</a></li>
              <li><a href="#que-hacemos"    className="hover:text-slate-300 transition-colors">Servicios</a></li>
              <li><a href="#como-trabajamos" className="hover:text-slate-300 transition-colors">Cómo funciona</a></li>
              <li><a href="#faq"            className="hover:text-slate-300 transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#contacto"       className="hover:text-slate-300 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-slate-400 font-medium text-sm mb-4">Contacto</p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.03a.75.75 0 0 0 .916.916l5.174-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.952-1.348l-.355-.21-3.673 1.048 1.048-3.673-.21-.355A9.73 9.73 0 0 1 2.25 12C2.25 6.617 6.617 2.25 12 2.25S21.75 6.617 21.75 12 17.383 21.75 12 21.75z"/>
                  </svg>
                  WhatsApp directo
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Rosario, Santa Fe, Argentina
              </li>
            </ul>
          </div>
        </div>

        {/* Línea final */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© 2026 Nexora Desarrollos. Todos los derechos reservados.</p>
          <p>Hecho con 🧡 en Rosario, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
