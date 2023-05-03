import React from 'react'

const Elevate = () => {
  return (
    <div>
        <div className={`bg-[#4db3b3a4] flex flex-col justify-center items-center p-3`}>
            <h1 className='sm:text-[3rem] text-[2rem] text-[#0a4d4d] text-center p-2'>
                Elevate Your Office
            </h1>
            <div className='sm:hidden flex h-[5px] w-[80px] rounded-[2.5px] bg-[#0a666d] mb-5' />
            <p className={`text-center max-w-[560px] text-[20px] text-[#0a4d4d] sm:leading-[35px]`}>
                Whether you're a team of three or three hundred, invest in productivity and wellness with premium office furniture at a not so premium price.
            </p>
        </div>
    </div>
  )
}

export default Elevate