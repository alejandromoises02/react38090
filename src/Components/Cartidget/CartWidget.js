import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Context/CustomContext';

const CartWidget = () => {
  const {cantidad} = useContext(Context)
  return (
    <div>
      {cantidad}
      <ShoppingCartIcon color="success" fontSize="large" />
    </div>
  )
}

export default CartWidget
