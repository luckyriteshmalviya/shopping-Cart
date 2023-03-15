import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productDetails: [],
  cart: [],
  value: 0,
};

export const productDetails = createAsyncThunk("details", async () => {
  const useData = await fetch("https://dummyjson.com/products?limit=15");
  const parsedData = await useData.json();
  console.log("ap result",parsedData.products)
  return parsedData.products;
});
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    Total: (state, action)=>{
        console.log(state, "action", action)
    state.cart = action.payload
    }
   
  },
  extraReducers: (builder) => {
    builder.addCase(productDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    });
  },
});

export default userSlice.reducer;
export const { Total } = userSlice.actions;