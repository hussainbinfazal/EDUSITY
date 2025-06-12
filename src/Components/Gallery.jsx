import React from "react";
import arrow from "../assets/white-arrow.png";
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";

const Gallery = () => {
    return (
        <div id="campus" className="w-full h-[320vh] 2xl:[220vh] md:h-[400vh] lg:h-[90vh] mx-auto flex justify-center items-start">
      <div className="w-[90%] h-[90%] lg:h-4/5 flex flex-col justify-between items-center gap-4">
        {/* Title */}
        <div className="w-full h-[10%] lg:h-1/5 flex flex-col justify-center items-center font-semibold text-black">
          <h2 className="text-md">GALLERY</h2>
          <h2 className="text-3xl mt-3 2xl:text-5xl">Campus Photos</h2>
        </div>
        {/* Images Section */}
        <div className="w-full h-4/5 lg:h-3/5 flex flex-col lg:flex-row md:justify-evenly lg:justify-center items-center gap-2 lg:gap-2 px-4 py-4 overflow-hidden">
        <img
          src={gallery1}
          alt=""
          className="w-[85%] lg:w-[25%]  h-full md:h-[100%] lg:h-full object-cover rounded-lg"
        />
        <img
          src={gallery2}
          alt=""
          className="w-[85%] lg:w-[25%] h-full object-cover rounded-lg md:h-[100%]] lg:h-full"
        />
        <img
          src={gallery3}
          alt=""
          className="w-[85%] lg:w-[25%] h-full object-cover rounded-lg md:h-[100%] lg:h-full"
        />
        <img
          src={gallery4}
          alt=""
          className="w-[85%] lg:w-[25%] h-full object-cover rounded-lg md:h-[100%] lg:h-full"
        />
      </div>
      {/* Button */}
      <div className="w-full h-[10%] md:h-[10%] lg:h-1/5 flex justify-center items-center ">
        <button className="text-white  w-[190px] h-[50px]  hover:bg-blue-500 hover:scale-105 bg-blue-900 flex justify-center items-center gap-2 rounded-full font-medium text-lg">See more here <img src={arrow} alt="arrow_png" className="w-[20px] pt-[0.5px] text-white" /></button>
      </div>
      </div>
      
    </div>
  );
};

export default Gallery;
