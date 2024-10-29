
import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <div className="shadow-md bg-white overflow-x-hidden dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-green-600/40 py-2">
        <div className="container mx-auto px-4 max-w-screen-xl flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-2 text-2xl sm:text-3xl">
            <a href="#" className="flex items-center gap-2 font-bold">
              <img className="w-10 sm:w-12" src={logo} alt="Shopsy Logo" />
              <span className="hidden sm:inline">Shopsy</span>
            </a>
          </div>

          {/* Search and Cart Button */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary group-hover:w-32"
              />
              <FiSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Order Button */}
            <button onClick={() => alert("ordering not available yet")} className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-5 rounded-full items-center gap-3 group flex">
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <BsCart4 className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
