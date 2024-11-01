import { useState } from "react";
import { useRef } from "react";
import Navbar from "./component/navbar/Navbar";
import NavbarHader from "./component/navbar/NavbarHader";
import Banner from "./component/Banner/Banner";
import Product from "./component/product/Product";
import ProductOne from "./component/productOne/ProductOne";
import Sale from "./component/sale/Sale";
import Subscrib from "./component/subscrib/Subscrib";
import TopProduct from "./component/topProduct/TopProduct";
import LastSlaider from "./component/lastSlaider/LastSlaider";
import Footer from "./component/footer/Footer";
import { Popup } from "./component/Popup";


function App() {
  const [openPopup, setOpenPopup] = useState(false);

  // Function to open the popup
  const handleOpenPopup = () => setOpenPopup(true);

  // Function to close the popup
  const handleClosePopup = () => setOpenPopup(false);


  const BannerRef = useRef(null);
  const ProductRef = useRef(null);
  const productOneRef = useRef(null);
  const topProductRef = useRef(null);
  const LastSlaiderRef = useRef(null);



  const scrollToBanner = () => {
    BannerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProduct = () => {
    ProductRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProductOne = () => {
    productOneRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTopProduct = () => {
    topProductRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLastSlaider = () => {
    LastSlaiderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onOrderClick={handleOpenPopup} />

      <NavbarHader onSlaider={scrollToLastSlaider} onTopProduct={scrollToTopProduct} onProductClick={scrollToProduct} onBannerClick={scrollToBanner} onTopRatedClick={scrollToProductOne} />

      <div ref={BannerRef}>
        <Banner onOrderClick={handleOpenPopup} />
      </div>
      <div ref={ProductRef}>
        <Product />
      </div>
      <div ref={topProductRef}>
        <TopProduct onOrderClick={handleOpenPopup} />
      </div>

      <Sale />
      <Subscrib />

      <div ref={productOneRef}>
        <ProductOne />
      </div>

      <div ref={LastSlaiderRef}>
        <LastSlaider />
      </div>

      <Footer />

      {/* Conditionally render the Popup */}
      {openPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Popup onClose={handleClosePopup} />
        </div>
      )}
    </>
  );
}

export default App;
