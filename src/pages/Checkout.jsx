import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";

import ClearIcon from "../assets/image/clear.jpeg";
import RemoveIcon from "../assets/image/remove.jpeg";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useOutletContext();

  const generateRandomPrice = () => {
    return (
      Math.floor((Math.random() * (100000 - 10000)) / 1000) * 1000 +
      10000
    ).toFixed(2);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const cartItemData = await Promise.all(
          context.cart.map(async (cartItem) => {
            const response = await axios.get(
              `https://timbu-get-single-product.reavdev.workers.dev/${
                cartItem.id
              }?organization_id=${import.meta.env.VITE_ORG_ID}&Appid=${
                import.meta.env.VITE_APP_ID
              }&Apikey=${import.meta.env.VITE_API_KEY}`
            );
            return {
              ...response.data,
              quantity: cartItem.quantity,
              price: generateRandomPrice(),
            };
          })
        );

        setCartItems(cartItemData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [context.cart]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const handleClearCart = () => {
    context.setCart([]);
    setCartItems([]);
  };

  const handleRemoveItem = (id) => {
    context.setCart(context.cart.filter((item) => item.id !== id));
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCouponApply = () => {};

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const productIds = cartItems.map((item) => item.id);

  return (
    <div className="container mx-auto p-4 my-10">
      <p className="text-md my-4 mb-16">
        Home<span className="font-semibold">/Cart</span>
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Cart</h2>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <svg
            className="animate-spin h-16 w-16 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left bg-white ">
              <thead>
                <tr className="border">
                  <th className="px-4 py-2 ">Product</th>
                  <th className="px-4 py-2 ">Price</th>
                  <th className="px-4 py-2 ">Quantity</th>
                  <th className="px-4 py-2 ">Amount</th>
                  <th className="px-4 py-2 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border border-spacing-2">
                    <td className="flex items-center m-2 py-4">
                      {item.photos.length > 0 && (
                        <div className="flex justify-center items-center">
                          <img
                            src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                            alt={item.title}
                            className="w-10 h-10 object-contain mx-auto"
                          />
                        </div>
                      )}
                      <span className="px-4 py-2 ">{item.name}</span>
                    </td>
                    <td className="px-4 py-2 ">{item.price} ETB</td>
                    <td className="px-4 py-2 ">
                      <div className="flex items-center">
                        <div className="flex flex-col md:flex-row border rounded-full">
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
                    <td className="px-4 py-2 ">
                      {(item.price * item.quantity).toFixed(2)} ETB
                    </td>
                    <td className="px-4 py-2 flex items-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="mr-2 text-red-600"
                      >
                        <img
                          src={RemoveIcon}
                          className="w-12 h-12"
                          alt="remove cart icon"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Link to="/">
              <button className="p-2 border-2 hover:bg-gray-400 font-bold py-2 px-4 rounded">
                Return Home
              </button>
            </Link>
            <button
              onClick={handleClearCart}
              className="mt-12 hover:bg-gray-400 font-bold p-2 rounded-full"
            >
              <img
                src={ClearIcon}
                className="w-8 h-8 "
                alt="clear cart button"
              />
            </button>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-center md:justify-between">
            <div className="flex justify-start items-center">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full px-4 py-2 rounded mb-2 md:mb-0"
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
                <div className="flex justify-between mb-4 p-2 border-b-2">
                  <span>Amount</span>
                  <span>{cartTotal} ETB</span>
                </div>
                <div className="flex justify-between mb-2 border-b-2">
                  <span>Shipping</span>
                  <span>0.00 ETB</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{cartTotal} ETB</span>
                </div>
              </div>
              <Link
                to="/main"
                state={{ productIds, totalAmount: cartTotal }}
                className="flex justify-end"
              >
                <button className="w-[50%] bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
