import React from 'react'

const OrderSum = ({ items }) => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const discount = 5
    const delivery = 12
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity + discount + delivery), 0)


    return (
        <div className='bg-[#f2f2f2] border border-mist-300 flex  items-start rounded-3xl shadow-lg p-1.5 w-full'>
            <div className='cartCard flex-col w-full'>
                <h1 className='subtitle mb-2'>Order Summary</h1>

                <div className='space-y-1'>
                    <p className='flex justify-between text-xs items-center'>Subtotal <span className='font-semibold '>$ {subtotal.toFixed(0)}</span></p>
                    <p className='flex justify-between text-xs items-center'>Discount <span className='font-semibold '>$ {discount}</span></p>
                    <p className='flex justify-between text-xs items-center'>Delivery <span className='font-semibold '>$ {delivery}</span></p>
                    <div className='w-full h-0.5 bg-gray-200 rounded-full my-3'></div>
                    <p className='flex justify-between text-sm items-center font-semibold'>Total <span>$ {total.toFixed(0)}</span></p>

                </div>

            </div>
        </div>
    )
}

export default OrderSum