import React from 'react'
import { fthree } from '../assets'

const Conference = () => {
  return (
    <div className='flex w-full md:flex-row flex-col-reverse bg-[var(--primary-color)] relative'>
      <div className='sm:p-20 p-5 flex justify-center  items-start flex-col md:w-[40%]'>
          <h1 className={`text-[1.8rem] sm:text-[2.5rem] text-[#d0ebe7]`}>
              Conference
          </h1>
          <p className={`text-[#b5ece5] mb-2`}>
              from $795
          </p>
          <p className='text-[#e3f5f2] text-[20px] max-w-[437px] sm:leading-[35px]'>
              Collaborate in style with Branch conference tables and chairs. Trusted by startups, co-working spaces and major enterprises.
          </p>
          <button className='p-3 xs:mt-5 mt-1 md:p-5 text-[#0a3d49] hover:bg-[var(--deep-primary-color)] rounded-[5px] bg-[#dbeeec]'>
              <a href="#">
                  Explore Conference
              </a>
          </button>
      </div>
      {/* <div className='sm:p-20 sm:hidden flex justify-center  items-start flex-col md:w-[40%] absolute xs:p-10 p-5 bg-[#82d4da7c] w-full h-[100%] bottom-[1%]'>
          <h1 className={`xs:text-[1.8rem] text-[1.7rem] sm:text-[2.5rem] text-[#0b685b]`}>
              Conference
          </h1>
          <p className={`xs:text-[#1f9c8c] text-[#11554c] xs:mb-2`}>
              from $795
          </p>
          <p className='xs:text-[#106b5f] text-[#073841] xs:text-[20px] max-w-[420px] sm:leading-[35px]'>
              Collaborate in style with Branch conference tables and chairs. Trusted by startups, co-working spaces and major enterprises.
          </p>
          <button className='p-3 xs:mt-5 mt-1 md:p-5 text-[#0a3d49] hover:bg-[var(--deep-primary-color)] rounded-[5px] bg-[#dbeeec]'>
              <a href="#">
                  Explore Conference
              </a>
          </button>
      </div> */}
      <div className='md:w-[60%]'>
          <img src={fthree} alt="" className='md:w-[100%]'  />
      </div>
  </div>
  )
}

export default Conference