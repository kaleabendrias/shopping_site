import { Link } from "react-router-dom";
import image5 from "../assets/image/image5.png";
import "./shopadd.css";
const ShopAdd = () => {
  return (
    <div className="bgimg h-[85vh]">
      <div className="pl-8 h-full flex flex-col justify-center gap-8">
        <div className="flex gap-6 items-center">
          <img src={image5} className="w-16 object-contain" alt="" />
          <p className="text-3xl text-white font-bold">Welcome to Maukal</p>
        </div>
        <div className="text-white flex flex-col gap-4 text-5xl font-bold ">
          <p>The Leading Online Store</p>
          <p>With The Largest Product</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <p className="text-xl md:text-3xl text-white">Frequently Searched:</p>
          <Link to="/checkout">
            <button className="text-white border-[1px] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
              Rechargeable Fan
            </button>
          </Link>
          <Link to="/checkout">
            <button className="text-white border-[1px] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
              iPhone 15 Pro Max
            </button>
          </Link>
          <Link to="/checkout">
            <button className="text-white border-[1px] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
              Lexus ES 350
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopAdd;
