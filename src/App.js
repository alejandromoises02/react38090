import React from "react";
import Header from "./Components/Header/Header"
import { Boton } from "./Components/Boton"
import { Title } from "./Components/Title"

const App = () => {

  const nombreUsuario = "Alejandro";
  const apellidoUsuario = "Fernandez"

  return (
    <>
      <Header nombre={nombreUsuario} id="1" apellido={apellidoUsuario}>
        <Boton />
        <Title />
      </Header>
    </>
  )
}

export default App

