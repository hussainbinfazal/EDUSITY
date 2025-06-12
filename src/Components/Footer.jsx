import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[10vh]  flex justify-center items-center'>
      <div className='w-[90%] h-full flex justify-between items-center border-t-2 border-black'>
        <div className='font-semibold text-xs'>© 2023 EDUSITY. All Rights Reserved</div>
        <div className='flex space-x-4 font-semibold '>
            <h3 className='text-xs'>Terms of Services</h3>
            <h3 className='text-xs'>Privacy Policy</h3>
        </div>

      </div>
    </div>
  )
}

export default Footer
