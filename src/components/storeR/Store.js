import { configureStore } from '@reduxjs/toolkit';
import proudctsSlices from './slices/proudcts-slices';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        proudct: proudctsSlices,
        cart: cartSlice
    }
});
