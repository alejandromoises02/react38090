import React from "react";

export const ItemDetail = ({ producto }) => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt={producto.title} />
      <div style={styles.Infocontainer}>
        <h1>{producto.title}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
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
  Infocontainer:{
    display: "flex",
    flexDirection: "column",
  },
  img:{
    maxWidth: "20%"
  }
};

