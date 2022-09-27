import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./Context/CustomContext";

const App = () => {
  const dash = "Las mejores ofertas";

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar name="Alejandro" />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={dash} />} />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting={dash} />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
