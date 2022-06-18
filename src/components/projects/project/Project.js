import './Project.css'

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
      <button>ver</button>
      <button>code</button>
    </div>
  )
}

export default Project
