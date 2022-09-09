import React, {useState, useEffect} from 'react'
import ItemCount from '../../Components/ItemCount'

const initialProducts = [
  {name:"Manzanas", id:0, price:200, stock: 20},
  {name:"Peras", id:1, price:300, stock: 10},
  {name:"Bananas", id:2, price:400, stock: 15},
  {name:"Maracuya", id:3, price:200, stock: 20},
]

const promesa = new Promise((res,rej) =>{
  res(initialProducts)
})

const ItemListContainer = ({ greeting }) => {

const [products, setProducts] = useState([]);

  useEffect(() => {
    promesa
    .then((data)=>{setProducts(data)})
    .catch(()=>{console.log("esta todo mal")})
  }, [])
  
  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }

  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      {products.map((product) => <h2 key={product.id}>{product.name}</h2>)}
    </>
  )
}

export default ItemListContainer
