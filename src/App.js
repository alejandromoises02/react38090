import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

const App = () => {

  const mensaje = "hola a todos los que visitan esta pagina"

  return (
    <>
      <Navbar />
      <ItemListContainer 
      greeting={mensaje}/>
    </>
  )
}

export default App

