import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productDetails: [],
  cart: [],
  updatedCart: [],
  value: 0,
};

export const productDetails = createAsyncThunk("details", async () => {
  const useData = await fetch("https://dummyjson.com/products?limit=96");
  const parsedData = await useData.json();
  return parsedData.products;
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    Total: (state, action) => {
      state.cart = action.payload;
    },

    Updated: (state, action) => {
      state.updatedCart = [...state, action.payload];
    },

    ADD: (state, action) => {
      let newQuantityIndex = state.cart.findIndex(
        (data) => data.id === action.payload
      );
      let modifiedCartList = state.cart[newQuantityIndex];
      modifiedCartList.quantity += 1;
    },

    SUBTRACT: (state, action) => {
      let newQuantityIndex = state.cart.findIndex(
        (data) => data.id === action.payload
      );
      let modifiedCartList = state.cart[newQuantityIndex];
      if (modifiedCartList.quantity > 0) {
        modifiedCartList.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { Total, ADD, SUBTRACT } = userSlice.actions;
