import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage

import cartReducer from './cartSlice';
import productsReducer from './productSlice';
import wishlistReducer from './wishlistSlice';

const cartPersistConfig = {
    key: 'cart',
    storage,
}

export const store = configureStore({
    reducer: {
        cart: persistReducer(cartPersistConfig, cartReducer),
        products: productsReducer,
        wishlist: wishlistReducer,
    }
})

export const persistor = persistStore(store)
