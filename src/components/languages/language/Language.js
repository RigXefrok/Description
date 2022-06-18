import { useState } from 'react'
import './Language.css'

function Language ({ img, name, level, description }) {
  const [active, setActive] = useState(false)
  const handleActive = () => setActive(!active)

  const cardClasses = `card ${level}`
  return (
    <div className='Language' onClick={handleActive}>
      <div className={cardClasses}>
        <img src={img} alt={name} />
        <h5>{name}</h5>
      </div>
      {active ? (
        <div className='information'>
          <p>
            nivel/<strong>{level}</strong>
          </p>
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  )
}
/* <p>{description}</p> */
export default Language
