import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-lg font-medium" href="/">
          Sporting Goods
        </a>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="/products" className="text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <NavLink to="/add-to-cart">
          <a className="text-white flex">
            <IoCartOutline className=" text-2xl font-bold mr-3" />
            <div className="hidden md:block">Add To Cart</div>
          </a>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
