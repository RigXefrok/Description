import './Knowledge.css'

import Languages from '../languages/Languages'
import Tongues from '../tongues/Tongues'
import Certificates from '../certificates/Certificates.js'

function Knowledge () {
  return (
    <div className='knowledge'>
      <Languages />
      <Tongues />
      <Certificates />
    </div>
  )
}

export default Knowledge
