import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IProduct } from "@/interface/productInterface";
import { deleteProduct } from "../redux/features/products/productsSlice";

interface EditAndDelProductsProps {
  products: IProduct[];
}

const EditAndDelProducts: React.FC<EditAndDelProductsProps> = ({
  products,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <div className="grid grid-cols-6 gap-3 text-center mb-2 items-center text-md">
              <div className="flex justify-center">
                <img
                  src={product.image}
                  className="rounded-full h-12 w-12"
                  alt={product.title}
                />
              </div>
              <p>{product.price} tk</p>
              <div className="flex justify-center">
                <p>{product.stock}</p>
              </div>
              <p>{product.price * product.stock} tk</p>
              <Link
                to={`/edit-product/${product._id}`}
                className="flex justify-center text-xl text-slate-800"
              >
                <FaRegEdit />
              </Link>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex justify-center text-2xl text-red-600"
              >
                <MdDeleteOutline />
              </button>
            </div>
            <hr className="my-4" />
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No products are added</div>
      )}
    </div>
  );
};

export default EditAndDelProducts;
