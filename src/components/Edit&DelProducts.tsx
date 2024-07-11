import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/features/store";
import { fetchProducts } from "../redux/features/products/productsSlice";
import ProductRow from "./ProductRow";
import { IProduct } from "@/interface/productInterface";

const EditAndDelProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const [productsToShow, setProductsToShow] = useState<IProduct[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductsToShow(
      filteredProducts.slice(startIndex, startIndex + productsPerPage)
    );
  }, [filteredProducts, startIndex]);

  const handleSeeMore = () => {
    const newStartIndex = startIndex + productsPerPage;
    setProductsToShow([
      ...productsToShow,
      ...filteredProducts.slice(newStartIndex, newStartIndex + productsPerPage),
    ]);
    setStartIndex(newStartIndex);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto">
      <div>
        <div className="font-medium">
          <div className="grid grid-cols-6 gap-3 text-center mb-2 items-center text-sm ">
            <div className="flex justify-center">Image</div>
            <p>Price</p>
            <div className="flex justify-center">
              <p>Stock</p>
            </div>
            <p>Subtotal</p>
            <Link to="#" className="flex justify-center text-md">
              Edit
            </Link>
            <button className="flex justify-center text-md">Delete</button>
          </div>
          <hr className="my-4" />
        </div>
        {productsToShow.map((product) => (
          <ProductRow
            _id={product._id}
            image={product.image}
            title={product.title}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>

      {filteredProducts.length > productsToShow.length && (
        <button
          onClick={handleSeeMore}
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default EditAndDelProducts;
