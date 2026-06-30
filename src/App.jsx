import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage  from './pages/LandingPage'
import DemoPage     from './pages/DemoPage'
import ScrollToTop  from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"            element={<LandingPage />} />
        <Route path="/demo/:slug"  element={<DemoPage />}    />
      </Routes>
    </BrowserRouter>
  )
}
