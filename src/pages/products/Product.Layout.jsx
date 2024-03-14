import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "./Products.Slice.js";

const ProductLayout = () => {
  const { isLoading, data, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  console.log({ isLoading, data, error });
  return (
    <>
      <h1>Products Listing</h1>
      {Array.isArray(data) &&
        data.map((product) => {
          return (
            <div key={product.id}>
              <p>
                {product.title} | {product.price}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default ProductLayout;
