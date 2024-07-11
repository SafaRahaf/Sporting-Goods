import React from "react";
import { IProduct } from "@/interface/productInterface";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteProduct } from "@/redux/features/products/productsSlice";
import { useDispatch } from "react-redux";

const ProductRow: React.FC<IProduct> = ({
  _id,
  image,
  title,
  price,
  stock,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (_id: string) => {
    dispatch(deleteProduct(_id));
  };

  return (
    <div key={_id}>
      <div className="grid grid-cols-6 gap-3 text-center mb-2 items-center text-sm font-medium">
        <Link to={`/product/${_id}`} key={_id}>
          <div className="flex justify-center">
            <img src={image} className="rounded-full h-12 w-12" alt={title} />
          </div>
        </Link>
        <p>{price} tk</p>
        <div className="flex justify-center">
          <p>{stock}</p>
        </div>
        <p>{price * stock} tk</p>
        <Link to="#" className="flex justify-center text-xl text-slate-800">
          <FaRegEdit />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="flex justify-center text-2xl text-red-600"
        >
          <MdDeleteOutline />
        </button>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default ProductRow;
