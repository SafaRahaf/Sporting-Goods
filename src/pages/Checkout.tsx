import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/features/hooks";
import { RootState } from "../redux/features/store";
import { clearCart } from "../redux/features/products/cartSlice";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useAppSelector((state: RootState) => state.cart.cart);
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "stripe") {
      toast.error("Stripe payment not yet implemented");
    } else {
      dispatch(clearCart());
      toast.success("Order placed successfully!");
    }
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-12">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-3xl mb-6">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl mb-4">Order Summary</h2>
            <hr className="my-4" />
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item._id}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg">{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p>{item.price * item.quantity} tk</p>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Total</h3>
              <p className="text-xl">{totalAmount} tk</p>
            </div>
          </div>

          <div className="px-8">
            <h2 className="text-2xl mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Payment Method
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-md"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="cashOnDelivery">Cash on Delivery</option>
                  <option value="stripe">Stripe</option>
                </select>
              </div>
              {paymentMethod === "stripe" && (
                <div>
                  <label className="block text-sm font-medium">
                    Card Details
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md mt-5"
              >
                Place Order
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
