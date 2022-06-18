import './Section.css'

const Section = ({ children, id, title }) => {
  return (
    <div className='Section' id={id}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default Section
