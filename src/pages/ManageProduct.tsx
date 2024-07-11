import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/products/productsSlice";
import EditAndDelProducts from "../components/Edit&DelProducts";
import axios from "axios";

const ManageProduct = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: any = {
      title,
      category,
      stock,
      brand,
      rating,
      description,
      price,
      image,
    };

    console.log("Submitting new product:", newProduct);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        newProduct
      );

      console.log("Response from backend:", response.data);

      dispatch(addProduct(response.data));

      setTitle("");
      setCategory("");
      setStock(0);
      setBrand("");
      setRating(0);
      setDescription("");
      setPrice(0);
      setImage("");
    } catch (error: any) {
      console.error("Error creating product:", error);
      if (error.response && error.response.data) {
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="p-5 md:p-12 flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-5/12 md:px-5">
        <h1 className="text-2xl font-medium mb-6 text-center md:text-left flex justify-center">
          Create Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Brand</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Rating</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Add Product
          </button>
        </form>
      </div>

      <div className="w-full md:w-7/12 md:px-10 mt-8 md:mt-0">
        <h1 className="text-2xl font-medium mb-6 text-center md:text-left pb-5 flex justify-center">
          Edit Product
        </h1>
        <EditAndDelProducts />
      </div>
    </div>
  );
};

export default ManageProduct;
