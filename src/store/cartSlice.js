import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)

      if (index === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      else {
        state.items[index].quantity++
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    decreaseQty: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (state.items[index].quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload)
      } else {
        state.items[index].quantity--
      }
    }
  },
})

export const { addItem, removeItem, decreaseQty } = cartSlice.actions
export default cartSlice.reducer