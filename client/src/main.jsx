import React from 'react'
//rutas
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//app
import App from './App.jsx'
//style
import './index.css'

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  )
