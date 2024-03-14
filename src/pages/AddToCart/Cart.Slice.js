import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartStore: [],
};
const cartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartStore.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
