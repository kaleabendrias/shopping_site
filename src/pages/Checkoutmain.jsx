const Checkoutmain = () => {
  return (
    <div className="px-11">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3">
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
            <div className="bg-gray-100 p-6 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Gamepad</span>
                <span className="text-lg font-medium">$500.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Earpod</span>
                <span className="text-lg font-medium">$250.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Amount</span>
                <span className="text-lg font-medium">$750.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Shipping fee</span>
                <span className="text-lg font-medium">$0.00</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold">$750.00</span>
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
              <div className="flex items-center mb-6">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300"
                />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Pay with card
                </label>
              </div>
              <div className="space-y-4">
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
            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md">
                Proceed with payment
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutmain;
