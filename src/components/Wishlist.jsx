import { useSelector, useDispatch } from "react-redux"
import { removeItem } from "../store/wishlistSlice"
import { addItem } from "../store/cartSlice"

function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist.items)
    const dispatch = useDispatch()
    return (
        <div className="rounded-lg border border-mist-300 p-3">
            <h2>wishlist ({wishlist.length} items)</h2>
            {wishlist.map(item => (
                <div key={item.id} className="rounded-lg border border-b-mist-300 p-3">
                    <span>{item.title}</span>
                    <div>
                        <button className="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                        <button
                            className="button"
                            onClick={() => { dispatch(addItem(item)); dispatch(removeItem(item.id)) }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Wishlist