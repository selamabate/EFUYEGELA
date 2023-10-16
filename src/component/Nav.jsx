import React, { useState } from "react";
import logo from "../Images//Efuye-Gela-logo-1.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import menu from "../Images/menu.jpg";
import close from "../Images/close.png";

function Nav() {
  const navigatee = useNavigate();
  const [toggle, settoggle] = useState(false);
  return (
    <nav
      className="w-full h-8 flex py-6 bg-gray-600
  justify-between items-center navbar"
    >
      <img src={logo} alt="efuyegela" className=" w-[124px ] h-[32px]" />
      <h1 className=" text-orange-400 text-xl">EFUYEGELA</h1>
      <ul
        className=" list-none sm:flex hidden
      justify-end items-center flex-1"
      >
        <li
          className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mr-10 "
        >
          <Link to="#">HOME</Link>
        </li>
        <li
          className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mr-10 "
        >
          <Link to="/offers">OFFERS</Link>
        </li>
        <li
          className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mr-10 "
        >
          <Link to="/regform">VISIT</Link>
        </li>
        <li
          className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mr-0 "
        >
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
      <div className=" sm:hidden flex flex-1 items-center">
        <img
          src={toggle ? close : menu}
          className=" w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-500 bg-gradient-to-t 
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  `}
        >
          <ul
            className=" list-none flex flex-col
      justify-end items-center flex-1"
          >
            <li
              className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mb-4 "
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mb-4 "
            >
              <Link to="/gamespace">gamespace</Link>
            </li>
            <li
              className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mb-4 "
            >
              <Link to="/regform">visitor</Link>
            </li>
            <li
              className=" font-poppins font-normal cursor-pointer text-[16px]
             text-white mb-0 "
            >
              <Link to="/login">login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
