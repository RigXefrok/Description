import './SideMenu.css'
import { useState } from 'react'

function SideMenu () {
  let [active, setActive] = useState(true)

  const toggleMenu = () => setActive(!active)

  const isMobile = window.innerWidth < 650
  const goTo = id => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    if (isMobile) toggleMenu()
  }

  return (
    <div className='Menu'>
      {active ? (
        <>
          <nav className='SideMenu'>
            <div className='links'>
              <span>menu</span>
              <ul>
                <li onClick={() => goTo('#home-section')}>
                  <p>inicio</p>
                </li>
                <li onClick={() => goTo('#about-section')}>
                  <p>sobre mi</p>
                </li>
                <li onClick={() => goTo('#project-section')}>
                  <p>proyectos</p>
                </li>
                <li onClick={() => goTo('#knowledge-section')}>
                  <p>conocimientos</p>
                </li>
                <li onClick={() => goTo('#contact-section')}>
                  <p>contacto</p>
                </li>
              </ul>
            </div>
            <div className='close-bar' onClick={toggleMenu}></div>
          </nav>
          <div className='back'></div>
        </>
      ) : (
        <div className='open-bar' onClick={toggleMenu}></div>
      )}
    </div>
  )
}

export default SideMenu
