import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>{" "}
            <li>
              <Link to="/products" className="text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-6">
          <Link to="/manage-product" className="text-white hidden md:block">
            Add Products
          </Link>
          <NavLink to="/add-to-cart">
            <a className="text-white flex">
              <IoCartOutline className=" text-2xl font-bold mr-3" />
            </a>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
