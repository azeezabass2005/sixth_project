import React from 'react'
import { differences } from '../constants'

const OurDifference = () => {
  return (
    <div className=' flex w-full justify-center difference'>
        <div className='bg-[#1ca8a88a] sm:p-10 md:p-18 p-6 flex md:w-[80%] shadowful rounded-[10px] flex-col z-[5]'>
            <h2 className='text-[1.6rem] sm:text-[2rem] text-[#064244]'>
                What We Have To Offer?
            </h2>
            <div className='flex justify-around flex-wrap w-full'>
                {differences.map((difference, index) =>(
                    <div key={index} className={`flex flex-col justify-center items-center sm:max-w-[250px] max-w-[220px] sm:p-7 py-4`}>
                        <div className={`h-[80px] w-[80px] rounded-full bg-[#b8dfd6] flex justify-center items-center`}>
                            <img src={difference.img} alt="diff" className={`h-[60px] w-[60px]`} />
                        </div>
                        <h3 className='text-center text-[#053a31] md:text-[#daf5f5] font-semibold'>
                            {difference.differenceName}
                        </h3>
                        <h3 className='text-center text-[#053a31] md:text-[#daf5f5]'>
                            {difference.description}
                        </h3>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurDifference