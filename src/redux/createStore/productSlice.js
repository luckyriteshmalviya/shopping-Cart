import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productDetails: [],
  user: {},
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
   
  },
  extraReducers: (builder) => {
    builder.addCase(productDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    });
  },
});

export default userSlice.reducer;