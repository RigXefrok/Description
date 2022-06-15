import './SideMenu.css'
import { useRef } from 'react'

function SideMenu () {
  let sideMenu = useRef(null)
  let toggleBar = useRef(null)
  let menuContent = useRef(null)

  const toggleMenu = () => {
    const offsetLeft = menuContent.current.clientWidth
    if (
      sideMenu.current.style.left == '0px' ||
      sideMenu.current.style.left == 0
    ) {
      sideMenu.current.style.left = `-${offsetLeft}px`
      toggleBar.current.style.transform = 'rotateY(180deg)'
    } else {
      sideMenu.current.style.left = '0'
      toggleBar.current.style.transform = 'rotateY(0deg)'
    }
  }

  return (
    <nav className='SideMenu' ref={sideMenu}>
      <div className='menu' ref={menuContent}>
        <span>menu</span>
        <ul>
          <li>
            <a href='#sobre mi'>Sobre mi</a>
          </li>
          <li>
            <a href='#proyectos'>Proyectos</a>
          </li>
          <li>
            <a href='#conocimientos'>conocimientos</a>
          </li>
          <li>
            <a href='#contacto'>Contacto</a>
          </li>
        </ul>
      </div>

      <div className='toggle-bar' onClick={toggleMenu} ref={toggleBar}></div>
    </nav>
  )
}

export default SideMenu

// const toggleBar = document.querySelector('.toggle-bar')

// toggleBar.addEventListener('click', () => {

// })
