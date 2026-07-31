import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import About from './pages/About'
import Home from './pages/Home'
import LifeguardDigitalHealth from './pages/projects/LifeguardDigitalHealth'
import ProjectFour from './pages/projects/ProjectFour'
import ProjectThree from './pages/projects/ProjectThree'
import ProjectTwo from './pages/projects/ProjectTwo'
import Projects from './pages/Projects'

export default function App() {
  return (
    <>
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
          <Route path="/projects/project-three" element={<ProjectThree />} />
          <Route path="/projects/project-four" element={<ProjectFour />} />
          <Route path="*" element={<Home />} />
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
