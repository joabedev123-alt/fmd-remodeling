import { About } from './components/About'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MobileContactBar } from './components/MobileContactBar'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { ProjectGallery } from './components/ProjectGallery'
import { ServiceAreas } from './components/ServiceAreas'
import { Services } from './components/Services'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <ProjectGallery />
        <About />
        <Process />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  )
}
