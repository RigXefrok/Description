import './App.css'
import Section from './components/section/Section.js'
import Aboutme from './components/aboutme/Aboutme.js'
import Projects from './components/projects/Projects.js'
import Skills from './components/skills/Skills.js'
import Contact from './components/contact/Contact.js'

function App () {
  return (
    <div className='App'>
      <Section title='sobre mi'>
        <Aboutme />
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
