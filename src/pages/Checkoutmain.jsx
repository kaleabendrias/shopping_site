import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import visa from "../assets/image/visa.png";

const Checkoutmain = () => {
  const location = useLocation();
  const { productIds = [], totalAmount = 0 } = location.state || {};

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = await Promise.all(
          productIds.map(async (productId) => {
            const response = await axios.get(
              `/api/products/${productId}?organization_id=${
                import.meta.env.VITE_ORG_ID
              }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
                import.meta.env.VITE_API_KEY
              }`
            );
            return response.data;
          })
        );
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productIds]);

  console.log("Products: ", products, " and total amount: ", totalAmount);

  return (
    <div className="px-5 md:px-11 mb-20">
      <div className="mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3">
            <p className="text-sm my-4 mb-8">
              Home/Cart<span className="font-semibold">/Checkout</span>
            </p>
            <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Fullname
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g +2348169672420"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Customer ID
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your maukal ID"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter shipping address"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">State</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Postal code
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter zip/postal code"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Label</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Interactive form field"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Save this information for faster checkout time next time
                </label>
              </div>
            </form>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0 md:pl-10">
            <div className="md:p-6 rounded-md">
              {products.map((product) => (
                <div
                  className="flex justify-between items-center mb-4 mt-11"
                  key={product.id}
                >
                  <div className="flex justify-center items-center space-x-2">
                    {product.photos.length > 0 && (
                      <img
                        src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                        className="w-10 h-10 object-contain"
                        alt={product.name}
                      />
                    )}
                    <span className="text-lg font-medium">{product.name}</span>
                  </div>
                  {/* <span className="text-lg font-medium">${product.price}</span> */}
                </div>
              ))}
              <div className="flex justify-between items-center mb-4 border-b-2">
                <span className="text-lg font-medium">Amount</span>
                <span className="text-lg font-medium">${totalAmount}</span>
              </div>
              <div className="flex justify-between items-center mb-4 border-b-2">
                <span className="text-lg font-medium">Shipping fee</span>
                <span className="text-lg font-medium">$0.00</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold">${totalAmount}</span>
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300"
                />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Pay on delivery
                </label>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300"
                  />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Pay with card
                  </label>
                </div>
                <img src={visa} className="w-20" alt="Visa" />
              </div>
              <div className="space-y-4 text-slate-700">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Name On Card
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your card number"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/3">
                    <label className="block mb-2 text-sm font-medium">
                      CVV Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="CVV"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block mb-2 text-sm font-medium">
                      Exp
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="01/24"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block mb-2 text-sm font-medium">
                      Card Pin
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="e.g 0000"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-6 space-y-2 md:space-y-0 md:space-x-4">
              <Link to="/paymentsuccess">
                <button className="w-full md:w-auto px-4 py-2 hover:bg-orange-700 bg-orange-500 text-white font-semibold rounded-md">
                  Proceed with payment
                </button>
              </Link>
              <Link to="/">
                <button className="w-full md:w-auto px-4 py-2 bg-black text-white font-semibold rounded-md">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutmain;
