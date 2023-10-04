import './Landing.css'
import { Link } from 'react-router-dom'
function Landing() {

  return (
    <> <div>

    <h1>Formula 1 Drivers</h1> 
    <p>Click to find out who they are</p>

    {/* Botón para ingresar a la página principal */}
    <Link to="/home">
      Go!
    </Link>
  </div>
    </>
  )
}

export default Landing
