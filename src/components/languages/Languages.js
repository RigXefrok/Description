import './Languages.css'
import Skill from './language/Language.js'
import skills from '../../assets/images/skills'

function Languages () {
  return (
    <div className='Languages'>
      <h2>Lenguajes</h2>
      <div>
        {skills.map(skill => (
          <Skill
            key={skill.name}
            name={skill.name}
            img={skill.img}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Languages