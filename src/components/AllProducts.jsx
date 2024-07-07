import React from "react";
import iphone from "../assets/image/iphone.png";
const Card = () => {
  return (
    <div className="w-[24.5%] shadow-lg rounded-lg mb-2">
      <div className="bg-[#D9D9D9] flex justify-center pt-3 rounded-t-lg">
        <img src={iphone} alt="" className="w-60 h-60" />
      </div>
      <div className="p-5 ">
        <p className="mb-1">iphone 15 pro max</p>
        <p className="">Oraimo</p>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <svg
                class="w-6 h-6 te"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#F99601"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>

              <p className="border-r-[1px] pr-1.5 border-gray-400">4.5</p>
              <div className="text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
                New arrival
              </div>
            </div>
          </div>
          <div>
            <svg
              class="w-[48px] h-[48px] text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-4">
          <p className="line-through text-gray-400">10,599 </p>
          <p>9,999</p>
        </div>
      </div>
    </div>
  );
};

const AllProducts = () => {
  return (
    <div className="px-11 my-10">
      <div>
        <p className="text-3xl font-bold mb-6">All product</p>
      </div>
      <div className="flex flex-wrap justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AllProducts;
