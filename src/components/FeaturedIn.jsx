import React from 'react'
import { whereFeatured } from '../constants'

const FeaturedIn = () => {
  return (
    <div className={`w-full bg-[#d6f5f1] p-3 flex flex-col justify-center items-center`}>
      <h2 className={`text-[#08425e] text-[1.8rem] uppercase`}>
        Featured In
      </h2>
      <div className={`flex md:w-[70%] w-full flex-wrap items-center justify-around`}>
        {whereFeatured.map((company, index) => (
          <div key={index} className={``}>
            <img src={company.logo} alt={company.name} className={`w-[160px] p-3`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedIn