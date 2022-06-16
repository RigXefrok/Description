import './AboutMe.css'
import images from '../../assets/images/images'

function AboutMe () {
  const abrirEnlace = url => {
    window.location.href = url
  }
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
          <div onClick={() => abrirEnlace(images.linkedIn.url)}>
            <img src={images.linkedIn.img} alt={images.linkedIn.description} />
            <p>ver {images.linkedIn.description}</p>
          </div>
          <div onClick={() => abrirEnlace(images.codewars.url)}>
            <img src={images.codewars.img} alt={images.codewars.description} />
            <p>ver {images.codewars.description}</p>
          </div>
          <div onClick={() => abrirEnlace(images.github.url)}>
            <img src={images.github.img} alt={images.github.description} />
            <p>ver {images.github.description}</p>
          </div>
          <div onClick={() => abrirEnlace(images.gitlab.url)}>
            <img src={images.gitlab.img} alt={images.gitlab.description} />
            <p>ver {images.gitlab.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
