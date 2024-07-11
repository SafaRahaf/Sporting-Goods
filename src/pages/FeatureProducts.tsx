import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/redux/features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/features/store";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeatureProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Feature Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <ProductCard
                _id={product._id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
                stock={product.stock}
                brand={product.brand}
                rating={product.rating}
                description={product.description}
              />
            </Link>
          ))}
        </div>
        <Button className="w-full mt-5">
          <Link to="/products">View All Products</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeatureProducts;
