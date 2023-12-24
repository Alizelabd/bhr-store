import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProudcts = createAsyncThunk("productsSlices/fetchProudcts", async () => {
    const respon = await fetch("https://fakestoreapi.com/products");
    const data = await respon.json();
    return data;
});
const productsSlices = createSlice({
    initialState: {
        loading: false,
        products: [],
    },
    name: 'productsSlices',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProudcts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProudcts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
    }
});
// export const { } = productsSlices.actions;
export const selectProducts = (state) => state.proudct.products;
export const selectLoading = (state) => state.proudct.loading;
export default productsSlices.reducer;