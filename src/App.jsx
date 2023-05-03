import React from 'react'
import { Navbar, Hero, FeaturedIn, Elevate, Workstation, Conference, Lounge, } from './components'
import OurDifference from './components/OurDifference'

const App = () => {
  return (
    <div className='relative'>
      <div className={`relative`}>
        <Navbar />
      </div>
      {/* <div className='bg-[#f0e] xl:pt-[1000px]'/>
      <div className={`bg-[#5ad4d8] xl:h-[1250px] mxl:h-[1140px] lg:h-[975px] md:h-[810px] sm:h-[1280px] ss:h-[1035px] xs:h-[1035px] h-[1500px]`}> */}
      <div>
        <Hero />
      </div>
      {/* <div className='lg:pt-[1100px] md:pt-[1000]'>
        <FeaturedIn />
        this is the continuation
      </div> */}
      <div>
        <FeaturedIn />
        <Elevate />
        <Workstation />
        <Conference />
        <Lounge />
      </div>
    </div>
  )
}

export default App