import './Project.css'
import Button from '../../utils/button/Button'
function Project ({ name, type, description, technologies, gitUrl, pageUrl }) {
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
        {pageUrl ? <Button value='ver' /> : null}
        {gitUrl ? <Button value='code' /> : null}
      </div>
    </div>
  )
}

export default Project
