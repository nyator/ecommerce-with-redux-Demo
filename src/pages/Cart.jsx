import { useStore } from '../Hooks/useStore'
import { removeItem, addItem, decreaseQty } from '../store/cartSlice'
import OrderSum from '../components/cart/orderSum'
import { LuArrowLeftFromLine, LuMinus, LuPlus, LuTrash2 } from 'react-icons/lu';

const Cart = () => {
  const { items, dispatch } = useStore("cart");
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="main flex flex-col items-center justify-center gap-4 py-24 text-center">
        <p className="text-5xl">🛒</p>
        <h1 className="title">Your cart is empty</h1>
        <p className="text-gray-500 text-sm">Looks like you haven't added anything yet.</p>
        <a href="/shop" className="underline mt-2"><LuArrowLeftFromLine className='inline-block mr-1' />Browse Shop</a>
      </div>
    );
  }

  return (
    <div>
      <div className="main">
        {/* <h1 className="title">Your Shopping Cart</h1> */}
        <div className="flex flex-col w-full md:flex-row gap-2 justify-start items-end md:items-start relative">

          {/* Items List */}
          <div className='bg-[#f0f1f0] shadow-lg border border-mist-300 flex items-start rounded-3xl p-1.5 w-full h-fit'>
            <div className="flex-1 flex flex-col gap-4 cartCard w-full md:w-4/6">
              {items.map((item, idx) => (
                <div key={item.id} className={`flex items-center gap-5 border-gray-300 ${idx === items.length - 1 ? "" : "border-b  pb-3"}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-xl bg-gray-200 p-2 shrink-0"
                  />

                  <div className="flex-1 min-w-0 items-stretch">
                    <p className="text-sm text-gray-900 line-clamp-2 leading-snug mb-1 max-w-xs">
                      {item.title}
                    </p>
                    <p className=" font-semibold text-">${item.price.toFixed(2)}</p>
                  </div>

                  <div className='flex flex-col items-end  justify-center space-y-2'>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-lg text-red-500  p-2 rounded-full transition shrink-0 cursor-pointer"
                      title="Remove"
                    >
                      <LuTrash2 />
                    </button>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2 shrink-0 bg-[#f1f1f1] rounded-3xl px-2 py-1.5">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="w-5 h-5 rounded-full hover:bg-gray-200 text-gray-700 transition flex items-center justify-center cursor-pointer"
                      ><LuMinus /> </button>
                      <span className="w-5 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(addItem(item))}
                        className="w-5 h-5 rounded-full hover:bg-gray-200 text-gray-700 transition flex items-center justify-center cursor-pointer"
                      ><LuPlus /></button>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
          <a href="/shop" className="underline mt-2 text-center w-full md:hidden"><LuArrowLeftFromLine className='inline-block mr-1' />Browse Shop</a>

          {/* Order Summary */}
          <div className="sticky top-10 max-w-xs md:max-w-7xl md:w-3/6">
            <OrderSum items={items} total={total} />
          </div>
        </div>
      </div>

      {/* <a href="/shop" className="underline mt-2 text-center w-full bg-black text-white hidden md:block"><LuArrowLeftFromLine className='inline-block mr-1' />Browse Shop</a> */}
    </div>
  );
}

export default Cart;