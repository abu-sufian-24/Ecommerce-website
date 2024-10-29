
import Image1 from '../../assets/hero/sale.png';
import Image2 from '../../assets/hero/shopping.png';
import Image3 from '../../assets/hero/women.png';
import Slider from 'react-slick';
import { BsCart4 } from "react-icons/bs";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Banner() {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-x-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Background Shape */}
      <div className="h-[700px] w-[700px] bg-green-500/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-20 sm:pt-28">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">
                    {data.description}
                  </p>
                  <div>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 md:px-8 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="flex justify-center sm:justify-end order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt="img"
                    className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] object-contain mx-auto sm:mx-0"
                  />
                </div>



              </div>
            </div>
          ))}
        </Slider>

        {/* <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-3 px-5 rounded-md  "
          >
            <BsCart4 className="text-4xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div> */}

      </div>
    </div>
  );
}

export default Banner;

