import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { ItemDetail } from "./ItemDetail";
import { API } from "../../constants/api";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `${API.PRODUCTO}${id}`;
    const getItem = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setProduct({...data, stock: Math.floor(Math.random() * 20)});
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getItem();
  }, [id]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h1>Ocurrio un error</h1>
      ) : (
        <ItemDetail producto={product} />
      )}
    </>
  );

};

export default ItemDetailContainer;
