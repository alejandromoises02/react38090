import React, {useState} from 'react'

const MiComponente = ({stock,funcion}) => {

  const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador(contador + 1);
  }

  const restar = () => {
    setContador(contador - 1);
  }

  const reset = () => {
    setContador(0);
    funcion(contador);
  }

  return (
    <>
      <div>MiComponente</div>
      <h1>{contador}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={reset}>agregar al carrito</button>
    </>
  )
}

export default MiComponente