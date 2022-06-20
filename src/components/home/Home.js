import './Home.css'
import images from '../../assets/images/images'

function Home () {
  const abrirEnlace = url => {
    window.open(url, '_blank')
  }
  return (
    <div className='Home'>
      <div className='description'>
        <h2>Me llamo Sebastián de la Fuente</h2>
        <p>
          Me gusta desarrollar tanto en frontend como en backend y mis lenguajes
          favoritos son Python y JavaScript.
        </p>
        <p>
          Busco ganar experiencia en el ámbito laboral y enfrentar nuevos
          desafíos.
        </p>
        <p>~ Fanático de refactorizar y el clean code &hearts;</p>
      </div>
      <div className='links'>
        <div className='circule'>
          <img src={images.yo.img} alt={images.yo.description} />
        </div>
        <div className='socialMedia'>
          <div onClick={() => abrirEnlace(images.linkedIn.url)}>
            <img src={images.linkedIn.img} alt={images.linkedIn.description} />
          </div>
          <div onClick={() => abrirEnlace(images.codewars.url)}>
            <img src={images.codewars.img} alt={images.codewars.description} />
          </div>
          <div onClick={() => abrirEnlace(images.github.url)}>
            <img src={images.github.img} alt={images.github.description} />
          </div>
          <div onClick={() => abrirEnlace(images.gitlab.url)}>
            <img src={images.gitlab.img} alt={images.gitlab.description} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
