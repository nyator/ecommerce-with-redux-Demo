import { useSelector, useDispatch } from 'react-redux'
import { removeItem, addItem, decreaseQty } from '../store/cartSlice'
import OrderSum from '../components/cart/orderSum'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)


  return (
    <div className="container">
      <div >
        <h1 className="title">
          Your Shopping Cart
        </h1>

        <OrderSum items={cartItems} />


      </div>
    </div>
  )
}

export default Cart