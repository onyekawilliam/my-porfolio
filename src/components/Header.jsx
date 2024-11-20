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
          } md:flex flex-col md:flex-row md:gap-8`}
        >
          <Link
            to="/"
            className="mx-4 my-2 md:my-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-4 my-2 md:my-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="mx-4 my-2 md:my-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="mx-4 my-2 md:my-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="mx-4 my-2 md:my-0 font-semibold hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
