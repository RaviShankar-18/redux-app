import ProductListing from "./pages/AddToCart/ProductListing.layout";
import Calculator from "./pages/calculator/Calculator.Layout";

import Todo from "./pages/todos/Todo.Layout";
import AddTodos from "./pages/todos/views/AddTodo.Component";
import Product from "./pages/products/Product.Layout";
function App() {
  return (
    <>
      <h1>TODO App using modern redux toolkit(rtk)</h1>
      {/* <Calculator /> */}

      {/* <AddTodos /> */}
      {/* <Todo /> */}
      {/* <ProductListing /> */}
      <Product />
    </>
  );
}

export default App;
