import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", "jewelery"));

    getDocs(productsCollection)
      .then((data) => {
        const lista = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(lista);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
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
    textAlign: "center",
  },
};

export default ItemListContainer;


/*const getProducts = async ()=>{
      try{
        const data = await getDocs(productsCollection);
        const lista = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(lista);
      }
      catch{
        setError(true);
      }
      finally{
        setLoading(false);
      }
      
    }

    getProducts();*/
