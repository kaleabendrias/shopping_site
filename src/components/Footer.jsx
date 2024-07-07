import appstore from "../assets/image/appstore.png";
import googleplay from "../assets/image/googleplay.png";

const Footer = () => {
  return (
    <div className="bg-[#FE7F0A] bg-opacity-20">
      <div className="px-11 flex justify-between pt-11 text-[#191B1F] text-opacity-60">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Contact us</p>
          <p className="">No 123, Ikeja, Lagos State, Nigeria.</p>
          <p>+234-8169672420</p>
          <p>noahajiyon@gmail.com</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Shop</p>
          <p className="">Nigeria</p>
          <p>England</p>
          <p>United States</p>
          <p>Ethiopia</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Account</p>
          <p className="">My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg text-black">Download App</p>
          <p className="">
            Download our App and get extra 15% discount on your first order.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img src={appstore} className="w-16" />
          <img src={googleplay} className="w-16" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
