import ProductsList from '../components/product/ProductsList'
const Shop = () => {
  return (
    <div className="main">
      <div className='flex flex-col items-center space-y-3' >
        {/* <h1 className="title">
          Shop
        </h1> */}

        <div>
          <ProductsList />
        </div>
      </div>
    </div>
  )
}

export default Shop