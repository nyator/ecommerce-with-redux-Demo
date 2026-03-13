import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CgShoppingBag } from "react-icons/cg";

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <>
      <Link
        className="navbox px-3 relative"
        to={'/cart'}>
        <CgShoppingBag size={20} />
        <span className="absolute -top-2 right-0 cartNum">{cartItems.length || "0"}</span>
        {/* <Button /> */}
      </Link>
    </>
  )
}