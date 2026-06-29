# Nexora Freelance — Contexto para Claude Code

## Quién
Lucho — estudio freelance de desarrollo web en Rosario, Argentina (Nexora Desarrollos).
Clientes: comercios locales (carnicerías, peluquerías, talleres, polirubros).
Modelo: cobro desarrollo + mantenimiento mensual. Trabaja solo.

## Este proyecto
Nexora Freelance es el negocio principal de desarrollo web para clientes.
**No confundir con:**
- `nexora-bot` → automatización/ventas, corre en VPS. No tocar salvo que se pida.
- `rafflemaster` → sistema de rifas. No tocar salvo que se pida.

## Stack
- Claude Code + subagentes: desarrollador-frontend, revisor-codigo, tester-funcional, auditor-seguridad
- MCP: filesystem, GitHub, Supabase, Airtable, Canva, Google (Drive/Gmail/Calendar), Make
- n8n self-hosted en VPS Hostinger (Ubuntu, IP 2.25.181.223) — puerto 5678 solo desde IP de Lucho
- Proyectos en: `C:\Users\PC\Proyectos-Nexora`

## Estructura objetivo (10 roles)
Director General, Gerente de Proyectos, Ventas, Diseño UI/UX, Programador,
Automatización e IA, Marketing, Control de Calidad, Seguridad, Documentación.
Hoy Lucho cubre varios; los subagentes cubren la parte técnica.

## Estado al 24/06/2026
- Subagentes andando ✅
- n8n asegurado (puerto 5678 restringido a IP de Lucho) ✅
- Herramientas conectadas ✅
- HTTPS para n8n: pendiente (falta dominio)
- GitHub: pendiente subir proyectos
