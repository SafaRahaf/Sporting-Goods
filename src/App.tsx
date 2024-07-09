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
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/add-to-cart" element={<AddToCart />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
