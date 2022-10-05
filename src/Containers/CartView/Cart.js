import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, total, deleteProduct, resetCart } = useContext(Context);
  console.log(cart);

  return (
    <>
      {cart.length === 0 ? (
        <h1>
          No agregaste productos, puedes ver <Link to="/">aca</Link>
        </h1>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product.id}>
              <h1>{item.product.title}</h1>
              <h1>Precio Unitario: {item.product.price}</h1>
              <h1>Cantidad: {item.qtyProduct}</h1>
              <button
                onClick={() => {
                  deleteProduct(item.product.id);
                }}
              >
                Eliminar del Carrito
              </button>
            </div>
          ))}
          <h3>Total: {total.toFixed(2)}</h3>
          <button onClick={resetCart}>Vaciar Carrito</button>
        </>
      )}
    </>
  );
};
