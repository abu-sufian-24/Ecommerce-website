
import { Dropdown } from "flowbite-react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function NavbarHeader() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="pt-4 pb-3 overflow-x-hidden bg-white shadow-sm dark:bg-gray-900 dark:text-white">
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center flex-wrap">
        <li className="pr-6 lg:pr-12 hover:text-primary text-lg">
          <a href="#">Home</a>
        </li>
        <li className="pr-6 lg:pr-12 hover:text-primary text-lg">
          <a href="#">Top Rated</a>
        </li>
        <li className="pr-6 lg:pr-12 hover:text-primary text-lg">
          <a href="#">Kids Wear</a>
        </li>
        <li className="pr-6 lg:pr-12 hover:text-primary text-lg">
          <a href="#">Mens Wear</a>
        </li>
        <li className="pr-6 lg:pr-12 hover:text-primary text-lg">
          <a href="#">Electronics</a>
        </li>
        <Dropdown
          className="pr-6 lg:pr-12 text-lg"
          label={<span className="text-lg">Trending Products</span>}
          inline
        >
          <Dropdown.Item>Trending Products</Dropdown.Item>
          <Dropdown.Item>Best Selling</Dropdown.Item>
          <Dropdown.Item>Top Rated</Dropdown.Item>
        </Dropdown>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex justify-center">
        <button
          onClick={() => setMobileMenuOpen(!MobileMenuOpen)}
          className="text-primary text-3xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {MobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-3 mt-4">
          <li className="text-lg hover:text-primary">
            <a href="#">Home</a>
          </li>
          <li className="text-lg hover:text-primary">
            <a href="#">Top Rated</a>
          </li>
          <li className="text-lg hover:text-primary">
            <a href="#">Kids Wear</a>
          </li>
          <li className="text-lg hover:text-primary">
            <a href="#">Mens Wear</a>
          </li>
          <li className="text-lg hover:text-primary">
            <a href="#">Electronics</a>
          </li>
          <Dropdown
            className="text-lg"
            label={<span className="text-lg">Trending Products</span>}
            inline
          >
            <Dropdown.Item>Trending Products</Dropdown.Item>
            <Dropdown.Item>Best Selling</Dropdown.Item>
            <Dropdown.Item>Top Rated</Dropdown.Item>
          </Dropdown>
        </ul>
      )}
    </div>
  );
}

export default NavbarHeader;

