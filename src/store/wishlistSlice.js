import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { addItem, removeItem } = wishlist.actions
export default wishlist.reducer