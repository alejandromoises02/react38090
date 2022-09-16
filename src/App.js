import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

const App = () => {

  const dash = "Las mejores ofertas";
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
    </>
  )
}

export default App
