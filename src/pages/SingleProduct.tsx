import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/features/store";
import { IProduct } from "../interface/productInterface";
import AddToCartButton from "@/components/AddToCartButton";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);

  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id!.toString() === id);
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id, products]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="single-product-image">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg w-full h-auto md:h-full"
          />
        </div>
        <div className="single-product-details bg-white shadow-md rounded-lg p-6 ">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p className="text-gray-700">
              <span className="font-bold">Category:</span> {product.category}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Brand:</span> {product.brand}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Stock:</span> {product.stock}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Rating:</span> {product.rating}
            </p>
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex justify-between">
            <p className="text-gray-700">
              <span className="font-bold">Price:</span> ${product.price}
            </p>
            <div>
              <AddToCartButton productId={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
