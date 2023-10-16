import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import EfuyeGela1 from "../Images/EfuyeGela1.webp";
import EfuyeGela2 from "../Images/EfuyeGela2-1.webp";
import EfuyeGela3 from "../Images/EfuyeGela3-1.webp";
import logo from "../Images/Efuye-Gela-logo-1.webp";
import Efuye from "../Images/Efuye.webp";
import selam1 from "../Images/1.webp";
import web from "../Images/Web.webp";
import slide from "../Images/Slide6.webp";
import marketing from "../Images/Marketing.webp";
import slide5 from "../Images/Slide5.webp";
import image1 from "../Images/2.webp";
import image2 from "../Images/3.webp";
import image3 from "../Images/4.webp";
import image4 from "../Images/5.webp";

import { Link, NavLink } from "react-router-dom";
function Efuyegela() {
  const handleclick = () => {};
  const navigate = useNavigate();
  return (
    <div className=" text-white w-screen h-screen ">
      <h1 className="w-full  text-5xl  font-bold text-orange-500 flex justify-center top-5 mt-12 sm:mt-6 sm:flex">
        EFUYEGELA
        <img src={logo} alt="image" className=" flex  w-12 h-12 mr-5 "></img>
      </h1>
      <h4 className="w-full text-xl font-bold text-orange-500 flex justify-center">
        SOME SEE A WEED,SOME SEE A SEED.
      </h4>
      <h2 className="flex justify-center font-bold text-2xl top-10 mt-10">
        FOR WE ARE MANY
      </h2>
      <p className="flex justify-center  text-5xl text-pink-700 mt-8">______</p>
      <div className="w-full">
        <div className=" max-w-[1240px] mx-auto flex justify-center px-8  ">
          <img src={EfuyeGela3} alt="imagee" className=" w-80 h-80"></img>
          <img src={EfuyeGela2} alt="imagee" className=" w-80 h-80 "></img>
          <img src={EfuyeGela1} alt="imagee" className=" w-80 h-80"></img>
        </div>
        <h3 className="w-full font-bold flex justify-center text-xl">
          "WE ARE HERE TO DO ONE THING TO CONNECT THE DOTS ... ALL THE DOTS"
        </h3>
      </div>

      <div className="w-full bg-white box box-border shadow-2xl py-12">
        {" "}
        <h1 className="flex justify-center text-3xl text-gray-500 w-full mt-12 ">
          "We don't just make SOLUTIONS, We build SYSTEMS… We build ECOSYSTEMS"
        </h1>
        <h3 className=" text-pink-800 font-bold flex justify-center w-full text-xl mt-9">
          <img src={logo} alt="image" className=" flex  w-14 h-12 mr-5"></img>{" "}
          EFUYEGELA
        </h3>
        <p className="flex justify-center text-sm text-gray-500 ">Publisher</p>
        <img
          src={Efuye}
          alt="image"
          className="flex justify-center mt-3 ml-36"
        ></img>
        <div className="box box-border shadow-2xl  text-white">
          <h2 className=" text-orange-500 flex justify-center text-2xl mt-8 font-bold">
            our pillars
          </h2>
        </div>
        <div className=" max-w-[1240px] w-full mx-auto bg-gray-200 grid md:grid-cols-2  divide-y outline-double ">
          <div>
            <p className="flex font-bold text-6xl mt-8 ml-20 text-pink-700">
              ___
            </p>
            <h1 className=" flex text-4xl text-gray-800 ml-20 mt-8">
              COMMUNITIY
            </h1>
            <p className="  text-gray-800 mt-4 ml-20">
              We believe the pillar of any sustainable industry is the community
              it has inside, around, and outside of it. And it is our mission to
              find, connect, and if need be create these communities.
            </p>
            <p className=" flex ml-20 text-pink-800 mt-5 font-bold">
              {" "}
              R E A D M O R E
            </p>
          </div>
          <div>
            <img
              src={selam1}
              alt="image"
              className="flex w-80 h-80 ml-[40px]"
            ></img>
          </div>
        </div>
        <div className=" max-w-[1240px] w-full mx-auto bg-white grid md:grid-cols-2  divide-y outline-double ">
          <div>
            <img
              src={selam1}
              alt="image"
              className="flex w-80 h-80 ml-[40px]"
            ></img>
          </div>
          <div>
            <p className="flex font-bold text-6xl mt-8 ml-20 text-pink-700">
              ___
            </p>
            <h1 className=" flex text-4xl text-gray-800 ml-20 mt-8">CONTEXT</h1>
            <p className="  text-gray-800 mt-4 ml-20">
              In any of our endeavors, we keep our end-users’/clients’ needs at
              first. And we consider any solution provided without taking the
              user in mind is a waste.
            </p>
            <p className=" flex ml-20 text-pink-800 mt-5 font-bold">
              {" "}
              R E A D M O R E
            </p>
          </div>
        </div>
        <div className=" max-w-[1240px] w-full mx-auto bg-gray-200 grid md:grid-cols-2  divide-y outline-double ">
          <div>
            <p className="flex font-bold text-6xl mt-8 ml-20 text-pink-700">
              ___
            </p>
            <h1 className=" flex text-4xl text-gray-800 ml-20 mt-8">CONTENT</h1>
            <p className="  text-gray-800 mt-4 ml-20">
              As the last-mile delivery, we provide our end-users/clients with
              the content they want may it be data, market research, service, or
              product.
            </p>
            <p className=" flex ml-20 text-pink-800 mt-5 font-bold">
              {" "}
              R E A D M O R E
            </p>
          </div>
          <div>
            <img
              src={web}
              alt="image"
              className="flex w-80 h-80 ml-[40px]"
            ></img>
          </div>
        </div>
        <h3 className=" text-orange-400 flex justify-center w-full mt-20 font-poppins font-bold text-2xl ">
          Who we are
        </h3>
        <h1 className=" text-gray-600 text-5xl w-full flex justify-center mt-10">
          {" "}
          FALL IN LOVE WITH OUR SERVICES
        </h1>
        <p className="flex font-bold font-poppins text-6xl mt-8 justify-center text-pink-700">
          _____
        </p>
        <img
          src={slide}
          alt="image"
          className=" mt-10 flex justify-center ml-10 "
        />
        <h3 className=" flex justify-center font-poppins font-bold text-orange-400 mt-10">
          OUR OFFERINGS
        </h3>
        <div className="  max-w-[1180px]  mx-auto bg-white grid grid-cols-2 mt-8  ">
          <div className="flex px-8 ">
            {" "}
            <img
              src={marketing}
              alt="image"
              className=" flex w-28 h-28 "
            />{" "}
            <div>
              <h1 className=" flex px-5 flex-row text-2xl w-full text-pink-700 font-poppins  font-bold">
                Efuyegela Publisher
              </h1>
              <p className=" flex ml-4 justify-center  text-sm text-gray-600 mt-5  ">
                We connect creators, assist creatives to shape their creative
                ideas to match context, raise funds, find markets for creators,
                and help them create values for their ideas so that they can
                earn a living doing what they love to do and what they're good
                at.
              </p>
            </div>
          </div>
          <div className="flex  ">
            {" "}
            <img src={image1} alt="image" className=" flex w-28 h-28 " />{" "}
            <div>
              <h1 className=" flex px-5 flex-row text-2xl w-full text-pink-700 font-poppins  font-bold">
                Efuyegela Intelligence
              </h1>
              <p className=" flex ml-4 justify-center  text-sm text-gray-600 mt-5  ">
                Before embarking on any product development and/or service
                delivery endeavor, a number of user-focused, context-centered
                facts should be considered. As being the only ecosystem mapping
                agency, we're here to provide you with these key essentials
                intel.
              </p>
            </div>
          </div>
        </div>
        <div className="  max-w-[1180px]  mx-auto bg-white grid grid-cols-2 mt-8  ">
          <div className="flex px-8 ">
            {" "}
            <img src={image2} alt="image" className=" flex w-28 h-28 " />{" "}
            <div>
              <h1 className=" flex px-5 flex-row text-2xl w-full text-pink-700 font-poppins  font-bold">
                Efuyegela Consultants
              </h1>
              <p className=" flex ml-4 justify-center  text-sm text-gray-600 mt-5  ">
                You're looking for an all-in-one, user-focused,
                context-centered, turn-key solution provider, You've come to the
                right place.
              </p>
            </div>
          </div>
          <div className="flex  ">
            {" "}
            <img src={image3} alt="image" className=" flex w-28 h-28 " />{" "}
            <div>
              <h1 className=" flex px-5 flex-row text-2xl w-full text-pink-700 font-poppins  font-bold">
                Efuyegela Events
              </h1>
              <p className=" flex ml-4 justify-center  text-sm text-gray-600 mt-5  ">
                Let's say you have your product/service. Now it's time to get it
                to the people. Oops, you don't know why? Well we got you
                covered.
              </p>
            </div>
          </div>
        </div>
        <div className="  max-w-[1180px]  mx-auto bg-white grid grid-cols-2 mt-8  ">
          <div className="flex px-8 ">
            {" "}
            <img src={selam1} alt="image" className=" flex w-28 h-28 " />{" "}
            <div>
              <h1 className=" flex px-5 flex-row text-2xl w-full text-pink-700 font-poppins  font-bold">
                Efuyegela Collectives
              </h1>
              <p className=" flex ml-4 justify-center  text-sm text-gray-600 mt-5  ">
                An ecosystem is only as strong as the diverse community it has.
                And we are as diverse as it gets.
              </p>
            </div>
          </div>
          <div className="flex  ">
            {" "}
            <img src={image4} alt="image" className=" flex w-28 h-28 " />{" "}
            <div>
              <h1 className=" flex px-5 flex-row text-2xl w-full text-pink-700 font-poppins  font-bold">
                Efuyegela Content
              </h1>
              <p className=" flex ml-4 justify-center  text-sm text-gray-600 mt-5  ">
                Yes, do you want an off-the-shelf product/frameworks that you
                can simply buy and use implement immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="  ">
          <p className="font-poppins text-pink-700 font-bold text-5xl flex justify-center mt-10 te">
            _____
          </p>
          <h1 className=" text-orange-400 text-2xl font-bold font-poppins flex justify-center mt-8">
            OUR PROJECTS
          </h1>
          <img
            src={slide5}
            alt="image"
            className=" flex justify-center ml-8 mt-10 mb-8"
          />
        </div>
        <div className=" flex max-w-[1240px] mt-10  "></div>
        <h1 className=" flex justify-center text-gray-500 text-3xl mt-10">
          "We were many.......... We are many....................& We will be
          infinitely many more!"
        </h1>
        <h3 className=" text-pink-800 font-bold flex justify-center w-full text-xl mt-9">
          <img src={logo} alt="image" className=" flex  w-14 h-12 mr-5"></img>{" "}
          EFUYEGELA
        </h3>
        <p className="flex justify-center text-sm text-gray-500 ">
          Collectives
        </p>
      </div>
      <div className=" bg-white">
        <h1 className=" bg-white text-orange-400 text-2xl font-bold font-poppins flex justify-center">
          WE ARE
        </h1>
        <div className="flex flex-row justify-center bg-white mt-10 ">
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/CA-1.png?fit=200%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/D5_Logo.png?fit=200%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/118411235_2814827395463801_5352575353090561041_o.png?fit=200%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/IMG_20200822_111801.jpg?fit=200%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/New-Logo-Recovered.png?fit=200%2C150&ssl=1"
            alt="image"
            className="flex "
          />
        </div>
        <h1 className=" bg-white text-orange-400 text-2xl font-bold font-poppins flex justify-center mt-10">
          OUR PARTNERS
        </h1>
        <div className="flex flex-row justify-center bg-white mt-10">
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/Copy-of-ATTSVE-LOGO-high-res-853x1024-1.jpg?resize=150%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/Copy-of-IDRC-logo.high-res.Transparent-1024x223-1.jpg?resize=150%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/deutsche-gesellschaft-fur-internationale-zusammenarbeit.jpg?resize=150%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/EBYIlFyXoAAY8SX.jpg?resize=150%2C150&ssl=1"
            alt="image"
            className="flex mr-16"
          />
          <img
            src="https://i0.wp.com/efuyegela.com/wp-content/uploads/2021/03/McGill-Faculty-of-Education.png?resize=150%2C150&ssl=1"
            alt="image"
            className="flex "
          />
        </div>
      </div>
      <div className="  max-h-[1240px] mb-20  relative bg-fixed ">
        <h1 className="flex justify-center text-4xl font-bold text-white  mt-14 ">
          WITH US LIFE IS BETTER
        </h1>
        <p className="flex justify-center text-gray-300 text-xl mt-7">
          Let's Fall together, and Rise together.{" "}
        </p>
        <button
          onClick={() => {}}
          className=" flex justify-center w-72   text-center h-10 bg-pink-700 text-lg font-poppins ml-[550px] mt-14"
        >
          LET'S HAVE BUNA!
        </button>
        <div className=" grid grid-cols-3 mt-14 ml-24 mr-10">
          <div className="mr-3">
            <h1 className=" font-poppins font-bold">Our adress </h1>
            <p className=" flex text-xs text-gray-300 mt-4 ">
              We're everywhere so don't bother we'll come to you. Addis Ababa,
              Ethiopia
            </p>
          </div>
          <div className="mr-3 ml-6">
            <h1 className=" font-poppins font-bold">Mail</h1>
            <p className=" flex text-xs text-gray-300 mt-4 ">
              contactefuyegela@gmail.com, info@efuyegela.com
            </p>
          </div>
          <div>
            <h1 className=" font-poppins font-bold">Phone number</h1>
            <p className=" flex text-xs text-gray-300 mt-4 ">
              +251 91 285 0202
            </p>
          </div>
        </div>
      </div>
      <div className="footer w-screen relative bg-fixed h-[280px] bg-opacity-4 ">
        <div className=" flex ml-8 mt-12">
          <h4 className=" flex ml-4 mt-8 font-poppins ">
            <p className=" flex font-poppins font-bold text-blue-400  px-4">
              |
            </p>
            Our Visitor Count
          </h4>
        </div>
        <div className=" flex ml-28 mt-7">
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/0.gif"
            alt="0"
            className=" flex px-1 "
          ></img>
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/0.gif"
            alt="0"
            className="flex px-1 "
          />
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/3.gif"
            alt="3"
            className=" flex px-1"
          ></img>
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/2.gif"
            alt="2"
            className="flex px-1 "
          ></img>
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/5.gif"
            alt="5"
            className="flex px-1 "
          ></img>
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/6.gif"
            alt="6"
            className=" flex px-1"
          ></img>
          <img
            src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/styles/image/bbldotg/4.gif"
            alt="4"
            className="flex px-1"
          ></img>
        </div>
        <div>
          <table className=" ml-24 mt-8 w-56">
            <tr className=" flex text-center mb-6  text-gray-400 border border-r-0 border-l-0 border-t-0 ">
              <img
                className=" flex text-center ml-12"
                src=" https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/counter/mvcvisit.png"
              />
              Visit Today : 11
            </tr>
            <tr className=" flex text-center mb-6  text-gray-400 border border-r-0 border-l-0 border-t-0 ">
              <img
                className=" flex text-center ml-12"
                src="https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/counter/mvcyesterday.png"
              />
              Visit Yesterday : 25
            </tr>
            <tr className=" flex text-center  text-gray-400 border border-r-0 border-l-0 border-t-0 ">
              <img
                className=" flex text-center ml-12"
                src=" https://efuyegela.com/wp-content/plugins/mechanic-visitor-counter/counter/mvctotal.png"
              />
              Total Visit : 32564
            </tr>
          </table>
        </div>
      </div>
      <div className=" bg-black w-screen">
        <p className=" flex justify-center text-white  text-sm">
          copyright-Efuyegela 2023
        </p>
      </div>
    </div>
  );
}

export default Efuyegela;
