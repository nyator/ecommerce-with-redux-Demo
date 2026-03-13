import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productsReducer from './productSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        wishlist: wishlistReducer,
    }
})

