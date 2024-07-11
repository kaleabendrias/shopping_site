import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="w-full text-left pl-11">
        Home/Cart<span className="font-semibold">/Success</span>
      </p>
      <div className="p-10 text-center flex flex-col items-center">
        <div className="flex items-center justify-center w-40 h-40 md:w-80 md:h-80 rounded-full bg-orange-200 mb-24">
          <div className="flex items-center justify-center w-32 h-32 md:w-60 md:h-60 rounded-full bg-orange-300 ">
            <div className="flex items-center justify-center w-20 h-20 md:w-40 md:h-40 rounded-full bg-orange-500 ">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  filter:
                    "drop-shadow(2px 2px 4px rgba(255, 165, 0, 0.5)) drop-shadow(2px 2px 8px rgba(255, 165, 0, 0.5))",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-semibold mb-4">Payment Successful!</h1>
        <p className="text-gray-600">
          You will be redirected to the home page in{" "}
          <span className="text-orange-500">15 sec</span>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
