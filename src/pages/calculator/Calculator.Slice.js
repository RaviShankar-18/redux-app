import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 18,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add: (state, action) => {
      state.result = state.result + action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
  },
});

export const { add, subtract, multiply, divide } = calculatorSlice.actions;

export default calculatorSlice.reducer;
