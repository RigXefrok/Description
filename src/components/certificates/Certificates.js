import './Certificates.css'
import Certificate from './certificate/Certificate.js'
import certificatesData from '../../assets/certificates.json'

function Certificates () {
  return (
    <div className='Certificates'>
      <h2> certificados </h2>
      {certificatesData.map(certificate => (
        <Certificate {...certificate} />
      ))}
    </div>
  )
}

export default Certificates
