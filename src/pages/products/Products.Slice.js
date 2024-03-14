import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsData: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, actions) => {
      state.isLoading = false;
      state.data = actions.payload.results;
      state.error = null;
    },
    getProductsFailed: (state, actions) => {
      state.isLoading = false;
      state.data = [];
      state.error = actions.payload.error;
      console.log("actionPayloadError", actions.payload.error);
    },
  },
});

export const { getProductsData, getProductsSuccess, getProductsFailed } =
  productSlice.actions;

export default productSlice.reducer;
