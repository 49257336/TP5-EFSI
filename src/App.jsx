import { useState } from 'react'
import buscador from './Buscador.jsx'
import lista from './Lista.jsx'
import './App.css'

function App() {

  return (
    <>
      <header>
        <nav>
          <buscador />
        </nav>
      </header>
      <body>
          <lista />
      </body>
    </>
  )
}

export default App
