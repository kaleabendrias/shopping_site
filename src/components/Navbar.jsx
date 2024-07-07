import React from "react";
import image1 from "../assets/image/image1.svg";
import image2 from "../assets/image/image2.svg";
import image3 from "../assets/image/image3.svg";
import downArrow from "../assets/image/down-arrow.png";
import { list } from "postcss";
const Navbar = () => {
  return (
    <>
      <div className="border-b-[1px] flex justify-between border-gray-100 mb-30 py-2">
        <div className="pl-10 flex items-center gap-10">
          <div className="flex items-center gap-3">
            <img
              loading="lazy"
              src={image3}
              className="shrink-0 aspect-[1.12] fill-orange-500 w-[54px]"
            />
            <div className="text-3xl font-bold">Maukal</div>
          </div>
          <div className="flex gap-2 border-[1px] py-2 pl-3 border-black px-2  rounded-full ">
            <input
              className="outline-none"
              type="text"
              placeholder="Enter your search"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9d06f0c4259ff3382ad0a7655fb7ebdf4812863d4cd4b5697980ceb92bc75f?apiKey=395b4537a6cf42859d2b7b842947bef4&"
            />
            <button className="flex items-center gap-2 px-2 py-1.5 bg-orange-500 rounded-full">
              <div className="grow  text-white">Search</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa639ea4dfc75dd84890177a456fb11494c8a69b314478bb1012d3bd3267324d?apiKey=395b4537a6cf42859d2b7b842947bef4&"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-6 pr-10">
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <img loading="lazy" src={image1} />
              <div className="text-2xl">Eng</div>
            </div>
            <img loading="lazy" src={image2} className="w-10" />
          </div>
          <button className="bg-orange-500 text-white text-md px-5 rounded-md">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center px-16 text-sm  text-white bg-zinc-900">
        <div className="flex gap-5 justify-between items-center max-w-full w-[720px] max-md:flex-wrap">
          <div className="flex items-center gap-1.5 justify-between self-stretch py-1.5">
            <div>CATEGORIES</div>
            <img src={downArrow} className="w-3 h-3" />
          </div>
          <div className="self-stretch my-auto">HOME</div>
          <div className="self-stretch my-auto">SHOP</div>
          <div className="self-stretch my-auto">CHECKOUT</div>
          <div className="self-stretch my-auto">SUPPLIERS</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
