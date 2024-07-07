import appstore from "../assets/image/appstore.png";
import googleplay from "../assets/image/googleplay.png";

const Footer = () => {
  return (
    <div className="bg-[#FE7F0A] bg-opacity-20">
      <div className="px-11 flex justify-between items-center pt-11 text-[#191B1F] text-opacity-60">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Contact us</p>
          <p className="">No 123, Ikeja, Lagos State, Nigeria.</p>
          <p>+234-8169672420</p>
          <p>noahajiyon@gmail.com</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Contact us</p>
          <p className="">No 123, Ikeja, Lagos State, Nigeria.</p>
          <p>+234-8169672420</p>
          <p>noahajiyon@gmail.com</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Contact us</p>
          <p className="">No 123, Ikeja, Lagos State, Nigeria.</p>
          <p>+234-8169672420</p>
          <p>noahajiyon@gmail.com</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Contact us</p>
          <p className="">No 123, Ikeja, Lagos State, Nigeria.</p>
          <p>+234-8169672420</p>
          <p>noahajiyon@gmail.com</p>
        </div>

        <div>
          <img src={appstore} className="w-16" />
          <img src={appstore} className="w-16" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
