import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-10 bg-[#9538E2] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-medium rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a
          href="#"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-[0_4px_20px_rgba(139,92,246,0.6)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.7)] transition duration-300 ease-in-out"
        >
          Gadget House
        </a>
      </div>
      <div className="navbar-center hidden font-medium lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="  bg-white rounded-full  w-10 h-10 flex items-center justify-center">
          <FaCartArrowDown className="text-[#3A3A3A]" />
        </a>
        <a className="ml-4 bg-white rounded-full  w-10 h-10 flex items-center justify-center">
          <FaHeart className="text-[#3A3A3A]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
