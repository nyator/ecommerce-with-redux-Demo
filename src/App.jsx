import Cart from "./components/ui/Cart"
import ProductsList from "./components/product/ProductsList"
import Wishlist from "./components/Wishlist"

function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 min-h-screen bg-gray-50">
      <Wishlist />
      <Cart />
      <ProductsList />
    </div>
  )
}

export default App
