import './AboutMe.css'
import yo from '../../assets/images/yo.jpg'
import linkedIn from '../../assets/images/LinkedIn.svg'
import gitHub from '../../assets/images/github.svg'
import gitLab from '../../assets/images/gitlab.svg'
import codeWars from '../../assets/images/codewars.svg'

function AboutMe () {
  return (
    <div className='AboutMe'>
      <div className='description'>
        <h2>sobre mí</h2>
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
          <img src={yo} alt='Xefrok' />
        </div>
        <div className='socialMedia'>
          <img src={linkedIn} alt='linkedIn' />
          <img src={codeWars} alt='codeWars' />
          <img src={gitHub} alt='github' />
          <img src={gitLab} alt='gitlab' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
