import { useParams, Navigate } from 'react-router-dom'
import DemoTemplate from '../templates/DemoTemplate'
import peluqueria   from '../data/peluqueria'
import carniceria   from '../data/carniceria'
import taller       from '../data/taller'
import gastronomia  from '../data/gastronomia'
import veterinaria  from '../data/veterinaria'
import oficios      from '../data/oficios'

const DATA_MAP = { peluqueria, carniceria, taller, gastronomia, veterinaria, oficios }

export default function DemoPage() {
  const { slug } = useParams()
  const data = DATA_MAP[slug]

  if (!data) return <Navigate to="/" replace />

  return <DemoTemplate data={data} />
}
