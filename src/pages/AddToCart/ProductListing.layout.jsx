import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductListing.style.css";
import { addToCart } from "./Cart.Slice";
import { useDispatch, useSelector } from "react-redux";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const cartProduct = useSelector((state) => state.cart.cartStore);
  console.log("Cart Store", cartProduct);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setProductList(response.data);
    });
  }, []);

  const onClickAddToCart = (product) => {
    console.log("Product", product);
    dispatch(addToCart(product));
  };

  console.log("ProductList", productList);
  return (
    <div className="product-wrapper">
      {true &&
        productList.map((product) => {
          return (
            <div key={product.id} className="Product-wrapper">
              <div className="product-item">
                <img
                  src={product.image}
                  alt="Product Image"
                  className="product-image"
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">{product.price}</p>
                <button onClick={() => onClickAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}

      {cartProduct.map((product) => {
        return (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt="Product Image"
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
