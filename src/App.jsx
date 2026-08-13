import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import SmoothScroll from './components/SmoothScroll'
import About from './pages/About'
import Home from './pages/Home'
import ConsciousConnections from './pages/projects/ConsciousConnections'
import LifeguardDigitalHealth from './pages/projects/LifeguardDigitalHealth'
import LifeguardPortal from './pages/projects/LifeguardPortal'
import ProjectFour from './pages/projects/ProjectFour'
import Projects from './pages/Projects'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <PageTransition>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/lifeguard-digital-health"
            element={<LifeguardDigitalHealth />}
          />
          <Route
            path="/projects/lifeguard-portal"
            element={<LifeguardPortal />}
          />
          <Route
            path="/projects/conscious-connections"
            element={<ConsciousConnections />}
          />
          <Route path="/projects/project-four" element={<ProjectFour />} />
          <Route path="*" element={<Home />} />
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
