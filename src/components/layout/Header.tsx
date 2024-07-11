import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-10 w-28" />
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>{" "}
            <li>
              <a href="/products" className="text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-6  ">
          <a href="/manage-product" className="text-white hidden md:block">
            Add Products
          </a>
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
