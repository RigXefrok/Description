import './Certificates.css'
import Certificate from './certificate/Certificate.js'
import certificatesData from '../../data/certificates.json'

function Certificates () {
  return (
    <div className='Certificates'>
      <h2> certificados </h2>
      {certificatesData.map(certificate => (
        <Certificate key={certificate.name} {...certificate} />
      ))}
    </div>
  )
}

export default Certificates
