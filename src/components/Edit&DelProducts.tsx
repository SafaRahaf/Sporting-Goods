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
  const productsPerPage = 5;

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
          <div>
            {productsToShow.map((product: IProduct) => (
              <ProductRow key={product._id} {...product} />
            ))}
          </div>
        </div>
        {startIndex + productsPerPage < filteredProducts.length && (
          <div className="flex justify-center">
            <button
              onClick={handleSeeMore}
              className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditAndDelProducts;
