import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { API } from "../../constants/api";

const ItemListContainer = ({ greeting }) => {

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = id ? `${API.CATEGORY}${id}` : API.LIST;
    const getItems = async () => {
      try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, [id]);

  return (
    <>
      <h1 style={styles.dash}>{greeting}</h1>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

const styles = {
  dash: {
    textAlign: 'center'
  }
}

export default ItemListContainer;
