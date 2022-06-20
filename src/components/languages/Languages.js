import './Languages.css'
import Skill from './language/Language.js'
import skills from '../../assets/images/skills'
import React, { useRef } from 'react'
import Button from '../utils/button/Button'

function Languages () {
  const skillsRef = useRef(skills.map(React.createRef))

  const expandAll = () => {
    skillsRef.current.forEach(skillRef => {
      skillRef.current.activate()
    })
  }
  const closeAll = () => {
    skillsRef.current.forEach(skillRef => {
      skillRef.current.deactivate()
    })
  }

  return (
    <div className='Languages'>
      <div className='head'>
        <h2>Lenguajes</h2>
        <div>
          <Button value='expandir' action={expandAll}></Button>
          <Button value='contraer' action={closeAll}></Button>
        </div>
      </div>

      <div>
        {skills.map((skill, index) => (
          <Skill key={skill.name} {...skill} ref={skillsRef.current[index]} />
        ))}
      </div>
    </div>
  )
}

export default Languages
