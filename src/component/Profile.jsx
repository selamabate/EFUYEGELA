import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Images/Efuye-Gela-logo-1.webp";
import React from "react";

function Profile() {
  return (
    <div>
      <nav className=" nav bg-gray-700 w-screen h-12 flex py-6 items-center  ">
        <img src={logo} alt="img" className=" w-12 h-12 flex justify-evenly " />
        EFUYEGELA
        <FontAwesomeIcon
          icon={faUser}
          className=" w-56 h-6 rounded-lg hover:h-8 flex justify-evenly ml-[950px] mr-2"
        />
      </nav>
      <div className="clockin flex justify-center border w-80 h-52 shadow-xl bg-white">
        dhwishfwiufhwifhcn
      </div>
    </div>
  );
}

export default Profile;
