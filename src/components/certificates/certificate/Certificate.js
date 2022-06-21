import './Certificate.css'

function Certificate ({
  name,
  type,
  institution,
  credentialID,
  startDate,
  expirationDate,
  duration
}) {
  return (
    <div className='Certificate'>
      <h5>
        {startDate} /{type} - {expirationDate}
      </h5>
      <p>
        <strong>{name}</strong>/ {institution}
      </p>
      {credentialID ? (
        <p className='credential'>Credencial:{credentialID}</p>
      ) : null}
      {duration ? <p className='duration'>{duration}</p> : null}
    </div>
  )
}

export default Certificate
