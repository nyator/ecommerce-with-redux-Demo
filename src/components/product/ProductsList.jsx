import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../store/productSlice"
import { addItem } from "../../store/cartSlice"
import { addItem as waddItem } from "../../store/wishlistSlice"

//UI
import { TiHeartFullOutline } from "react-icons/ti";


const ProductsList = () => {
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <p className="text-center text-gray-500 text-xl py-12">Loading products...</p>
    if (error) return <p className="text-center text-red-500 text-xl py-12">Error: {error}</p>

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map(product => (
                    <div key={product.id} className="group cartCardOutline">
                        {/* <div className="bg-white border border-gray-200 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-1 h-75"> */}
                        <div className="productCard">
                            <button
                                onClick={() => dispatch(waddItem(product))}
                                className="absolute top-3 right-3 z-10 bg-gray-200 hover:bg-gray-300  p-1.5 rounded-full shadow-lg transition-all duration-200 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 text-sm"
                                title="Add to Wishlist"
                            >
                                <TiHeartFullOutline />
                            </button>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-30 h-30 object-contain mt-5"
                            />
                            <div className="p-5 pt-3">
                                <h5 className=" font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                                    {product.title}
                                </h5>
                                <p className="text-sm font-bold text-indigo-600 mb-5">${product.price}</p>
                                <button
                                    className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm"
                                    onClick={() => dispatch(addItem(product))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsList
