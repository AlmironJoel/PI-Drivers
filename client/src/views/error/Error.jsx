import './Error.css'
import { Link } from 'react-router-dom'
function Error() {

  return (
    <>
      <h1>Esta es la pagina de Error!!</h1>
      <p>Pagina de Error, solo aparecera si colocamos una ruta incorrecta</p>
      <div>
    {/* Botón para ingresar a la página principal */}
    <Link to="/home">
      Regresar
    </Link>
  </div>
    </>
  )
}

export default Error
