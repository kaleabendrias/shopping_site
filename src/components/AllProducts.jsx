import { Link } from "react-router-dom";
import iphone from "../assets/image/iphone.webp";
import earphone from "../assets/image/headphone.webp";
import usb from "../assets/image/usb.webp";
import perfume from "../assets/image/perfume.webp";

const Card = ({ image, title, brand, rating, price, originalPrice, label }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="shadow-lg rounded-lg mb-2">
        <div className="bg-[#D9D9D9] p-4 sm:p-2 flex justify-center pt-3 rounded-t-lg">
          <img src={image} alt={title} className="w-60 h-60 object-contain" />
        </div>
        <div className="p-5">
          <p className="mb-1 font-semibold">{title}</p>
          <p>{brand}</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex gap-2 items-center">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#F99601"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <p className="border-r-[1px] pr-1.5 border-gray-400">
                  {rating}
                </p>
                {label && (
                  <div className="text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
                    {label}
                  </div>
                )}
              </div>
            </div>
            <div>
              <Link to="/checkout">
                <svg
                  className="w-[48px] h-[48px] text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            {originalPrice && (
              <p className="line-through text-gray-400">{originalPrice}</p>
            )}
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProducts = () => {
  const products = [
    {
      image: iphone,
      title: "iPhone 15 Pro Max",
      brand: "Oraimo",
      rating: "4.5",
      price: "9,999",
      originalPrice: "10,599",
      label: "New arrival",
    },
    {
      image: earphone,
      title: "Headphone meagasound",
      brand: "Beats",
      rating: "4.3",
      price: "2, 000",
      originalPrice: "2,599",
      label: "Best seller",
    },
    {
      image: usb,
      title: "San Disk",
      brand: "San Disk",
      rating: "4.6",
      price: "1,9",
      originalPrice: "2,9",
    },
    {
      image: perfume,
      title: "Ralph Lauren men",
      brand: "Ralph Lauren",
      rating: "4.5",
      price: "4, 99",
      originalPrice: "7,99",
      label: "Discount",
    },
    {
      image: iphone,
      title: "iPhone 15 Pro Max",
      brand: "Oraimo",
      rating: "4.5",
      price: "9,999",
      originalPrice: "10,599",
      label: "New arrival",
    },
    {
      image: earphone,
      title: "Headphone 14",
      brand: "Beats",
      rating: "4.3",
      price: "2, 000",
      originalPrice: "2,599",
      label: "Best seller",
    },
    {
      image: usb,
      title: "cannon 2",
      brand: "Cannon",
      rating: "4.6",
      price: "1,999",
      originalPrice: "2,599",
    },
    {
      image: perfume,
      title: "Ralph Lauren men",
      brand: "Ralph Lauren",
      rating: "4.5",
      price: "4, 99",
      originalPrice: "7,99",
      label: "Discount",
    },
    {
      image: iphone,
      title: "iPhone 15 Pro Max",
      brand: "Oraimo",
      rating: "4.5",
      price: "9,999",
      originalPrice: "10,599",
      label: "New arrival",
    },
    {
      image: earphone,
      title: "Headphone 14",
      brand: "Beats",
      rating: "4.3",
      price: "2, 000",
      originalPrice: "2,599",
      label: "Best seller",
    },
    {
      image: usb,
      title: "cannon 2",
      brand: "Cannon",
      rating: "4.6",
      price: "1,999",
      originalPrice: "2,599",
    },
    {
      image: perfume,
      title: "Ralph Lauren men",
      brand: "Ralph Lauren",
      rating: "4.5",
      price: "4, 99",
      originalPrice: "7,99",
      label: "Discount",
    },
  ];

  return (
    <div className="px-4 md:px-11 my-10">
      <div>
        <p className="text-3xl font-bold mb-6">All Products</p>
      </div>
      <div className="flex flex-wrap -mx-2">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            brand={product.brand}
            rating={product.rating}
            price={product.price}
            originalPrice={product.originalPrice}
            label={product.label}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
