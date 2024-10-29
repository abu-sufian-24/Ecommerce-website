import AOS from "aos";
import "aos/dist/aos.css";

import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { IoIosStar } from "react-icons/io";
import { useEffect } from "react";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

function ProductOne() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, [])
  return (
    <div className="container mt-12 mb-12 px-4 sm:px-0 overflow-x-hidden">
      <div className="text-center" data-aos="fade-up">
        <p className="text-green-500 text-sm">Top Selling Products for you</p>
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="text-md text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10" >
        {ProductsData.map((data) => (
          <div key={data.id} className="flex flex-col items-center" data-aos="fade-left">
            <img
              className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] object-cover rounded-md"
              src={data.img}
              alt="img"
            />
            <div className="mt-2 text-center">
              <h5 className="font-semibold text-lg">{data.title}</h5>
              <p className="text-sm text-gray-600">{data.color}</p>
              <div className="flex items-center justify-center gap-1 text-yellow-500">
                <IoIosStar className="text-xl" />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered View All Button */}
      <div data-aos="fade-up" className="text-center">
        <button className="mt-10 cursor-pointer bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500 transition-all duration-200">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductOne;
