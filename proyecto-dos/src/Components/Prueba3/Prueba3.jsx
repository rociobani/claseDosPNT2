import React from 'react'
import { useState } from 'react'

export default function Prueba3() {
  const [contador, setContador] = useState(0)
  const handleClick = () => {
    setContador(contador + 10)
  }
  return (
    <div>
        <h1>Dame Diez! {contador}</h1>
        <button onClick={handleClick}>Te doy Diez!</button>
    </div>
  )
}
