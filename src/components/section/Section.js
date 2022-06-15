import './Section.css'

const Section = ({ children, title }) => {
  return (
    <div className='Section' id={title}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default Section
