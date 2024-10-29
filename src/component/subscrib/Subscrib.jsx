import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../assets/website/orange-pattern.jpg";
import { useEffect } from "react";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  display: "flex",  // Center align items
  alignItems: "center",
};

function Subscrib() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="mb-20 px-4 bg-gray-100  text-white" style={BannerImg} data-aos="fade-up">
      <div className="container backdrop-blur-sm py-10">
        <div
          data-aos="flip-left"
          className="space-y-6 max-w-lg mx-auto px-4 text-center sm:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscrib;

