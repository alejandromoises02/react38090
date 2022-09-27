import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonsContainer}>
        <button style={styles.button} onClick={subtract}>-</button>
        <div>{count}</div>
        <button style={styles.button} onClick={add}>+</button>
      </div>
      <button style={styles.buttonAdd} onClick={() => onAdd(count)}>Agrega al carrito</button>
    </div>
  );
};

export default ItemCount;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'black',
    margin: '10px'
  },
  buttonAdd:{
    width: '30%',
    height: '50px',
    borderRadius: '50%',
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'green',
    margin: '10px',
    fontWeight: "bold"
  }
};
