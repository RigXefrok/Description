import './AboutMe.css'
import images from '../../assets/images/images'

function AboutMe () {
  return (
    <div className='AboutMe'>
      <div className='description'>
        <h2>soy un desarrollador JUNIOR</h2>
        <p>
          Me llamo Sebastián de la Fuente, soy Argentino y me encanta la
          programación.
        </p>
        <p>Busco poner ganar experiencia en trabajos reales.</p>
        <p>
          Me gusta desarrollar tanto en frontend como en backend y mis lenguajes
          favoritos son Python y JavaScript.
        </p>
        <p>&hearts; Fanático de refactorizar y el clean code &hearts;</p>
      </div>
      <div className='links'>
        <div className='circule'>
          <img src={images.yo.img} alt={images.yo.description} />
        </div>
        <div className='socialMedia'>
          <img src={images.linkedIn.img} alt={images.linkedIn.description} />
          <img src={images.codewars.img} alt={images.codewars.description} />
          <img src={images.github.img} alt={images.github.description} />
          <img src={images.gitlab.img} alt={images.gitlab.description} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
