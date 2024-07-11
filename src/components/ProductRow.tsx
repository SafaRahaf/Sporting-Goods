import React, { useState } from "react";
import { IProduct } from "@/interface/productInterface";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteProduct } from "@/redux/features/products/productsSlice";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import EditProductForm from "./EditProductForm";

const ProductRow: React.FC<IProduct> = ({
  _id,
  image,
  title,
  price,
  stock,
  category,
  brand,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    // @ts-ignore
    dispatch(deleteProduct(_id));
  };

  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div
      key={_id}
      className="border border-gray-200 p-4 rounded-md shadow-md mb-4"
    >
      <div className="grid grid-cols-6 gap-2 text-center mb-2 items-center text-sm font-medium">
        <Link to={`/product/${_id}`} key={_id}>
          <div className="flex justify-center col-span-1">
            <img src={image} className="rounded-full h-12 w-12" alt={title} />
          </div>
        </Link>
        <p className="col-span-2">{title}</p>
        <p>{price} tk</p>
        <p>{stock}</p>
        <div className="col-span-1 flex justify-center items-center">
          <p>{price * stock} tk</p>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          {isEditing ? (
            <div className="bg-slate-50 shadow-md">
              <EditProductForm
                // @ts-ignore
                product={{ _id, image, title, price, stock, category, brand }}
                onClose={toggleEditForm}
              />
            </div>
          ) : (
            <button
              onClick={toggleEditForm}
              className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
            >
              <BiEdit />
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700 ml-2"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
