import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import SmoothScroll from './components/SmoothScroll'
import About from './pages/About'
import Home from './pages/Home'
import ConsciousConnections from './pages/projects/ConsciousConnections'
import LifeguardDigitalHealth from './pages/projects/LifeguardDigitalHealth'
import ProjectFour from './pages/projects/ProjectFour'
import ProjectTwo from './pages/projects/ProjectTwo'
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
          <Route path="/projects/project-two" element={<ProjectTwo />} />
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
