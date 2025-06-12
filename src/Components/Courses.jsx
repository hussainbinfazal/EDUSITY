import React from "react";
import program1 from "../assets/program-1.png";
import program2 from "../assets/program-2.png";
import program3 from "../assets/program-3.png";
import program1_icon from "../assets/program-icon-1.png";
import program2_icon from "../assets/program-icon-2.png";
import program3_icon from "../assets/program-icon-3.png";

const Courses = () => {
  return (
    <div id="courses" className=" w-[100vw] h-[60vh] flex justify-center items-center text-white mt-10">
        <div className=" w-[90%] md:w-4/5 h-full flex flex-col justify-between items-center"> 
        {/* Title */}
          <div className="w-full h-1/5 flex justify-center items-center text-xl font-semibold text-black">
            <h2 className="text-3xl 2xl:text-5xl">What We offer</h2>
          </div>
          {/* Cards */}
          <div className="w-full h-3/5 flex justify-center items-center gap-4 px-4 py-4">
          <div className="w-1/3 h-full flex justify-center items-center relative group rounded-lg">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-md"> <img src={program1_icon} alt="" /></div>
          <img src={program1} alt=""
          className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/3 h-full flex justify-center items-center relative group rounded-lg">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-md"> <img src={program2_icon} alt="" /></div>
          <img src={program2} alt=""
          className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/3 h-full flex justify-center items-center relative group rounded-lg">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-md"> <img src={program3_icon} alt="" /></div>
          <img src={program3} alt=""
          className="w-full h-full object-cover rounded-lg" />
          </div>
          </div>
        </div>
      
    </div>
  );
};

export default Courses;
