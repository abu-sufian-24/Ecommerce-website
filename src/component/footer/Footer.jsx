

import AOS from "aos";
import "aos/dist/aos.css";

import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { useEffect } from "react";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, [])
  return (
    <div style={BannerImg} className="text-white py-10">
      <div className="container mx-auto px-4 " data-aos="fade-down">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Company Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left py-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold mb-3">
              <img src={footerLogo} alt="Shopsy Logo" className="w-12" />
              Shopsy
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Important Links */}
            <div className="py-4">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Links */}
            <div className="py-4">
              <h1 className="text-xl font-bold mb-3">Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social and Contact Information */}
          <div className="flex flex-col items-center md:items-start py-4">
            <div className="flex gap-3 mb-4">
              <a href="#"><FaInstagram className="text-3xl hover:text-primary transition duration-300" /></a>
              <a href="#"><FaFacebook className="text-3xl hover:text-primary transition duration-300" /></a>
              <a href="#"><FaLinkedin className="text-3xl hover:text-primary transition duration-300" /></a>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaLocationArrow />
              <p>Dogair-Dhaka</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>01887484441</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
