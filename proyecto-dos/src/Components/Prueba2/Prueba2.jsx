import React from 'react'
import { useState } from 'react'

export default function Prueba2() {
  const [contador, setContador] = useState(0)
  const handleClick = () => {
    setContador(contador + 2)
  }
  return (
    <div>
        <h1>A contar pares! {contador}</h1>
        <button onClick={handleClick}>Contador par</button>
    </div>
  )
}
