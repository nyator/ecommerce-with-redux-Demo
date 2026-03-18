import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../store/productSlice"
import { addItem } from "../../store/cartSlice"
import { addItem as waddItem } from "../../store/wishlistSlice"

//UI
import { TiHeartFullOutline } from "react-icons/ti";
import ProductSkeleton from "../ui/ProductSkeleton"
import StarRating from "../ui/StarRating"


const ProductsList = () => {
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <ProductSkeleton />
    if (error) return <p className="text-center text-red-500 text-xl py-12">Error: {error}</p>

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 space-x-6 space-y-6">
                {items.map(product => (
                    <div key={product.id} onClick={""} className="group cartCardOutline relative">
                        <div className="productCard">
                            <button
                                onClick={() => dispatch(waddItem(product))}
                                className="absolute top-3 right-3 z-10 bg-gray-200 p-1.5 rounded-full shadow-lg transition-all duration-200 w-7 h- flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 text-sm"
                                title="Add to Wishlist"
                            >
                                <TiHeartFullOutline />
                            </button>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-17 h-17 md:w-30 md:h-30 object-contain"
                            />
                            <div className="p-5 pt-3 w-full">
                                <p className=" text-[12px] text-gray-900 mb-1 line-clamp-2 leading-tight">
                                    {product.title}
                                </p>
                                <StarRating rate={product.rating.rate} count={product.rating.count} />
                                <p className="text-sm font-bold text-black mb-1">${product.price}</p>
                                <div>

                                    <button
                                        className="btn-primary"
                                        onClick={() => dispatch(addItem(product))}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsList
