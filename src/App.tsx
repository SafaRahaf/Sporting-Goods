import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import ManageProduct from "./pages/ManageProduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:_id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-to-cart" element={<AddToCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/manage-product" element={<ManageProduct />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
