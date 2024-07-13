import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const context = useOutletContext();
  const proxyURL = "https://cors-anywhere.herokuapp.com/";

  const generateRandomPrice = () => {
    return (
      Math.floor((Math.random() * (100000 - 10000)) / 1000) * 1000 +
      10000
    ).toFixed(2); // Generates a random price between 10,000 and 100,000 in increments of 1000
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const cartItemData = await Promise.all(
          context.cart.map(async (cartItem) => {
            const response = await axios.get(
              `${proxyURL}https://api.timbu.cloud/products/${
                cartItem.id
              }?organization_id=${import.meta.env.VITE_ORG_ID}&Appid=${
                import.meta.env.VITE_APP_ID
              }&Apikey=${import.meta.env.VITE_API_KEY}`
            );
            return {
              ...response.data,
              quantity: cartItem.quantity,
              price: generateRandomPrice(),
            }; // Assuming the API returns product data
          })
        );

        console.log("Cart Item Data:", cartItemData);
        setCartItems(cartItemData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [context.cart]);

  console.log("CartItems", cartItems);

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

  const productIds = cartItems.map((item) => item.id);

  return (
    <div className="container mx-auto p-4 my-10">
      <p className="text-md my-4 mb-16">
        Home<span className="font-semibold">/Cart</span>
      </p>
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
                <td className="flex items-center m-2 py-4">
                  {item.photos.length > 0 && (
                    // Check if photos array has at least one element
                    <div className="flex justify-center items-center">
                      <img
                        src={`https://api.timbu.cloud/images/${item.photos[0].url}`} // Access the first element of photos
                        alt={item.title}
                        className="w-10 h-10 object-contain mx-auto"
                      />
                    </div>
                  )}
                  <span className="px-4 py-2 ">{item.name}</span>
                </td>
                <td className="px-4 py-2 ">${item.price}</td>
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
                  ${(item.price * item.quantity).toFixed(2)}
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
        <button className="border-2 p-2 hover:bg-gray-400 font-bold px-4 ">
          Update Cart
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
              <span>${cartTotal}</span>
            </div>
            <div className="flex justify-between mb-2 border-b-2">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${cartTotal}</span>
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
    </div>
  );
};

export default Checkout;
