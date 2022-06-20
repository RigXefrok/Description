import './App.css'
import Section from './components/section/Section.js'
import AboutMe from './components/aboutMe/AboutMe.js'
import Projects from './components/projects/Projects.js'
import Knowledge from './components/knowledge/Knowledge.js'
import Contact from './components/contact/Contact.js'
import SideMenu from './components/menu/SideMenu'
import Home from './components/home/Home'

function App () {
  return (
    <div className='App'>
      <SideMenu />
      <div className='sections'>
        <Section id='home-section' title='¡Hola!, soy un desarrollador web'>
          <Home />
        </Section>
        <Section id='about-section' title='sobre mí'>
          <AboutMe />
        </Section>
        <Section id='project-section' title='proyectos'>
          <Projects />
        </Section>
        <Section id='knowledge-section' title='conocimientos'>
          <Knowledge />
        </Section>
        <Section id='contact-section' title='contacto'>
          <Contact />
        </Section>
      </div>
    </div>
  )
}

export default App
