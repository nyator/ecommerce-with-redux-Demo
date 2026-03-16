import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import nofity from '../utils/Notify';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);

      if (index === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
        // toast.success("item added to cart");
        notify.success("Added to cart", action.payload.name)
      } else {
        state.items[index].quantity++;
        toast.info("item quantity updated");
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      toast.info("Item removed from cart");
    },
    decreaseQty: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index === -1) return;

      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
        toast.info("Item removed from cart");
      } else {
        state.items[index].quantity--;
      }
    },
    clearCart: (state) => {
      state.items = [];
      toast.info("Cart cleared");
    }
  },
})

export const { addItem, removeItem, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;