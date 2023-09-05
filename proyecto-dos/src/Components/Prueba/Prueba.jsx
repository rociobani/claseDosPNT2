import React from 'react'
import { useState } from 'react';

export default function Prueba() {
  const [contador, setContador] = useState(1)
  const handleClick = () => {
    setContador(contador + 2)
  }
  return (
    <div>
        <h1>A contar impares! {contador}</h1>
        <button onClick={handleClick}>Contador impar</button>
    </div>
  )
}
