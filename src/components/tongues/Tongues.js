import Tongue from './tongue/Tongue'
import './Tongues.css'
// import Skill from './language/Language.js'
// import skills from '../../assets/images/skills'

function Tongues () {
  return (
    <div className='Tongues'>
      <h2>Idiomas</h2>
      <div>
        <Tongue name='español' level='nativo' />
        <Tongue name='ingles' level='intermedio' />
        <Tongue name='japones' level='básico' />
      </div>
    </div>
  )
}

export default Tongues
