import camera from "../assets/image/camera.png";
import iphone from "../assets/image/iphone.png";
import headphone from "../assets/image/headphone.png";
import { Link } from "react-router-dom";

const NewDeals = () => {
  return (
    <div className="px-11 mt-11 md:mt-0 flex flex-col md:flex-row md:px-5 md:py-10 md:justify-around text-white gap-5 md:gap-0">
      <div className="w-full md:w-[32%] bg-[#C26900] flex justify-between p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <p>New Deals at</p>
              <p>Best Prices</p>
            </div>
            <p>From $50.00</p>
          </div>
          <div>
            <Link to="/shop">
              <a href="#" className="underline">
                Browse Details
              </a>
            </Link>
          </div>
        </div>
        <img
          src={headphone}
          alt="Headphone"
          className="w-2/5 md:w-3/5 h-24 md:h-40 object-contain"
        />
      </div>
      <div className="w-full md:w-[32%] bg-[#1B5779] flex justify-between p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <p>New Deals at</p>
              <p>Best Prices</p>
            </div>
            <p>From $50.00</p>
          </div>
          <div>
            <Link to="/shop">
              <a href="#" className="underline">
                Browse Details
              </a>
            </Link>
          </div>
        </div>
        <img
          src={iphone}
          alt="iPhone"
          className="w-2/5 md:w-3/5 h-24 md:h-40 object-contain"
        />
      </div>
      <div className="w-full md:w-[32%] bg-black flex justify-between p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <p>New Deals at</p>
              <p>Best Prices</p>
            </div>
            <p>From $50.00</p>
          </div>
          <div>
            <Link to="/shop">
              <a href="#" className="underline">
                Browse Details
              </a>
            </Link>
          </div>
        </div>
        <img
          src={camera}
          alt="Camera"
          className="w-2/5 md:w-3/5 h-24 md:h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default NewDeals;
