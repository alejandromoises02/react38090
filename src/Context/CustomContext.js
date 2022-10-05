import React, { createContext, useState } from "react";

export const Context = createContext();

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  const addProduct = (product, qtyProduct) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              product: item.product,
              qtyProduct: item.qtyProduct + qtyProduct,
            };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { product, qtyProduct }]);
    }
    setQty(qty + qtyProduct);
    setTotal(total + ( qtyProduct * product.price ));
  };

  const deleteProduct = (id) => {
    const productCart = cart.find((item)=>item.product.id === id);
    console.log(id);
    console.log(productCart);
    setCart(
      cart.filter((item) => {
        return item.product.id !== id;
      })
    );
    setQty(qty - productCart.qtyProduct);
    setTotal(total - ( productCart.qtyProduct * productCart.product.price))
  };

  const isInCart = (id) => cart.some((item) => item.product.id === id);

  const resetCart = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  };

  return (
    <Context.Provider
      value={{
        cart,
        qty,
        total,
        addProduct,
        deleteProduct,
        resetCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomProvider;
