import { z } from 'zod'

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, 'Ingresá tu nombre (mínimo 2 letras)')
    .max(60, 'Nombre demasiado largo'),
  rubro: z
    .string()
    .min(1, 'Seleccioná tu rubro'),
  whatsapp: z
    .string()
    .min(8, 'Ingresá un número válido (mínimo 8 dígitos)')
    .max(20, 'Número demasiado largo')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Solo números, sin letras'),
})

export const WA_NUMBER = '5493416621389'
export const WA_BASE   = `https://wa.me/${WA_NUMBER}`

export function buildWAUrl(data) {
  const text = `Hola Nexora! Soy ${data.nombre}, tengo ${data.rubro} y quiero saber más sobre el sitio web. Mi WhatsApp es ${data.whatsapp}.`
  return `${WA_BASE}?text=${encodeURIComponent(text)}`
}
