import React from 'react'
import { fone, ftwo, fthree, ffour, ffive, fsix } from '../assets'
import { useState } from 'react'

const Workstation = () => {
    
    // Someone will definitely help me with this.
    let currentImageArray = [fone, fthree, ffour,]

    let imageNo = 0
    let imagesrc = currentImageArray[imageNo]
    const [image, setImage] = useState(imagesrc)
    const imageChange = () => {
        // if (imageNo < currentImageArray.length) {
        //     imageNo = imageNo + 1
        //     imagesrc = currentImageArray[imageNo]
        // }else {
        //     imageNo = 0
        //     imagesrc = currentImageArray[imageNo]
        // }
        imageNo = Math.floor(Math.random() * currentImageArray.length)
        imagesrc = currentImageArray[imageNo]
        setImage(imagesrc)
        console.log(`Image has changed to ${imagesrc}`)
        console.log(`${imageNo} of ${currentImageArray.length}`)
        console.log(`${imageNo}`)
    }
    setInterval(imageChange, 5000);

        // When you get help with the randomized version for small devices.
        // Chanege the div below to be hidden on small devices

  return (
    <div className='flex w-full md:flex-row flex-col bg-[#ebf3f2] relative'>
        <div className='md:w-[60%]'>
            <img src={fone} alt="" className='md:w-[100%]'  />
        </div>
        <div className='sm:p-20 p-5 flex justify-center  items-start flex-col md:w-[40%]'>
            <h1 className={`text-[1.8rem] sm:text-[2.5rem] text-[#0b685b]`}>
                Workstation
            </h1>
            <p className={`text-[#1f9c8c] mb-2`}>
                from $269
            </p>
            <p className='text-[#106b5f] text-[20px] max-w-[420px] sm:leading-[35px]'>
                From ergonomic chairs to beautiful desks, Branch workstations keep your team working helathy and happy.
            </p>
            <button className='p-3 xs:mt-5 sm:mt-3 mt-5 md:p-5 bg-[var(--primary-color)] hover:bg-[var(--deep-primary-color)] rounded-[5px] text-[#07303a]'>
                <a href="#">
                    Explore Workstation
                </a>
            </button>
        </div>
        {/* <div className='sm:p-20 sm:hidden flex justify-center  items-start flex-col md:w-[40%] absolute xs:p-10 p-5 bg-[#82d4da7c] w-full h-[100%] bottom-[1%]'>
            <h1 className={`xs:text-[1.8rem] text-[1.7rem] sm:text-[2.5rem] text-[#0b685b]`}>
                Workstation
            </h1>
            <p className={`xs:text-[#1f9c8c] text-[#11554c] xs:mb-2`}>
                from $269
            </p>
            <p className='xs:text-[#106b5f] text-[#073841] xs:text-[20px] max-w-[420px] sm:leading-[35px]'>
                From ergonomic chairs to beautiful desks, Branch workstations keep your team working helathy and happy.
            </p>
            <button className='p-3 xs:mt-5 mt-1 md:p-5 bg-[var(--primary-color)] hover:bg-[var(--deep-primary-color)] rounded-[5px] text-[#07303a]'>
                <a href="#">
                    Explore Workstation
                </a>
            </button>
        </div> */}
    </div>
  )
}

export default Workstation