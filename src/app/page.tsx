import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  return (
    <div className="lg:w-[210vh] lg:h-[90vh] w-[120vh] h-[80vh] mx-auto overflow-hidden px-4 py-2 lg:flex justify-center  ">
      <div className="xl:w-4/5 lg:w-3/5 w-2/4 h-screen md:flex flex-row justify-center items-center lg:mx-auto">
        <div className="bg-blue-200 bg-opacity-40 xl:w-[120vh] lg:w-[100vh] xl:h-[80vh] lg:h-[80vh] w-[40vh] h-[70vh] mb-12 mt-6 z-100 fixed">
      
     
          <div className="xl:w-[60vh] lg:w-[53vh] xl:h-[65vh] lg:h-[60vh] w-[25vh] h-[60vh] px-4 py-2 m-11 flex flex-col justify-center items-center">
            <h1 className="lg:text-3xl text-2xl font-semibold lg:font-bold text-center ">Welcome To Mitigately</h1>
            <p className="text-base text-black text-opacity-75 text-center">Login to access your loan account easily</p>
            <div className="flex flex-col mt-4 px-4 py-2" >
              <form action="">
                <label  htmlFor="">Email

                  </label>
                  <div className="flex justify-center items-center">

                <input
                
                type="email"
                name="Email"
                
                placeholder="Enter your email"
                className="border-2 border-blue-200 xl:w-full lg:w-full w-[35vh] px-7 py-1 rounded-md focus:outline-none "
                />
                <MdEmail className="absolute lg:left-[85px] left-[15px] text-blue-900"/>
                </div>
                <label  htmlFor="">Password

                  </label>
                  <div className="flex justify-center items-center" >

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border-2 border-blue-200 xl:w-full lg:w-full w-[35vh] px-7 py-1 rounded-md focus:outline-none "
                  />
                  <RiLockPasswordFill className="absolute lg:left-[85px] left-[15px] text-blue-900"/>
                  </div>
                  <div className="flex justify-center items-center">
                  <button className="xl:w-[30vh] lg:w-[20vh] w-[20vh] px-4 py-2 mt-6 text-center bg-blue-900 text-white rounded-md hover:bg-blue-700 ">
                  Login
                </button>
                  </div>
                 
              </form>
            </div>
          </div>
        </div>
        <div className="lg:visible invisible">

        <div className="bg-[#ffffff] w-[60vh] h-[80vh] rounded-tl-[15vh] rounded-bl-[15vh] bottom-[61px] z-10 absolute right-[120px]">
       <div className="w-[50vh] h-[50vh] flex justify-center items-center mt-20 ml-10">

       <h1 className="text-4xl drop-shadow-md font-bold text-center text-blue-900 ">Mitigately</h1>
       </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
