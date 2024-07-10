import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/products/productsSlice";
import { v4 as uuidv4 } from "uuid";
import { IProduct } from "@/interface/productInterface";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: IProduct = {
      id: uuidv4(),
      title,
      category,
      stock,
      brand,
      rating,
      description,
      price,
      image,
    };

    dispatch(addProduct(newProduct));

    setTitle("");
    setCategory("");
    setStock(0);
    setBrand("");
    setRating(0);
    setDescription("");
    setPrice(0);
    setImage("");
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
        <div>
          <div className="grid grid-cols-6 gap-3 text-center mb-2 font-medium text-md">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Edit</p>
            <p>Remove</p>
          </div>
          <hr className="my-4" />
          <div>
            <div className="grid grid-cols-6 gap-3 text-center mb-2 items-center text-md">
              <div className="flex justify-center">
                <img src="" className="rounded-full h-12 w-12 " />
              </div>
              <p>676575 tk</p>
              <div className="flex justify-center">
                <p>16</p>
              </div>
              <p>tk + q</p>
              <Link
                to="#"
                className="flex justify-center text-xl text-slate-800"
              >
                <FaRegEdit />
              </Link>
              <Link
                to="#"
                className="flex justify-center text-2xl text-red-600"
              >
                <MdDeleteOutline />
              </Link>
            </div>
            <hr className="my-4" />
          </div>
          <div>
            <div className="grid grid-cols-6 gap-3 text-center mb-2 items-center text-md">
              <div className="flex justify-center">
                <img src="" className="rounded-full h-12 w-12 " />
              </div>
              <p>676575 tk</p>
              <div className="flex justify-center">
                <p>16</p>
              </div>
              <p>tk + q</p>
              <Link
                to="#"
                className="flex justify-center text-xl text-slate-800"
              >
                <FaRegEdit />
              </Link>
              <Link
                to="#"
                className="flex justify-center text-2xl text-red-600"
              >
                <MdDeleteOutline />
              </Link>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
