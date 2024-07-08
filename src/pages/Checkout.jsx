import { useState } from "react";
import { Link } from "react-router-dom";
import perfume from "../assets/image/perfume.png";
import earphone from "../assets/image/headphone.png";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { image: perfume, id: 1, name: "Gamepad", price: 250, quantity: 2 },
    { image: earphone, id: 2, name: "Earpod", price: 250, quantity: 1 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const handleCouponApply = () => {
    // Coupon apply logic here
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 my-10">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Cart</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-white ">
          <thead>
            <tr className="border">
              <th className="px-4 py-2 ">Product</th>
              <th className="px-4 py-2 ">Price</th>
              <th className="px-4 py-2 ">Quantity</th>
              <th className="px-4 py-2 ">Amount</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border border-spacing-2">
                <div className="flex items-center m-2">
                  <img src={item.image} className="w-8" />
                  <td className="px-4 py-2 ">{item.name}</td>
                </div>
                <td className="px-4 py-2 ">${item.price}</td>
                <td className="px-4 py-2 ">
                  <div className="flex items-centerl">
                    <div className=" border rounded-full">
                      <button
                        className="px-2"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 ">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button className=" p-2 border-2 hover:bg-gray-400 font-bold py-2 px-4 rounded">
          Return Home
        </button>
        <button className="border-2 p-2 hover:bg-gray-400 font-bold  px-4 ">
          Update Cart
        </button>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex justify-start items-center">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full px-4 py-2  rounded mb-2 md:mb-0"
          />
          <button
            onClick={handleCouponApply}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Apply Coupon
          </button>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <div className="bg-gray-100 p-4 rounded">
            <p className="font-semibold text-lg mb-4">Cart Total</p>
            <div className="flex justify-between mb-2">
              <span>Amount</span>
              <span>${cartTotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${cartTotal}</span>
            </div>
          </div>
          <Link to="/main" className="flex justify-end">
            <button className="w-[50%] bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
