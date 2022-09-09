import React, {useState, useEffect} from 'react'

const MiComponente = () => {

  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(0);

  useEffect(()=>{
    setNumero(numero + 1);

    const intervalo = setInterval(()=>{
      console.log("ping");
    },1000)

    return (()=>{
      clearInterval(intervalo);
    })

  },[contador]);

  const sumar = () => {
    setContador(contador + 1);
  }

  const restar = () => {
    setContador(contador - 1);
  }

  const reset = () => {
    setContador(0);
  }

  return (
    <>
      <div>MiComponente</div>
      <h1>{contador}</h1>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={reset}>agregar al carrito</button>
      <h1>{numero}</h1>
    </>
  )
}

export default MiComponente