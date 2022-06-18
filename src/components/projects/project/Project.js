import './Project.css'

function Project ({ name, description, technologies }) {
  return (
    <div className='Project'>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        {technologies.map(technology => (
          <spam>{technology} </spam>
        ))}
      </p>
    </div>
  )
}

export default Project
