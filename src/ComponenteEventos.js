import { BookTwoTone } from "@mui/icons-material";
import React from "react";

export const ComponenteEventos = () => {

  /*const boton =  document.getElementById("boton")
  boton.addEventListener("click",()=>{})*/

  const handlerClick = (event) => {
   //console.log(event.target);
   event.stopPropagation()
   console.log('click en el boton');
  }

  const handlerChange = (event) => {
    console.log(event.target);
    console.dir(event.target.parentElement)
    console.log(event.target.value);
  }

  const eventoprevenido = (e) =>{
    e.preventDefault();
    console.log('prevenido');
  }

  const tecleoPrevenido = (e) =>{
    e.preventDefault()
    console.log('tecle prevenido');
  }

  const handlerClickDiv = () =>{
    console.log('click en el div');
  }

  return (
    <div onClick={handlerClickDiv}>
      <h1>ComponenteEventos</h1>
      <button id="button" onClick={handlerClick}>Click</button>
      <input onKeyDown={tecleoPrevenido}type="text" onChange={handlerChange}/>
      <a onClick={eventoprevenido} href="http://google.com">ir a google</a>
    </div>
  );
};
