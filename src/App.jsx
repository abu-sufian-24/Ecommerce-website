
import Banner from "./component/Banner/Banner"
import Navbar from "./component/navbar/Navbar"
import NavbarHader from "./component/navbar/NavbarHader"
import Product from "./component/product/Product"
import ProductOne from "./component/productOne/ProductOne"
import Sale from "./component/sale/Sale"
import Subscrib from "./component/subscrib/Subscrib"
import TopProduct from "./component/topProduct/TopProduct"
import LastSlaider from "./component/lastSlaider/lastSlaider"
import Footer from "./component/footer/Footer"


function App() {


  return (
    <>
      <Navbar />
      <NavbarHader />
      <Banner />
      <Product />
      <TopProduct />
      <Sale />
      <Subscrib />
      <ProductOne />
      <LastSlaider />
      <Footer />
    </>
  )
}

export default App
