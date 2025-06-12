import React from 'react'
import arrow from '../assets/dark-arrow.png'
import hero from '../assets/hero.png'
import { Link } from "react-scroll" 
const Hero = () => {
  return (
    <nav>
    <div id='home' className='hero w-[100vw] h-[100vh] bg-blue-500 flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url('${hero}')`}}>
       <div className="absolute inset-0 bg-blue-900 opacity-60 w-full h-[100vh] "></div>
      
      <div className="relative z-10 flex flex-col w-[60%] items-center justify-center">
        <h2 className="text-[30px] lg:text-7xl font- text-white pb-2 md:pb-4 text-center">We Ensure better education for a better world </h2>

        <p className="text-[10px] lg:text-lg xl:text-lg text-white text-center ">Our cuttng-edge circuillum is designed to empower with nowledge, skills, and</p>
        <p className="text-[10px] lg:text-lg text-white text-center">experiences needed to excel in the dynamic feld of education</p>
        <button className='text-black  w-[160px] h-[40px] bg-white flex justify-center items-center gap-2 rounded-full mt-6 hover:bg-blue-500 hover:scale-105 outline-none boreder-none'><Link to='about' smooth={true} duration={1000} offset={-80} className="cursor-pointer  flex h-full jsutify-center items-center hover:text-white gap-2"> Explore more { <img src={arrow} alt="arrow_png" className='w-[20px] pt-1' /> }</Link></button>
      </div >
    </div>
    </nav>
  )
}

export default Hero
