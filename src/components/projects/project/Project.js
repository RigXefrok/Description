import './Project.css'
import Button from '../../utils/button/Button'
function Project ({ name, type, description, technologies }) {
  return (
    <div className='Project'>
      <h3>
        {name} <span>#{type}</span>
      </h3>
      <p>{description}</p>
      <div className='technologies'>
        {technologies.map(technology => (
          <p key={technology}>{technology}</p>
        ))}
      </div>
      <div className='buttons'>
        <Button value='ver' />
        <Button value='code' />
      </div>
    </div>
  )
}

export default Project
