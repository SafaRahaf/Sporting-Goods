import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "@/interface/productInterface";
import { updateProduct } from "@/redux/features/products/productsSlice";

interface EditProductFormProps {
  product: IProduct;
  onClose: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  product,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [editedProduct, setEditedProduct] = useState<IProduct>({
    ...product,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(updateProduct(editedProduct));
      onClose();
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 rounded-md shadow-md w-80 p-4"
    >
      <div className="grid grid-cols-2 gap-4 text-center mb-4 items-center text-sm font-medium">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedProduct.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Price"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="stock" className="mb-1">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={editedProduct.stock}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Stock"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Image URL"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={editedProduct.category}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Category"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand" className="mb-1">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={editedProduct.brand}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Brand"
          />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
