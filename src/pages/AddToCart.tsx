import { Button } from "@/components/ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/features/hooks";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/features/products/cartSlice";
import { RootState } from "../redux/features/store";

const AddToCart = () => {
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const dispatch = useAppDispatch();

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart(_id));
  };

  console.log("Cart state in AddToCart component:", cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleUpdateQuantity = (_id: string, quantity: number) => {
    dispatch(updateQuantity({ itemId: _id, quantity }));
  };

  return (
    <div className="p-12">
      <div className="mx-auto">
        <div className="grid grid-cols-5 gap-3 text-center mb-2 font-medium">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        <hr className="my-4" />

        {cart.length === 0 ? (
          <div className="text-center text-2xl py-24">
            There are no cart items.
          </div>
        ) : (
          cart.map((item) => (
            <div key={item._id}>
              <div className="grid grid-cols-5 gap-3 text-center mb-2 items-center">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full h-12 w-12 "
                  />
                </div>
                <p>{item.price} tk</p>
                <div className="flex justify-center">
                  <button
                    className="px-2 mx-2 bg-cyan-900 text-white rounded-sm font-semibold"
                    onClick={() =>
                      handleUpdateQuantity(item._id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-2 mx-2 bg-cyan-900 text-white rounded-sm font-semibold"
                    onClick={() =>
                      handleUpdateQuantity(item._id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>{item.price * item.quantity} tk</p>
                <Link
                  to="#"
                  onClick={() => handleRemove(item._id)}
                  className="flex justify-center text-2xl text-red-600"
                >
                  <MdDeleteOutline />
                </Link>
              </div>
              <hr className="my-4" />
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-12 px-5 sm:px-0 ">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-9 flex flex-col sm:flex-row gap-4 ">
              <h2>
                Subtotal:{" "}
                <strong>
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}{" "}
                  tk
                </strong>
              </h2>
              <h2>
                Shipping Fee: <strong>100 tk</strong>
              </h2>
              <h2>
                Order Total:{" "}
                <strong>
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) + 100}{" "}
                  tk
                </strong>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Button>
                <NavLink to="/products" className="btn btn-primary">
                  Continue Shopping
                </NavLink>
              </Button>
              <Button
                onClick={handleClearCart}
                className="btn btn-clear bg-red-500"
              >
                Clear All Cart
              </Button>
              <Link to="/checkout">
                <Button className="btn btn-clear bg-cyan-900">
                  Chackout Button
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
