import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useOutlet, useOutletContext } from "react-router-dom";

const Card = ({
  id,
  photos,
  title,
  brand,
  rating,
  price,
  originalPrice,
  label,
  name,
}) => {
  const context = useOutletContext();

  const addToCart = () => {
    context.setCart([...context.cart, id]);
    console.log(context.cart);
  };

  const getPrice = () => {
    if (price && price.length > 0 && price[0].ETB && price[0].ETB.length > 0) {
      return price[0].ETB[0]; // Assuming ETB is the currency and accessing the first price in the array
    }
    return "Price not specified"; // Fallback if price information is not available
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
      <div className="shadow-lg rounded-lg mb-2">
        <div className="bg-[#D9D9D9] p-4 sm:p-2 flex justify-center pt-3 rounded-t-lg">
          {photos.length > 0 ? (
            <Link to={`/product/${id}`}>
              <img
                src={`https://api.timbu.cloud/images/${photos[0].url}`}
                alt={name}
                className="w-60 h-60 object-contain"
              />
            </Link>
          ) : (
            <Link to={`/product/${id}`}>
              <div className="w-60 h-60 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            </Link>
          )}
        </div>
        <div className="p-5">
          <p className="mb-1 font-semibold">{title}</p>
          <p className="font-semibold">{name}</p>
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
                {brand && (
                  <div className="text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
                    {brand}
                  </div>
                )}
              </div>
            </div>
            <div>
              <div>
                <svg
                  onClick={() => addToCart(id)}
                  className="w-12 h-12 text-gray-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
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
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {originalPrice && (
              <p className="line-through text-gray-400">{originalPrice}</p>
            )}
            <p>{getPrice()} ETB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const proxyURL = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${proxyURL}https://api.timbu.cloud/products?organization_id=${
            import.meta.env.VITE_ORG_ID
          }&reverse_sort=false&page=1&size=10&Appid=${
            import.meta.env.VITE_APP_ID
          }&Apikey=${import.meta.env.VITE_API_KEY}`
        );
        console.log(response);
        const data = response.data; // Axios response data is already parsed
        setProducts(data.items); // Adjust the path according to the actual response structure
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="px-4 md:px-11 my-10">
      <div>
        <p className="text-3xl font-bold mb-6">All Products</p>
      </div>
      <div className="flex flex-wrap -mx-2">
        {products.map((product, index) => (
          <Card
            key={index}
            id={product.id}
            photos={product.photos} // Replace with actual image field if available
            name={product.name}
            description={product.description}
            unique_id={product.unique_id}
            url_slug={product.url_slug}
            is_available={product.is_available}
            price={product.current_price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
