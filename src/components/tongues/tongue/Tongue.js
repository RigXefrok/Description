import './Tongue.css'

function Tongue ({ name, level }) {
  return (
    <div className='Tongue'>
      <p>
        <strong>{name}</strong>/{level}
      </p>
    </div>
  )
}

export default Tongue
