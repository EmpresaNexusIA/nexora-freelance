import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import ParaQuienEs   from './components/ParaQuienEs'
import QueHacemos    from './components/QueHacemos'
import ComoTrabajamos from './components/ComoTrabajamos'
import PorQueNexora  from './components/PorQueNexora'
import FAQ           from './components/FAQ'
import CTAForm       from './components/CTAForm'
import Footer        from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ParaQuienEs />
        <QueHacemos />
        <ComoTrabajamos />
        <PorQueNexora />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
