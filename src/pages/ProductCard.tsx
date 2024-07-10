import React from "react";
import AddToCartButton from "@/components/AddToCartButton";
import { IProduct } from "@/interface/productInterface";

const ProductCard: React.FC<IProduct> = ({
  _id,
  image,
  title,
  price,
  category,
  stock,
  brand,
  rating,
  description,
}) => {
  const DecressDescLegnth =
    description.length > 50
      ? (description = description.substring(0, 60) + "...")
      : description;

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <div>{_id && <AddToCartButton productId={_id.toString()} />}</div>
        </div>
        <p className="text-gray-500 mb-2">{brand}</p>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700 font-medium">{price}TK</p>
          <p className="text-gray-500">{category}</p>
        </div>
        <p className="text-gray-700 mb-2">{DecressDescLegnth}</p>
        <div className="flex justify-between items-center">
          <p
            className={`text-sm ${
              stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500">
              {Array(Math.round(rating)).fill("★").join("")}
            </span>
            <span className="text-gray-400 ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
