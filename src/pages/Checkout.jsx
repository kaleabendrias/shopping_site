import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gamepad", price: 250, quantity: 2 },
    { id: 2, name: "Earpod", price: 250, quantity: 1 },
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
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Cart</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">${item.price}</td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
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
                </td>
                <td className="px-4 py-2 border">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button className=" p-2 border-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Return Home
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Update Cart
        </button>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full px-4 py-2 border rounded mb-2 md:mb-0"
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
          <Link to="/main">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full mt-4">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
