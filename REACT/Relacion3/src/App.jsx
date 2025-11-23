import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Ej1/Saludo.jsx'
import Perfil from './Ej2/Perfil.jsx'
import ContadorPadre from './Ej4/ContadorPadre.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejercicio 1</h1>
      <Saludo nombre="Ana"></Saludo>
      <Saludo nombre="Beto"></Saludo>
      <h1>Ejercicio 2</h1>
      <Perfil nombre="Miguelito_Gamer999" edad="67" online="true" imagenUrl="https://i.pinimg.com/736x/45/b9/e9/45b9e94b80fc9afc2ffc133730592bb8.jpg"></Perfil>
      <Perfil nombre="RivaldelAdmin777" edad="90" online="false" imagenUrl="https://i.pinimg.com/736x/28/36/04/283604b21c0be8027e6459bead86b9ca.jpg"></Perfil>
      <h1>Ejercicio 4</h1>
      <ContadorPadre></ContadorPadre>
    </>
  )
}

export default App
