import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="font-bold text-[20px]">William.</h1>

        {/* Hamburger menu for smaller screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-[70px] left-0 w-full bg-white md:w-auto shadow-md md:shadow-none`}
        >
          <Link
            to="/"
            className="block text-center py-2 md:py-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-center py-2 md:py-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block text-center py-2 md:py-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="block text-center py-2 md:py-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="block text-center py-2 md:py-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
