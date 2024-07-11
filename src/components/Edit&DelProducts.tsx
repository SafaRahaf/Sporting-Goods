import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/features/store";
import { fetchProducts } from "../redux/features/products/productsSlice";
import ProductRow from "./ProductRow";

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div>
          {filteredProducts.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ProductRow
                _id={product._id}
                image={product.image}
                title={product.title}
                price={product.price}
                stock={product.stock}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
