import speaker from "../assets/image/speaker.webp";
import perfume from "../assets/image/perfume.webp";

const Subscribe = () => {
  return (
    <div className="p-11">
      <div className="bg-[#EDEDED] flex items-center justify-center px-8 py-5">
        <div className="flex flex-col gap-8 md:w-[60%]">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-semibold">
              Subscribe to our newsletter
            </p>
            <p className="text-lg">
              subscribe to our news letter and get 10% off
            </p>
          </div>
          <div className="flex flex-row items-center w-full">
            <input
              type="text"
              placeholder="Enter Email"
              className="outline-none p-2 w-full"
            />
            <button className="bg-orange-500 p-2 w-24 rounded-r-md text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={perfume}
            className="hidden md:flex w-40 z-10 md:mt-10 md:absolute md:ml-8 lg:ml-24 object-contain"
          />
          <img
            src={speaker}
            className="hidden md:flex w-40 z-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
