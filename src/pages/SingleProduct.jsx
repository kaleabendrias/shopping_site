import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const SingleProduct = () => {
  const context = useOutletContext();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const generateRandomPrice = () => {
    return (
      Math.floor((Math.random() * (100000 - 10000)) / 1000) * 1000 +
      10000
    ).toFixed(2); // Generates a random price between 10,000 and 100,000 in increments of 1000
  };

  const addToCart = () => {
    // Check if the item is already in the cart
    const itemExists = context.cart.some((cartItem) => cartItem.id === id);

    // If the item is not in the cart, add it
    if (!itemExists) {
      context.setCart([...context.cart, { id, quantity: 1 }]);
    }

    console.log(context.cart);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${
            import.meta.env.VITE_ORG_ID
          }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        console.log("this", response);
        const data = response.data;
        setProduct(data); // Assuming the API response contains the entire product object
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    console.log("this", product);

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log("product", product);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <div className="slick-arrow slick-next">→</div>,
    prevArrow: <div className="slick-arrow slick-prev">←</div>,
  };

  return (
    <div className="max-w-5xl mt-11 mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>
      <Slider {...settings}>
        {product.photos.length > 0 ? (
          product.photos.map((photo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={`https://api.timbu.cloud/images/${photo.url}`}
                alt={product.title}
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Placeholder"
              className="w-64 h-64 object-contain mx-auto"
            />
          </div>
        )}
      </Slider>
      <div className="mt-6 text-center">
        <p className="text-lg">
          <strong>Available quantities:</strong> {product.available_quantity}
        </p>
        <p className="text-lg">
          {/* <strong>Price:</strong> ${product.current_price || 0} */}
          <strong>Price:</strong> ${generateRandomPrice()}
        </p>
        {product.originalPrice && (
          <p className="text-lg">
            <strong>Original Price:</strong> ${product.originalPrice}
          </p>
        )}
        {product.label && (
          <p className=" mt-2 px-3 py-1 bg-green-500 text-white rounded-full">
            {product.label}
          </p>
        )}
        <p className=" mt-2 px-3 py-1 text-black rounded-full text-md">
          <span className="block font-semibold mb-2">Description</span>{" "}
          {product.description}
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
