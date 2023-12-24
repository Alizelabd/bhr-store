import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProudct = state.find((e) => e.id === action.payload.id);
            if (findProudct) {
                findProudct.quantity += 1;
            } else {
                const proudctClone = { ...action.payload, quantity: 1 }
                state.push(proudctClone);
            }
        },
        removeFromCart: (state, action) => {
            const findProudct = state.find((e) => e.id === action.payload.id);
            if (findProudct.quantity > 1) {
                findProudct.quantity -= 1;
            } else {
                return state.filter((proudct) => proudct.id !== action.payload.id);
            }
        },
        clear: (state, action) => {
            return []
        }
    }
});
export const { addToCart, removeFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;