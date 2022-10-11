import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";

export const Cart = () => {
  const { cart, total, deleteProduct, resetCart } = useContext(Context);

  const comprador = {
    nombre: "Juan",
    apellido: "Perez",
    email:"juanperez@gmail.com"
  };

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      date: serverTimestamp(),
      total,
    })
    .then(result=>{
      console.log(result.id);
      cart.forEach(producto => {
        actualizarStock(producto);
      });
      resetCart();
    })
  }

  const actualizarStock = (producto) =>{
    const updateStock = doc(db, "products", producto.id);
    updateDoc(updateStock,{stock:(producto.product.stock - producto.qtyProduct)});
  }

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
          <button onClick={finalizarCompra}>Finalizar Compra</button>
        </>
      )}
    </>
  );
};
