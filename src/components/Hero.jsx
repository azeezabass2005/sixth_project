import React from 'react'
import { fone, ftwo, fthree, ffour, ffive, fsix } from '../assets'
import BuildMyOffice from './BuildMyOffice'
import OurDifference from './OurDifference'


const Hero = () => {
  return (
    <div className={``}>
        <div className='relative hero'>
            <img src={ftwo} alt="furniture" className='absolute' />
            <div className={`absolute hero-text-section w-full sm:h-[600px] md:h-[700px] sm:px-[4rem] sm:py-[5rem] px-[2rem] py-[3rem] flex justify-around items-center md:flex-row flex-col sm:mb-0 mb-5`}>
                <div className='sm:mt-10 mt-5'>
                    <h2 className={`sm:text-[var(--deep-primary-color)] text-[#0efff3] sm:text-[2.7rem] text-[2.2rem] max-w-[450px] mb-3`}>
                        Office Furniture Made Easy With Bliss
                    </h2>
                    <ul className='list-disc text-[var(--deep-primary-color)] sm:text-[22px] text-[18px] sm:p-0 px-3 py-2'>
                        <li>
                            Exceptional desks,chairs, tables and more
                        </li>
                        <li>
                            Get furnished in 5-15 business days
                        </li>
                        <li>
                            Free shipping and installation
                        </li>
                        <li>
                            And all at an affordable price
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col justify-start items-center mt-10'>
                    <h2 className={`sm:text-[#7ee6e0] text-[#31b49c] mb-8 sm:text-[2rem] text-[1.8rem]`}>
                        What are you waiting for?
                    </h2>
                    <BuildMyOffice />
                </div>
            </div>
        </div>
        <OurDifference />
    </div>
  )
}

export default Hero