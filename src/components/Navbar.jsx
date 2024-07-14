import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import image1 from "../assets/image/image1.svg";
import image2 from "../assets/image/image2.svg";
import image3 from "../assets/image/image3.svg";
import downArrow from "../assets/image/down-arrow.png";
import cartIcon from "../assets/image/carticon.png";

const Navbar = () => {
  const context = useOutletContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleCategoriesMenu = () => {
    setIsCategoriesMenuOpen(!isCategoriesMenuOpen);
  };

  const toggleNotificationMenu = () => {
    setIsNotificationMenuOpen(!isNotificationMenuOpen);
  };

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
            <Link to="/">
              <div className="text-3xl font-bold">Maukal</div>
            </Link>
          </div>
          <div className="hidden lg:flex gap-2 border-[1px] py-2 pl-3 border-black px-2 rounded-full">
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
              <div className="grow text-white">Search</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa639ea4dfc75dd84890177a456fb11494c8a69b314478bb1012d3bd3267324d?apiKey=395b4537a6cf42859d2b7b842947bef4&"
              />
            </button>
          </div>
        </div>
        <div className="flex pr-10 lg:gap-6  items-center">
          <div className="flex gap-6  items-center">
            <div className="relative">
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={toggleNotificationMenu}
              >
                <path
                  d="M11 27.3334C10.2666 27.3334 9.63887 27.0722 9.11665 26.55C8.59443 26.0278 8.33331 25.4 8.33331 24.6667H13.6666C13.6666 25.4 13.4055 26.0278 12.8833 26.55C12.3611 27.0722 11.7333 27.3334 11 27.3334ZM1.44431 23.3334C1.12965 23.3334 0.865758 23.2265 0.652646 23.0127C0.439757 22.7991 0.333313 22.5344 0.333313 22.2184C0.333313 21.9024 0.439757 21.6388 0.652646 21.4277C0.865758 21.2166 1.12965 21.111 1.44431 21.111H2.99998V11.2444C2.99998 9.38524 3.55187 7.72413 4.65565 6.26102C5.7592 4.79813 7.20731 3.86669 8.99998 3.46669V2.66669C8.99998 2.11113 9.19442 1.63891 9.58331 1.25002C9.9722 0.861131 10.4444 0.666687 11 0.666687C11.5246 0.666687 11.9706 0.838909 12.338 1.18335C12.7053 1.5278 12.9185 1.94813 12.9776 2.44435V2.58902C12.6963 3.07769 12.4852 3.5908 12.3443 4.12835C12.2036 4.66591 12.1333 5.21569 12.1333 5.77769C12.1333 7.4148 12.6648 8.83147 13.7276 10.0277C14.7908 11.2241 16.1038 11.926 17.6666 12.1334C17.8889 12.1778 18.1111 12.2075 18.3333 12.2224C18.5555 12.237 18.7778 12.2296 19 12.2V21.111H20.5556C20.8703 21.111 21.1342 21.2179 21.3473 21.4317C21.5602 21.6455 21.6666 21.9102 21.6666 22.226C21.6666 22.542 21.5602 22.8056 21.3473 23.0167C21.1342 23.2278 20.8703 23.3334 20.5556 23.3334H1.44431ZM18.575 9.55569C17.525 9.55569 16.6333 9.18813 15.9 8.45302C15.1666 7.71791 14.8 6.82524 14.8 5.77502C14.8 4.72502 15.1675 3.83335 15.9026 3.10002C16.6378 2.36669 17.5303 2.00002 18.5803 2.00002C19.6305 2.00002 20.5223 2.36758 21.2556 3.10269C21.989 3.8378 22.3556 4.73035 22.3556 5.78035C22.3556 6.83058 21.9881 7.72235 21.253 8.45569C20.5179 9.18902 19.6252 9.55569 18.575 9.55569Z"
                  fill="#191B1F"
                />
              </svg>
              {isNotificationMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="flex flex-col p-4">
                    <div className="border-b pb-2 mb-2">Notifications</div>
                    <div className="flex flex-col gap-2">
                      <div className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                        Notification 1
                      </div>
                      <div className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                        Notification 2
                      </div>
                      <div className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                        Notification 3
                      </div>
                      <div className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                        Notification 4
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/checkout">
              <img src={cartIcon} className="w-7 h-6" alt="Cart" />
            </Link>
          </div>

          <div className="hidden md:flex gap-6">
            <div className="cursor-pointer">
              <img loading="lazy" src={image2} className="w-10" />
            </div>
          </div>
          <button className="hidden p-2 md:block bg-orange-500 text-white text-md px-5 rounded-md">
            Premium
          </button>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center px-4 py-2 text-sm text-white bg-zinc-900">
          <div className="flex flex-col gap-2">
            <button className="bg-orange-500 text-white text-md px-5 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center px-16 text-sm text-white bg-zinc-900">
        <div className="flex gap-5 justify-between items-center max-w-full w-[720px] max-md:flex-wrap">
          <div className="relative">
            <div
              className="flex items-center gap-1.5 justify-between self-stretch py-1.5 cursor-pointer"
              onClick={toggleCategoriesMenu}
            >
              <div>CATEGORIES</div>
              <img src={downArrow} className="w-3 h-3" />
            </div>
            {isCategoriesMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="flex flex-col text-black">
                  <Link
                    to="/products/electronics"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/products/cloths"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Clothing
                  </Link>
                  <Link
                    to="/products/home"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Office & Home
                  </Link>
                  <Link
                    to="/products/sports"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Sports
                  </Link>
                  <Link
                    to="/products/toys"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Toys
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/">
            <div className="self-stretch my-auto">HOME</div>
          </Link>
          <Link to="/shop">
            <div className="self-stretch my-auto">SHOP</div>
          </Link>
          <Link to="/checkout">
            <div className="self-stretch my-auto">CHECKOUT</div>
          </Link>
          <Link to="/suppliers">
            <div className="self-stretch my-auto">SUPPLIERS</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
