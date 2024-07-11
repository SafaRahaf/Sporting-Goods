import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { addToCart } from "@/redux/features/products/cartSlice";
import { RootState } from "@/redux/features/store";

interface AddToCartButtonProps {
  productId: any;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((p) => p._id!.toString() === productId);

  const handleAddToCart = () => {
    if (product) {
      //@ts-ignore
      dispatch(addToCart(product));
      console.log("Product added to cart:", product);
    }
  };

  return (
    <Button onClick={handleAddToCart}>
      <Link to="/add-to-cart">Add To Cart</Link>
    </Button>
  );
};

export default AddToCartButton;
