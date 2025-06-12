import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu-icon.png";
import cross from "../assets/cross_icon.png";
import { Link } from "react-scroll"; 

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [imageSrc, setImageSrc] = useState(menu);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window,scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  function handleToggle(img) {
    console.log("button is working");
    let currentImg = imageSrc === menu ? cross : menu;
    setImageSrc(currentImg);
  }

  return (
    <div className={`header w-full h-[70px] flex justify-center items-center fixed top-0 z-20  ${ sticky? "bg-blue-900" : "bg-transparent"} pl-8` }>
      <div className="flex justify-between items-center lg:w-4/5 w-full h-full">
        <img src={logo} alt="logo" className="h-[40px] ml-4 mt-2" />
        <div className="menu-icon">
          <img
            src={imageSrc}
            onClick={(e) => handleToggle(e.target)}
            alt=""
            className="block sm:block lg:hidden xl:hidden 2xl:hidden w-[40px] h-[40px] cursor-pointer z-20 px-1 py-1 mr-16 sm:mr-32 md:mr-40  "
          />
        </div>
        {imageSrc === menu ?  "" : <div className="w-[12rem] sm:w-[15rem] lg:hidden xl:hidden 2xl:hidden p-4  h-screen absolute right-0 top-0 bg-blue-600 md:p-4 flex flex-col gap-5  z-100">
          <img src={imageSrc}  alt="" onClick={(e) => handleToggle(e.target)} className="h-[40px] w-[40px] cursor-pointer text-white "/>
          <nav>
          <ul className="flex flex-col justify-between items-center  text-white font-medium list-none gap-4">
            <li className="">
              <Link to='home' smooth={true} duration={1000} offset={-80} className="cursor-pointer">Home</Link>
            </li>
            <li className="">
            <Link to='courses' smooth={true} duration={1000} offset={-80} className="cursor-pointer">Programs</Link>
            </li>
            <li className="">
            <Link to='about' smooth={true} duration={1000} offset={-80} className="cursor-pointer">About</Link>
            </li>
            <li className="">
            <Link to='campus' smooth={true} duration={1000} offset={-100} className="cursor-pointer">Campus</Link>
            </li>
            <li className="">
            <Link to='testimonial' smooth={true} duration={1000} offset={-80} className="cursor-pointer">Testimonial</Link>
            </li>
            <button className="bg-white text-black px-4 py-2 w-[120px] h-[80%] font-medium rounded-full cursor-pointer hover:bg-blue-900 ">
            <Link to='contact' smooth={true} duration={1000} offset={0} className="cursor-pointer">Contact Us</Link>
            </button>
          </ul>
          </nav>
          </div>}
        <div
          className='hidden h-full justify-center items-center sm:hidden lg:block xl:block 2xl:block'
        >
          <nav className=" w-full h-full">
          <ul className="flex justify-between items-center w-full h-full text-white font-medium list-none gap-4">
            <li className=" ">
              <button className="hover:scale-125"><Link to='home' smooth={true} duration={1000} offset={0} className="cursor-pointer hover:text-blue-500">Home</Link></button>
            </li>
            <li className="">
              <button className="hover:scale-125"><Link to='courses' smooth={true} duration={1000} offset={-80} className="cursor-pointer  hover:text-blue-500">Programs</Link></button>
            </li>
            <li className="">
              <button className="hover:scale-125"><Link to='about' smooth={true} duration={1000} offset={-80} className="cursor-pointer  hover:text-blue-500">About Us</Link></button>
            </li>
            <li className="">
              <button className="hover:scale-125"><Link to='campus' smooth={true} duration={1000} offset={-100} className="cursor-pointer  hover:text-blue-500">Campus</Link></button>
            </li>
            <li className="">
              <button className="hover:scale-125"><Link to='testimonial' smooth={true} duration={1000} offset={-80} className="cursor-pointer  hover:text-blue-500">Testimonial</Link></button>
            </li>
            <button className="bg-white text-black px-4  w-[120px] h-[80%] font-medium rounded-full hover:bg-blue-500 hover:scale-90 hover:text-white">
            <Link to='contact' smooth={true} duration={1000} offset={-80} className="cursor-pointer">Contact Us</Link>
            </button>
          </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
