import React from "react";
import dandelion from "../Images/dandelion_clock.jpg";
import Efuyegela from "./Efuyegela";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Login() {
  const handleclick = () => {
    console.log("clicked");
  };
  return (
    <div className=" login h-screen w-screen relative overflow-hidden ">
      <div className="w-96 h-96 bg-white bg-opacity-10 flex justify-center relative z-2 rounded-2xl shadow-5xl border  border-opacity-30 mt-32 ml-[500px] backdrop-filter backdrop-blur-sm">
        <form className="flex flex-col justify-evenly h-full">
          <input
            type="text"
            placeholder="username"
            className=" font-poppins text-black bg-none bg-transparent focus:outiline-none border border-r-0 border-t-0 border-l-0 tracking-wide"
          />
          <input
            type="password"
            placeholder="password"
            className=" font-poppins text-black bg-none bg-transparent focus:outiline-none border border-r-0 border-t-0 border-l-0 tracking-wide"
          />
          <div className="text-xs text-white font-poppins justify-evenly">
            <input type="checkbox" /> Remember
          </div>
          <button
            type="submit "
            className="flex justify-center form-input my-5 py-2 rounded-full w-full bg-pink-700 hover:rounded-lg"
            onClick={handleclick}
          >
            {" "}
            Login
          </button>
          <div className="text-xs text-white font-poppins flex justify-center hover:underline">
            <a href="/">Forgot Password</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
