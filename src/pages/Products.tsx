import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/features/store";
import {
  fetchProducts,
  setSearchQuery,
  setFilter,
  setSort,
} from "../redux/features/products/productsSlice";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name === "priceMin" || name === "priceMax") {
      const numericValue = parseInt(value);
      dispatch(
        setFilter({
          [name]: isNaN(numericValue) ? undefined : numericValue,
        })
      );
    } else {
      dispatch(setFilter({ [name]: value }));
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sport's Products
        </h2>
        <div className="flex flex-wrap justify-between mb-4 gap-1">
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={handleSearchChange}
            className="border p-2 rounded w-full sm:w-auto"
          />
          <select
            name="category"
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">All Categories</option>
            <option value="Gym">Gym</option>
            <option value="Swimming">Swimming</option>
            <option value="Cricket">Cricket</option>
            <option value="Tennis">Tennis</option>
            <option value="Badminton">Badminton</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Rugby">Rugby</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Golf">Golf</option>
            <option value="Baseball">Baseball</option>
          </select>
          <select
            name="brand"
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">All Brands</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Wilson">Wilson</option>
            <option value="Rawlings">Rawlings</option>
            <option value="Asics">Asics</option>
            <option value="Fila">Fila</option>
            <option value="FBT">FBT</option>
            <option value="New Balace">New Balace</option>
            <option value="ERKE">ERKE</option>
            <option value="Ruma">Ruma</option>
            <option value="Under Armour">Under Armour</option>
            <option value="Columbia">Columbia</option>
            <option value="Hummel">Hummel</option>
            <option value="Erreà">Erreà</option>
          </select>
          <input
            type="number"
            name="priceMin"
            placeholder="Min Price"
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          />
          <input
            type="number"
            name="priceMax"
            placeholder="Max Price"
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          />
          <select
            name="rating"
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">All Ratings</option>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </select>
          <select
            onChange={handleSortChange}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <Button className="bg-red-500 text-white p-2 rounded w-full sm:w-auto">
            <a href="/products">Clear Filter</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard
                id={product.id}
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
      </div>
    </section>
  );
};

export default ProductsPage;
