import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/Efuye-Gela-logo-1.webp";
import erca from "../Images/Erca.jpeg";
import Efuyegela from "./Efuyegela";
import { Link } from "react-router-dom";
function RegForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phonen, setPhonen] = useState();
  const [email, setEmail] = useState();
  const [department, setDepartment] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        fname: firstName,
        lname: lastName,
        mail: email,
        department: department,
        phonen: phonen,
      })
      .then((response) => {
        console.log(response);
      });
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="regform ">
      <div className=" flex justify-center items-center">
        <div className="flex h-screen w-screen justify-center items-center">
          <div className=" flex flex-col justify-center ">
            <form
              onSubmit={handleSubmit}
              className=" bg-gray-950 bg-opacity-10 bg-transparent  max-w-[800px] w-full mx-auto p-8 px-2   rounded-2xl shadow-5xl border  border-opacity-30 "
            >
              <p className="flex justify center mt-4 ml-14">
                <img
                  src={logo}
                  alt="imge"
                  className="flex justify-center mt w-12 h-10"
                />{" "}
                <h1 className="text-center text-2xl flex justify-center font-bold text-gray-100  ">
                  {" "}
                  WELCOME{" "}
                </h1>
              </p>

              <div className="flex flex-col text-gray-100 py-4">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className=" ml-2 mr-2 bg-gray-700 rounded-md mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  />
                </div>
                <div>
                  <lable>Last Name</lable>
                  <input
                    type="text"
                    placeholder="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="ml-3 mr-2 bg-gray-700 roumded-lg mt-2 rounded-md p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  />
                  <br />
                </div>
                <div>
                  <label> Phone Num</label>
                  <input
                    type="phonenumber"
                    placeholder="+2519337248"
                    value={phonen}
                    onChange={(e) => setPhonen(e.target.value)}
                    className="ml-1 mr-2 bg-gray-700 rounded-md mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  />
                  <br />
                </div>

                <div className="flex p-2 px-3  ml-1 mr-2">
                  <div>
                    <label> Email</label>
                    <input
                      type="email"
                      placeholder="mail@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="ml-8 mr-2 bg-gray-700 rounded-md mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    />
                    <br />
                  </div>
                </div>
                <div>
                  <label className="">Department </label>
                  <select
                    className=" bg-gray-700 ml-0  mt-1 py-2 rounded-lg w-48 text-gray-200 focus:bg-gray-800 focus:outline-none"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option>A1</option>
                    <option>B2</option>
                    <option>C3</option>
                  </select>
                  <br />
                </div>
              </div>
              <button
                onClick={() => {
                  toggleModal();
                }}
                type="submit"
                class="form-input my-5 py-2 rounded-full w-full bg-pink-700 hover:rounded-lg "
              >
                Submit
              </button>
              {modal && (
                <div className="modal">
                  <div className="overlays w-screen bg-opacity-30 bg-transparent h-screen top-0 right-0 left-0 bottom-0 fixed bg-orange-300">
                    {" "}
                  </div>
                  <div className="modal-content rounded-md shadow-2xl  absolute top-[40%] left-[38%]  flex justify-center box box-border outline-none w-80 h-42 bg-white ">
                    <div className="grid grid-rows-3 m-none">
                      <h1 className=" flex  font-bold justify-center text-black text-xl">
                        HELLO DANDELIONS
                      </h1>
                      <p className="flex text-black text-lg ">
                        we are glad that you are visiting our company!Have nice
                        time exploring our company.
                      </p>
                      <button
                        onClick={toggleModal}
                        className="flex border font-bold text-lg border-pink-700 hover:bg-white hover:w-24 rounded-lg bg-pink-700 outline-1 w-20 h-7 justify-center ml-24"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegForm;
