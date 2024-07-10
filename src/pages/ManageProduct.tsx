// import { useState } from "react";
// import axios from "axios";

// const ManageProduct = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//     stock: 0,
//     rating: 0,
//     price: 0,
//     brand: "",
//     description: "",
//     image: "",
//   });

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/products",
//         formData
//       );
//       console.log("Product added:", response.data);
//       setFormData({
//         title: "",
//         category: "",
//         stock: 0,
//         rating: 0,
//         price: 0,
//         brand: "",
//         description: "",
//         image: "",
//       });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-5">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Category
//           </label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Stock
//           </label>
//           <input
//             type="number"
//             name="stock"
//             value={formData.stock}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Rating
//           </label>
//           <input
//             type="number"
//             name="rating"
//             value={formData.rating}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Price
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Brand
//           </label>
//           <input
//             type="text"
//             name="brand"
//             value={formData.brand}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Image URL
//           </label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ManageProduct;

// src/pages/ManageProduct.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/products/productsSlice";
import { v4 as uuidv4 } from "uuid";

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

    const newProduct = {
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
    <div className="p-12">
      <h1 className="text-3xl mb-6">Manage Product</h1>
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
  );
};

export default ManageProduct;
