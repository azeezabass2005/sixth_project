import React from 'react'
import { ffour } from '../assets'

const Lounge = () => {
  return (
    <div className='flex w-full md:flex-row flex-col bg-[#ebf3f2] relative'>
      <div className='md:w-[60%]'>
          <img src={ffour} alt="" className='md:w-[100%]'  />
      </div>
      <div className='sm:p-20 p-5 flex justify-center  items-start flex-col md:w-[40%]'>
          <h1 className={`text-[1.8rem] sm:text-[2.5rem] text-[#0b685b]`}>
              Lounge
          </h1>
          <p className={`text-[#1f9c8c] mb-2`}>
              from $189
          </p>
          <p className='text-[#106b5f] text-[20px] max-w-[420px] sm:leading-[35px]'>
            From bistro tables to casual seating, furnish inpiring collaboration and breakout spaces with our line of lounge furniture.
          </p>
          <button className='p-3 xs:mt-5 mt-1 md:p-5 bg-[var(--primary-color)] hover:bg-[var(--deep-primary-color)] rounded-[5px] text-[#07303a]'>
              <a href="#">
                  Design My Office
              </a>
          </button>
      </div>
      {/* <div className='sm:p-20 sm:hidden flex justify-center  items-start flex-col md:w-[40%] absolute xs:p-10 p-5 bg-[#82d4da7c] w-full h-[100%] bottom-[1%]'>
          <h1 className={`xs:text-[1.8rem] text-[1.7rem] sm:text-[2.5rem] text-[#0b685b]`}>
              Lounge
          </h1>
          <p className={`xs:text-[#1f9c8c] text-[#11554c] xs:mb-2`}>
              from $189
          </p>
          <p className='xs:text-[#106b5f] text-[#073841] xs:text-[20px] max-w-[420px] sm:leading-[35px]'>
              From bistro tables to casual seating, furnish inpiring collaboration and breakout spaces with our line of lounge furniture.
          </p>
          <button className='p-3 xs:mt-5 mt-1 md:p-5 bg-[var(--primary-color)] hover:bg-[var(--deep-primary-color)] rounded-[5px] text-[#07303a]'>
              <a href="#">
                  Design My Office
              </a>
          </button>
      </div> */}
  </div>
  )
}

export default Lounge