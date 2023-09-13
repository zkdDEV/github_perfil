import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
// Importando arquivo que estava dentro das chaves
import { PI as numeroPI, GTM_BRASIL } from './exportacao1.js'
// Importando arquivo que estava como padrão
import nomes from './exportacao2.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {numeroPI}
    <br />
    {GTM_BRASIL}
    <br />
    {nomes} */}
    <App />
  </React.StrictMode>,
)
