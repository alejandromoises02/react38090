import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import MiComponente from "./MiComponente";

const App = () => {

  const dash = "Las mejores ofertas";

  const [show, setShow] = useState(true);

  const alternar = () =>{
    setShow(!show);
  }

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
      {show ? <MiComponente/> : <h1>No hay nada</h1>}
      <button onClick={alternar}>Alternar</button>
    </>
  )
}

export default App
