import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import map from "../Images/map.jpg";
import {
  faArrowAltCircleRight,
  faArrowCircleLeft,
  faPerson,
  faPersonCircleMinus,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
function Select() {
  const navigatee = useNavigate();
  return (
    <div className=" w-screen h-screen  flex justify-center mt-44  ">
      <div className=" grid grid-cols-2 px-10">
        <div className=" box w-56 h-80 bg-white border-collapse rounded-md shadow-lg mr-20 py-10">
          <i>
            <FontAwesomeIcon
              icon={faUsers}
              className=" w-56 h-20 flex justify-evenly"
            />
          </i>
          <p className=" text-pink-700 text-lg mt-6 flex justify-center">
            Hello!welcome to our company. please fill out the form.
          </p>
          <button
            onClick={() => navigatee("/regform")}
            className="border-pink-700  w-52 h-8 flex text-lg mt-8 border outline-1 ml-2 bg-pink-700 hover:bg-white hover:font-bold justify-center"
          >
            Form
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mt-2" />
          </button>
        </div>
        <div className=" box w-56 h-80 rounded-md bg-white border shadow-lg ml-20 py-10">
          <i>
            <FontAwesomeIcon
              icon={faUser}
              className=" w-56 h-20 flex justify-evenly"
            />
          </i>
          <p className=" text-pink-700 text-lg mt-6 flex justify-center">
            Hello! Have fun working.
          </p>
          <button
            onClick={() => navigatee("/login")}
            className="border-pink-700  w-52 h-8 flex text-lg mt-14 border outline-1 ml-2 bg-pink-700 hover:bg-white hover:font-bold justify-center"
          >
            LOGIN
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mt-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Select;
