import './App.css'
import Section from './components/section/Section.js'
import AboutMe from './components/aboutMe/AboutMe.js'
import Projects from './components/projects/Projects.js'
import Skills from './components/skills/Skills.js'
import Contact from './components/contact/Contact.js'
import SideMenu from './components/menu/SideMenu'

function App () {
  return (
    <div className='App'>
      <SideMenu />
      <Section title='sobre mi'>
        <AboutMe />
      </Section>
      <Section title='proyectos'>
        <Projects />
      </Section>
      <Section title='conocimientos'>
        <Skills />
      </Section>
      <Section title='contacto'>
        <Contact />
      </Section>
    </div>
  )
}

export default App
