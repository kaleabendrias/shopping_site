import React from "react";
import image5 from "../assets/image/image5.png";
import "./shopadd.css";
const ShopAdd = () => {
  return (
    <div className="bgimg h-[85vh]">
      <div className="pl-8 h-full flex flex-col justify-center gap-8">
        <div className="flex gap-6 items-center">
          <img src={image5} className="w-16 w-16" alt="" />
          <p className="text-3xl text-white font-bold">Welcome to Maukal</p>
        </div>
        <div className="text-white flex flex-col gap-4 text-5xl font-bold ">
          <p>The Leading Online Store</p>
          <p>With The Largest Product</p>
        </div>
        <div className="flex gap-3">
          <p className="text-3xl text-white">Frequently Searched:</p>
          <button className="text-white border-[1px] px-3 py-1 rounded-full">
            Rechargeable Fan
          </button>
          <button className="text-white border-[1px] px-3 py-1 rounded-full">
            iPhone 15 pro max
          </button>
          <button className="text-white border-[1px] px-3 py-1 rounded-full">
            Lexus Es 350
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopAdd;
