import AOS from "aos";
import "aos/dist/aos.css";

import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { IoIosStar } from "react-icons/io";
import { useEffect } from "react";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  },
];

function TopProduct() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out" });
  }, [])
  return (
    <div className="mt-12 mb-12 px-4 sm:px-0 overflow-hidden">
      <div className="container mx-auto">
        <div data className="text-center" data-aos="fade-up">
          <p className="text-green-500 text-sm">Top Rated Products for You</p>
          <h2 className="text-3xl font-bold">Best Products</h2>
          <p className="text-md text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10" data-aos="fade-right">
          {ProductsData.map((data) => (
            <div key={data.id} className="rounded-2xl bg-white hover:bg-black/80 hover:text-white shadow-xl transition-all duration-300 p-4 dark:bg-gray-900 dark:text-white dark:hover:bg-rose-300">
              <div className="flex justify-center">
                <img src={data.img} alt="Product" className="max-w-[160px] h-auto block mx-auto shadow-md" />
              </div>
              <div className="flex justify-center gap-1 pt-2">
                {Array(4).fill().map((_, i) => (
                  <IoIosStar key={i} className="text-green-500 text-xl" />
                ))}
              </div>
              <h1 className="text-xl font-bold text-center pt-2">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 text-center mx-auto">
                {data.description}
              </p>
              <div className="flex justify-center pb-6">
                <button className="bg-green-600 inline-block text-center duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
