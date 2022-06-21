import './Contact.css'
import emailjs from 'emailjs-com'
import Button from '../utils/button/Button'
import { useRef } from 'react'

function Contact () {
  const form = useRef(null)

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(form.current.email.value)
  }

  const sendMail = event => {
    event.preventDefault()
    if (validateEmail()) {
      emailjs
        .sendForm(
          'description_app_service',
          'description_app_template',
          event.target,
          'jK3QHWmbV-GLtAmq3'
        )
        .then(res => {
          event.target.reset()
        })
        .catch(error => error)
    } else {
      console.log('no enviado')
    }
  }
  return (
    <div className='Contact'>
      <div className='information'>
        <p>
          <strong>correo</strong>/ sebastian.delafuente2000@gmail.com
        </p>

        <p>
          <strong>tel</strong>/ +54 9 11 22854549
        </p>
      </div>

      <h2>Contáctame</h2>
      <form onSubmit={sendMail} ref={form}>
        <div className='name-container'>
          <label htmlFor='name'>Nombre*</label>
          <br />
          <input type='text' name='name' required={true} maxLength={35} />
        </div>
        <div className='email-container'>
          <label htmlFor='email'>Correo*</label>
          <br />
          <input type='email' name='email' required={true} maxLength={35} />
        </div>
        <div className='message-container'>
          <label htmlFor='message'>Mensaje*</label>
          <br />
          <textarea rows='15' name='message' required={true} maxLength={2500} />
        </div>
        <Button value='enviar' />
      </form>
    </div>
  )
}

export default Contact
