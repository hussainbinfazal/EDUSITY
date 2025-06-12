import React from "react";
import video from "../assets/college-video.mp4";
import { ImCross } from "react-icons/im";

const Videoplayer = ({ playState, setPlayState }) => {
  return (
    <div className={`${playState ? "" : "hidden"} fixed inset-0  w-full h-[100vh] bg-black flex justify-center items-center`}>
      <div className="w-4/5 h-4/5 bg-blue-600 flex justify-center items-center relative">
      <div className="absolute top-4 right-4 z-20 cursor-pointer text-15" onClick={() => setPlayState(false)}>
      <ImCross className="text-white" />
      </div>
        <video src={video} autoPlay muted controls className="w-4/5 py-2 rounded-md"></video>
      </div>
    </div>
  );
};

export default Videoplayer;
