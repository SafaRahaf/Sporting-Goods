import React, { useState } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
        </Link>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen
              ? "absolute top-16 left-0 w-full bg-slate-900 md:bg-transparent md:static md:block z-10"
              : "hidden md:flex"
          } flex flex-col md:flex-row md:space-x-10 items-center justify-center p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 md:space-y-0">
            <li>
              <Link to="/" className="text-white py-2 md:py-0 block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white py-2 md:py-0 block">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white py-2 md:py-0 block">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white py-2 md:py-0 block">
                Contact
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                to="/manage-product"
                className="text-white py-2 block whitespace-nowrap"
              >
                Add Products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/manage-product" className="text-white">
            Add Products
          </Link>
          <NavLink to="/add-to-cart">
            <div className="text-white flex">
              <IoCartOutline className="text-2xl font-bold mr-3" />
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
