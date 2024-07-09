import man from "../assets/image/man.png";
import woman from "../assets/image/woman.png";
import purse from "../assets/image/purse.png";
import formen from "../assets/image/formen.png";
import { Link } from "react-router-dom";
const Comfy = () => {
  return (
    <div className="px-11 mb-10 text-[#191B1F]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[49.5%] bg-[#FFACAC] px-3 flex flex-col  pr-1">
          <p className="px-2 text-5xl pt-10 pb-3 text-[#424344]">
            Comfy styles for her
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col px-3 justify-between ">
              <div>
                <p>Shop Maukal fashion icluding</p>
                <p>clothing, shoes, jewelery, watches</p>
                <p>bags and more.</p>
              </div>
              <p className="underline">See more</p>
              <div className="flex pb-10 gap-3 items-center">
                <img src={purse} className="w-28" alt="" />
                <div>
                  <p>Top Ladies Handbag</p>
                  <p>Big Sale $20</p>
                </div>
                <div className="border border-[#191B1F] rounded-full p-1">
                  <Link to="shop">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="currentColor" d="m9 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={woman} className="h-64 " alt="" />
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:w-[49.5%] bg-[#EDEDED] px-3 flex flex-col  pr-1">
          <p className="px-2 text-5xl pt-10 pb-3 text-[#424344]">
            Comfy styles for him
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col px-3 justify-between ">
              <div>
                <p>Shop Maukal fashion icluding</p>
                <p>clothing, shoes, jewelery, watches</p>
                <p>bags and more.</p>
              </div>
              <p className="underline">See more</p>
              <div className="flex pb-10 gap-3 items-center">
                <img src={formen} className="w-28" alt="" />
                <div>
                  <p>Top Ladies Handbag</p>
                  <p>Big Sale $20</p>
                </div>
                <div className="border border-[#191B1F] rounded-full p-1">
                  <Link to="shop">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="currentColor" d="m9 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={man} className="h-64 " alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comfy;
