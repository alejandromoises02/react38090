import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { CircularProgress } from '@mui/material';


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const lista = data.map((product)=>{
          return {...product, stock:Math.floor(Math.random() * 100)}
        })
        setProducts(lista)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1>{greeting}</h1>
      {
        loading
          ? <CircularProgress />
          : <ItemList products={products} />
      }

    </>
  )
}

export default ItemListContainer
