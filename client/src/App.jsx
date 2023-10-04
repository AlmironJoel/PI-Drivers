//Views
import Home from './views/home/Home'
import Landing from'./views/landingPage/Landing'
import Error from './views/error/Error'
import CreateDriver from './views/Create/Create'
import Detail from './views/detail/Detail'
import About from './views/about/About'

import Nav from './componentes/nav/Nav'
import {Route ,Routes, useLocation} from 'react-router-dom';
//Styles
import './App.css'

function App() {
  const location = useLocation()
  
  return (
      <div>
        {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route exact path='/' element={<Landing/>}/>    
        <Route path='/home' element={<Home/>}/>
        <Route path='/:error' element={<Error/>}/>
        <Route path='/detail/:id' element= {<Detail/>} />
        <Route path="/create" element={<CreateDriver />}/> 
        <Route path="/About" element={<About/>}/> 
      </Routes>
      </div>
  )
}

export default App
