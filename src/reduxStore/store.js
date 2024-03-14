import { configureStore } from "@reduxjs/toolkit";
import cart from "../pages/AddToCart/Cart.Slice.js";
import calculator from "../pages/calculator/Calculator.Slice.js";
import ProductSlice from "../pages/products/Products.Slice.js";
import todoSlice from "../pages/todos/Todo.Slice.js";
import createSagaMiddleware from "redux-saga";
import getProductsAction from "../pages/products/Products.Saga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    calculator,
    todoSlice,
    cart,
    ProductSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(getProductsAction);

export default store;
