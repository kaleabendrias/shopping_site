import iphone from "../assets/image/iphone.png";
import earphone from "../assets/image/headphone.png";
import camera from "../assets/image/camera.jpg";
import perfume from "../assets/image/perfume.png";
import { Link } from "react-router-dom";

const categories = [
  { name: "iPhone", image: iphone },
  { name: "earphone", image: earphone },
  { name: "camera", image: camera },
  { name: "perfume", image: perfume },
  { name: "iPhone", image: iphone },
  { name: "earphone", image: earphone },
  { name: "camera", image: camera },
  { name: "perfume", image: perfume },
  { name: "iPhone", image: iphone },
  { name: "earphone", image: earphone },
  { name: "camera", image: camera },
  { name: "perfume", image: perfume },
];

const Popular = () => {
  return (
    <div className="mt-11 md:mt-0 px-11">
      <p className="text-3xl font-bold pb-10">Popular categories</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] flex flex-col gap-3 items-center p-3"
          >
            <Link to="/shop">
              <img
                src={category.image}
                className="w-3/5 h-40"
                alt={category.name}
              />
              <p>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
