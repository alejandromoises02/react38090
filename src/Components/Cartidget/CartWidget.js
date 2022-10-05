import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Context/CustomContext';

const CartWidget = () => {
  const { qty } = useContext(Context)
  return (
    <div>
      <ShoppingCartIcon color="success" fontSize="large" />
      {qty > 0 && <p>{qty}</p>}
    </div>
  )
}

export default CartWidget
