import './Contact.css'

function Contact () {
  const sendMail = event => {
    event.preventDefault()
    console.log('enviado')
  }
  return (
    <div className='Contact'>
      <div className='information'>
        <p>
          <strong>correo</strong>/sebastian.delafuente2000@gmail.com
        </p>

        <p>
          <strong>tel</strong>/+54 9 11 22854549
        </p>
      </div>

      <h2>Contáctame</h2>
      <form onSubmit={sendMail}>
        <div>
          <label htmlFor='nombre'>Nombre</label>
          <br />
          <input type='text' name='nombre' />
        </div>
        <div>
          <label htmlFor='email'>Correo</label>
          <br />
          <input type='text' name='email' />
        </div>
        <div>
          <label htmlFor='email'>Mensaje</label>
          <br />
          <textarea rows='15' />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Contact
