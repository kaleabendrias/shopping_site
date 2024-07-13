import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${
            import.meta.env.VITE_ORG_ID
          }&reverse_sort=false&page=1&size=10&Appid=${
            import.meta.env.VITE_APP_ID
          }&Apikey=${import.meta.env.VITE_API_KEY}`
        );
        setProducts(response.data.items.slice(0, 8)); // Get the first 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-11 md:mt-0 px-11">
      <p className="text-3xl font-bold pb-10">Popular categories</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] flex flex-col gap-3 items-center p-3"
          >
            <Link to={`/shop/${product.id}`} className="px-2">
              {product.photos.length > 0 ? (
                <Link to={`/product/${product.id}`}>
                  <img
                    src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                    alt={name}
                    className="w-60 h-60 object-contain"
                  />
                </Link>
              ) : (
                <Link to={`/product/${product.id}`}>
                  <div className="w-60 h-60 bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                </Link>
              )}
            </Link>
            <p className="font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
