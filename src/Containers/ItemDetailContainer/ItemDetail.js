import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from '../../Context/CustomContext'

export const ItemDetail = ({ product }) => {
  const [isButtonpPressed, setIsButtonpPressed] = useState(false);
  const { addProduct } = useContext(Context);

  const onAdd = (count) => {
    setIsButtonpPressed(true);
    addProduct(product, count);
  };


  return (
    <div style={styles.container}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.Infocontainer}>
        <h1>{product.title}</h1>
        <span>${product.price}</span>
        <p>{product.description}</p>

        {!isButtonpPressed ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Infocontainer: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    maxWidth: "20%",
  },
};
