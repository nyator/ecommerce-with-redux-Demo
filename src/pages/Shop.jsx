import ProductsList from '../components/product/ProductsList'
const Shop = () => {
  return (
    <div className="container">
      <div >
        <h1 className="title">
          Shop
        </h1>
        
        <div>
          <ProductsList />
        </div>
      </div>
    </div>
  )
}

export default Shop