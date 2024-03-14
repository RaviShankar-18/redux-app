import { put, takeLatest } from "redux-saga/effects";
import { getProductsSuccess, getProductsFailed } from "./Products.Slice";
import { getRequest } from "../../services/http.service";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getProducts(action) {
  try {
    yield console.log("Request inside getProducts Saga: ", action);
    const response = yield getRequest("https://fakestoreapi.com/products");
    if (!response) {
      // Return error
      yield put(getProductsFailed({ error: "Unable to load products" }));
      return;
    }

    yield put(getProductsSuccess({ results: response }));
  } catch (e) {
    console.log("Error: ", e);
    yield put(getProductsFailed({ error: "Unable to load products" }));
  }
}

function* getProductsAction() {
  yield takeLatest("products/getProducts", getProducts);
}

export default getProductsAction;
