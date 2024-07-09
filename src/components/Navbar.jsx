import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image/image1.svg";
import image2 from "../assets/image/image2.svg";
import image3 from "../assets/image/image3.svg";
import downArrow from "../assets/image/down-arrow.png";
import cartIcon from "../assets/image/carticon.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const toggleCategoriesMenu = () => {
    setIsCategoriesMenuOpen(!isCategoriesMenuOpen);
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
        <div className="flex gap-6 pr-10 items-center">
          <Link to="/checkout">
            <img src={cartIcon} className="w-6 h-6" alt="Cart" />
          </Link>
          <div className="hidden md:flex gap-6">
            <div className="relative">
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={toggleLanguageMenu}
              >
                <img loading="lazy" src={image1} />
                <div className="text-2xl">Eng</div>
              </div>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="flex flex-col text-black">
                    <button className="py-2 px-4 text-left hover:bg-gray-100">
                      English
                    </button>
                    <button className="py-2 px-4 text-left hover:bg-gray-100">
                      French
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="cursor-pointer">
              <img loading="lazy" src={image2} className="w-10" />
            </div>
          </div>
          <button className="hidden md:block bg-orange-500 text-white text-md px-5 rounded-md">
            Sign Up
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
            <div className="flex gap-6">
              <div className="relative">
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={toggleLanguageMenu}
                >
                  <img loading="lazy" src={image1} />
                  <div className="text-2xl">Eng</div>
                </div>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="flex flex-col text-black">
                      <button className="py-2 px-4 text-left hover:bg-gray-100">
                        English
                      </button>
                      <button className="py-2 px-4 text-left hover:bg-gray-100">
                        French
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="cursor-pointer">
                <img loading="lazy" src={image2} className="w-10" />
              </div>
            </div>
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
                    to="/category/electronics"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/category/clothing"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Clothing
                  </Link>
                  <Link
                    to="/category/home"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Home & Garden
                  </Link>
                  <Link
                    to="/category/sports"
                    className="py-2 px-4 hover:bg-gray-100"
                  >
                    Sports
                  </Link>
                  <Link
                    to="/category/toys"
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
          <div className="self-stretch my-auto">SUPPLIERS</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
