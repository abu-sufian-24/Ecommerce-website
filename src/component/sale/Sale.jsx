
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { useEffect } from "react";

function Sale() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out" });
  }, [])
  return (
    <div className="min-h-[450px] flex justify-center items-center py-10 overflow-x-hidden  bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Image Section */}
          <div data-aos="fade-up-right" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Winter Sale Banner"
              className="w-full max-w-[350px] sm:max-w-[400px] h-[300px] sm:h-[350px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.3)] object-cover rounded-md"
            />
          </div>

          {/* Text and Icons Section */}
          <div data-aos="fade-up-left" className="flex flex-col justify-center gap-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Winter Sale up to 50% Off
            </h1>
            <p className="text-sm text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <GrSecure className="text-4xl p-3 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="text-gray-700">Quality Products</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <IoFastFood className="text-4xl p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p className="text-gray-700">Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <GiFoodTruck className="text-4xl p-3 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-gray-700">Easy Payment Method</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <GiFoodTruck className="text-4xl p-3 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p className="text-gray-700">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;
