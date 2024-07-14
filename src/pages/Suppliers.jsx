import supplier1 from "../assets/image/supplier1.jpeg";
import supplier2 from "../assets/image/supplier2.jpeg";
import supplier3 from "../assets/image/supplier3.jpeg";
import supplier4 from "../assets/image/supplier4.jpeg";
import supplier5 from "../assets/image/supplier5.jpeg";

const suppliers = [
  { id: 1, name: "Supplier A", productsCount: 20, image: supplier1 },
  { id: 2, name: "Supplier B", productsCount: 15, image: supplier2 },
  { id: 3, name: "Supplier C", productsCount: 10, image: supplier3 },
  { id: 4, name: "Supplier D", productsCount: 18, image: supplier4 },
  { id: 5, name: "Supplier E", productsCount: 25, image: supplier5 },
];

const SuppliersPage = () => {
  return (
    <div className="px-4 md:px-11 my-10">
      <div>
        <p className="text-3xl font-bold mb-6">Suppliers</p>
      </div>
      <div className="flex flex-wrap -mx-2">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="shadow-lg rounded-lg mb-2">
              <div className="bg-[#D9D9D9] p-4 sm:p-2 flex justify-center pt-3 rounded-t-lg">
                <div className="w-60 h-60 bg-gray-200 flex items-center justify-center text-gray-400">
                  <img src={supplier.image} />
                </div>
              </div>
              <div className="p-5">
                <p className="mb-1 font-semibold">{supplier.name}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
                    Products: {supplier.productsCount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersPage;
