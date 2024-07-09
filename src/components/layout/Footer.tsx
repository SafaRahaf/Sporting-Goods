import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Sport's With Us</h3>
            <p className="text-sm">
              Sports encompass a wide range of physical activities,
              competitions, and games that involve physical exertion, skill, and
              often a competitive aspect. They are played individually or in
              teams, providing entertainment, physical fitness, and social
              interaction. Here are some key points about sports
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">
              Subscribe to get important updates
            </h3>
            <form className="flex flex-col md:flex-row gap-4 md:gap-2">
              <input
                type="email"
                name="email"
                placeholder="Your E-MAIL"
                className="p-2 rounded-md w-full md:w-64"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg md:rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center md:text-left pl-4 ml-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.facebook.com/oppa.melan.391"
                target="_blank"
                className="p-3 rounded-full border-2 border-white"
              >
                <FaFacebook className="text-white text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/safaannona/"
                target="_blank"
                className="p-3 rounded-full border-2 border-white"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCGmcsUCxgGw3ZySEvjU6xZA"
                target="_blank"
                className="p-3 rounded-full border-2 border-white"
              >
                <FaYoutube className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <h4 className="text-lg mb-3">
              <strong className="text-xl font-normal mb-2">Call Us :</strong>
              +91 12345678978
            </h4>
            <h4 className="text-lg">
              <strong className="text-xl font-normal mb-2">Mail Us :</strong>
              sportgoods@outlook.com
            </h4>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <hr className="border-t border-gray-700 mb-8" />
          <div className="flex justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Sport's App. All Rights Reserved
            </p>
            <div className="flex gap-6">
              <NavLink to="#" className="text-lg">
                Privacy Policy
              </NavLink>
              <NavLink to="#" className="text-lg">
                Terms & Conditions
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
