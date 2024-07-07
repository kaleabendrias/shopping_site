import React from "react";
import camera from "../assets/image/camera.png";
import iphone from "../assets/image/iphone.png";
import headphone from "../assets/image/headphone.png";
const NewDeals = () => {
  return (
    <>
      <div className="px-5 py-10 flex justify-around text-white">
        <div className="w-[30%] bg-[#C26900] flex justify-between p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div>
                <p>New Deals at</p>
                <p>Best Prices</p>
              </div>
              <p>From $50.00</p>
            </div>
            <div>
              <a href="#" className="underline ">
                Browse Details
              </a>
            </div>
          </div>
          <img src={headphone} alt="" className="w-3/5 h-40" />
        </div>
        <div className="w-[30%] bg-[#1B5779] flex justify-between p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div>
                <p>New Deals at</p>
                <p>Best Prices</p>
              </div>
              <p>From $50.00</p>
            </div>
            <div>
              <a href="#" className="underline ">
                Browse Details
              </a>
            </div>
          </div>
          <img src={iphone} alt="" className="w-3/5 h-40" />
        </div>
        <div className="w-[30%] bg-black flex justify-between p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div>
                <p>New Deals at</p>
                <p>Best Prices</p>
              </div>
              <p>From $50.00</p>
            </div>
            <div>
              <a href="#" className="underline ">
                Browse Details
              </a>
            </div>
          </div>
          <img src={camera} alt="" className="w-3/5 h-40" />
        </div>
      </div>
    </>
  );
};

export default NewDeals;
