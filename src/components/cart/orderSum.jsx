import React from 'react'

const OrderSum = ({items}) => {
    return (
        <div className='bg-transparent border border-mist-300 flex items-start rounded-3xl p-1.5 w-fit'>
            <div className='cartCard'>
                <h1 className='subtitle'>Order Summary</h1>

                {/* <h2>Cart <span className="cartNum">{items.length}</span> Total: ${total}</h2> */}
                {items.map(item => (
                    <div key={item.id}>
                        <span >{item.title.substring(0, 10)}</span>
                        {<span className='ml-1 px-2 py-1 bg-gray-300 rounded-full'>{item.quantity}</span>}
                        <button className='button' onClick={() => dispatch(decreaseQty(item.id))}>
                            -
                        </button>
                        <button className='button' onClick={() => dispatch(addItem(item))}>
                            +
                        </button>
                        <button className='button' onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderSum