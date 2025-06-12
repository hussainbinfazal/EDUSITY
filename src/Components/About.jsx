import React from 'react'
import about from '../assets/about.png'
import play from '../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div id ='about' className='w-full h-[80vh] lg:h-[90vh] mx-auto flex justify-center items-center'>
        <div className='ParentDiv w-[90%] md:w-4/5 h-4/5 flex  justify-between items-center gap-4'>
        {/* image video section */}
        <div className='w-[60%] md:w-[55%] h-[90%] flex justify-start items-center px-4 md:px-4 relative'>
            <img src={about} alt=""
            className="rounded-md w-full h-full " c />
            <img src={play} alt="" className='absolute  md:w-[80px] h-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-11' onClick={()=>setPlayState(true)}/>
        </div  >
        {/* about us section */}
        <div className='w-[40%] lg:w-[60%] h-4/5 lg:h-full xl:h-full flex flex-col justify-center items-start md:py-4 md:px-2 mr-8 md:mr-10'>
            <h1 id='abouttext1' className='text-xs md:text-xl lg:text-lg xl:text-lg font-semibold text-blue-900 2xl:text-xl '>ABOUT UNIVERSITY</h1>
            <h1 id='abouttext2' className='text-base sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold text-black pr-16 leading-snug 2xl:mt-4'>Nurturing Tomorrow's Leaders  Today</h1>
            <p id='abouttext3' className='text-[9px] sm:text-[14px] md:text-[15px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px] mt-2 2xl:mt-10'>Embark on a transformative educational journey with our university's comprehensive educattion programs. Our cutting edge-circuillum is designed to empower sudents with the nowledge ,skills and experiences needed to excel in the dynamic field of education</p>
            <p id='abouttext4' className='text-[9px] sm:text-[14px] md:text-[15px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px] mt-2'>With a focus on innovation ,hands-on learning ,and personalized mentorship,our programs prepare aspiring educators to make a meaningful impact in classrooms ,schools and communities.</p>
            <p id='abouttext5' className='text-[9px] sm:text-[14px]  md:text-[15px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px] mt-2'>Whether you aspire to become a teacher,administrator,couselor,or educational leader,our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
        </div>
      
    </div>
  )
}

export default About
