import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import MiComponente from "./MiComponente";
import Usuarios from "./Usuarios";

const App = () => {

  const dash = "Las mejores ofertas";

  const onAdd = (count) => {
    console.log("Un mensaje");
  }

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
      <MiComponente stock={5} onAdd={onAdd}/>
      <Usuarios />
    </>
  )
}

export default App

