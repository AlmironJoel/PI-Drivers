import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

  return (
    <>
      <div>
       <Link to ="/home">HOME</Link>
       <Link to ="/create">New Driver</Link>
       <Link to = "/About">About</Link>
       <Link to='/'>Exit</Link>
      </div>
    </>
  )
}

export default Nav
