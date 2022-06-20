import React, { useEffect } from 'react'
import { useImperativeHandle } from 'react'
import { useState } from 'react'
import './Language.css'

const Language = React.forwardRef(({ img, name, level, description }, ref) => {
  const [active, setActive] = useState(false)
  const handleActive = () => setActive(!active)

  useEffect(() => {
    if (name === 'Python') setActive(true)
  }, [name])

  useImperativeHandle(ref, () => ({
    activate: () => setActive(true),
    deactivate: () => setActive(false)
  }))
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
})

export default Language
