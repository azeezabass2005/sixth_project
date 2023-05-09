import React from 'react'
import { ffour } from '../assets'

const LoungeSm = () => {
  return (
    <div>
    <img
    src={ffour}
    alt="home furniture "
    className="md:w-[100%] transition ease-in-out delay-150"
    />
    <div className="sm:p-20 sm:hidden flex justify-center  items-start flex-col md:w-[40%] absolute xs:p-10 p-5 bg-[#82d4da7c] w-full h-[100%] bottom-[1%]">
      <h1
        className={`xs:text-[1.8rem] text-[1.7rem] sm:text-[2.5rem] text-[#0b685b]`}
      >
        Lounge
      </h1>
      <p className={`xs:text-[#1f9c8c] text-[#11554c] xs:mb-2`}>from $189</p>
      <p className="xs:text-[#106b5f] text-[#073841] xs:text-[20px] max-w-[420px] sm:leading-[35px]">
      From bistro tables to casual seating, furnish inpiring collaboration and breakout spaces with our line of lounge furniture.
      </p>
      <button className="p-3 xs:mt-5 mt-1 md:p-5 bg-[var(--primary-color)] hover:bg-[var(--deep-primary-color)] rounded-[5px] text-[#07303a]">
        <a href="#">Explore Lounge</a>
      </button>
    </div>
  </div>
  )
}

export default LoungeSm