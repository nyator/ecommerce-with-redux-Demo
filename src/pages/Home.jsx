import React from 'react'
import FeaturedProduct from '../components/product/FeaturedProduct'

const Home = () => {
    return (
        <div className="main">
            <div >
                <h1 className="title">
                    Home
                </h1>

                <div>
                    <FeaturedProduct />
                </div>
            </div>
        </div>
    )
}

export default Home