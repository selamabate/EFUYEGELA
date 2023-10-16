import React from "react";
import logo from "../Images/Efuye-Gela-logo-1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Offers() {
  return (
    <div className=" game  text-orange-500    ">
      <nav className=" nav bg-gray-700 w-screen h-12 flex py-6 items-center  ">
        <img src={logo} alt="img" className=" w-12 h-12 flex justify-evenly " />
        EFUYEGELA
        <input
          type="search"
          className=" w-56 h-6 rounded-lg hover:h-8 flex justify-evenly ml-[950px] md:flex mr-2"
          placeholder="search"
        />
        <FontAwesomeIcon icon={faSearch} />
      </nav>
      <div className="bg-gray-800 w-full h-[1240px] ">
        <div className="flex flex-col items-center py-6  w-[700px] h-[1240px] ml-72 border-t-2 ">
          <h1 className=" text-pink-700 text-xl font-poppins mt-6 mb-6 font-bold">
            EFUYEGELA PUBLISHER
          </h1>
          <p className=" text-white text-base mb-4">
            {" "}
            We connect creators, assist creatives to shape their creative ideas
            to match context, raise funds, find markets for creators, and help
            them create values for their ideas so that they can earn a living
            doing what they love to do and what they're good at.
          </p>

          <h1 className=" text-pink-700 text-xl font-poppins mt-6 mb-6 font-bold">
            EFUYEGELA INTELLIGENCE
          </h1>
          <p className=" text-white text-base mb-4">
            {" "}
            Before embarking on any product development and/or service delivery
            endeavor, a number of user-focused, context-centered facts should be
            considered. As being the only ecosystem mapping agency, we're here
            to provide you with these key essentials intel.
          </p>

          <h1 className=" text-pink-700 text-xl font-poppins mt-6 mb-6 font-bold">
            EFUYEGELA CONSULTANTS
          </h1>
          <p className=" text-white text-base mb-4">
            {" "}
            You're looking for an all-in-one, user-focused, context-centered,
            turn-key solution provider, You've come to the right place.
          </p>

          <h1 className=" text-pink-700 text-xl font-poppins mt-6 mb-6 font-bold">
            EFUYEGELA EVENTS
          </h1>
          <p className=" text-white text-base mb-4">
            Let's say you have your product/service. Now it's time to get it to
            the people. Oops, you don't know why? Well we got you covered.
          </p>

          <h1 className=" text-pink-700 text-xl font-poppins mt-6 mb-6 font-bold">
            EFUYEGELA COLLECTIVES
          </h1>
          <p className=" text-white text-base mb-4">
            {" "}
            An ecosystem is only as strong as the diverse community it has. And
            we are as diverse as it gets.
          </p>

          <h1 className=" text-pink-700 text-xl font-poppins mt-6 mb-6 font-bold">
            EFUYEGELA CONTENT
          </h1>
          <p className=" text-white text-base mb-4">
            {" "}
            Yes, do you want an off-the-shelf product/frameworks that you can
            simply buy and use implement immediately.
          </p>
          <button className=" w-28 h-28 rounded-full bg-pink-700  text-white ml-80 mt-7 ">
            GET STARTED
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offers;
