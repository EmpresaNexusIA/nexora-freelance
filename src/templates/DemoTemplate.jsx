import { useEffect } from 'react'
import DemoBanner      from './sections/DemoBanner'
import DemoNavbar      from './sections/DemoNavbar'
import DemoHero        from './sections/DemoHero'
import DemoServicios   from './sections/DemoServicios'
import DemoGaleria     from './sections/DemoGaleria'
import DemoHorarios    from './sections/DemoHorarios'
import DemoTestimonios from './sections/DemoTestimonios'
import DemoCTA         from './sections/DemoCTA'
import DemoFooter      from './sections/DemoFooter'

// TODO(OG): Open Graph deferred — requiere SSR o prerendering para que crawlers
// (WhatsApp, Facebook) lean los meta tags. No funciona en SPA pura con react-helmet.

export default function DemoTemplate({ data }) {
  const { theme, features, businessName } = data

  // Carga la fuente específica del rubro
  useEffect(() => {
    if (!theme.googleFontsUrl) return
    const selector = `link[data-demo-font="${data.slug}"]`
    if (document.head.querySelector(selector)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = theme.googleFontsUrl
    link.dataset.demoFont = data.slug
    document.head.appendChild(link)
    return () => {
      const el = document.head.querySelector(selector)
      if (el) document.head.removeChild(el)
    }
  }, [theme.googleFontsUrl, data.slug])

  // Actualiza el título del tab del navegador
  useEffect(() => {
    const prev = document.title
    document.title = `${businessName} · Demo por Nexora`
    return () => { document.title = prev }
  }, [businessName])

  return (
    <div
      style={{
        backgroundColor: theme.bgColor,
        color:           theme.textPrimary,
        fontFamily:      theme.fontBody,
        scrollBehavior:  'smooth',
      }}
    >
      <DemoNavbar data={data} />
      <DemoHero data={data} />
      <DemoServicios data={data} />
      {features.gallery      && <DemoGaleria      data={data} />}
      {features.horarios     && <DemoHorarios     data={data} />}
      {features.testimonials && <DemoTestimonios  data={data} />}
      <DemoCTA data={data} />
      <DemoFooter data={data} />
      <DemoBanner />
    </div>
  )
}
