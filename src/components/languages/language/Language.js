import './Language.css'

function Language ({ img, name, description }) {
  return (
    <div className='Language'>
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Language
