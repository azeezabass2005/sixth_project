import React from 'react'
import LoungeSm from './LoungeSm'
import WorkstationSm from './WorkstationSm'
import ConferenceSm from './ConferenceSm'
import { useState, useEffect } from 'react'

const SmallCategory = () => {
    const [presentComponent, setPresentComponent] = useState(0)
    

    const componentArray = [
        <WorkstationSm />,
        <ConferenceSm />,
        <LoungeSm />
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setPresentComponent(prev => prev === componentArray.length - 1 ? 0 : prev + 1 )
            // console.log(presentComponent)
        }, 7000);

        return () => {
            clearInterval(interval)
        }
    }, [componentArray.length])

    const handleNext = () => {
        setPresentComponent(prev => prev === componentArray.length - 1 ? 0 : prev + 1)

        return () => {
            clearInterval(interval)
        }
    }

    const handlePrev = () => {
        setPresentComponent(prev => prev === 0 ? componentArray.length - 1 : prev - 1)
    }


  return (
    <div>
        <div className={`flex relative`}>
            <div>
                {componentArray.map((component, index) => (
                    <div key={index} className={`${index === presentComponent ? 'flex' : 'hidden'} small__category`} >
                        {component}
                    </div>
                ))}
            </div>
            <button className={`absolute bg-[var(--primary-color)] text-[#ddd] xs:p-[2px] p-[1.3px] top-[50%] translate-y-[-50%] right-0 xs:text-[2rem] text-[1.5rem] rounded-[4px]`} onClick={handleNext}>
                &gt;
            </button>
            <button className={`absolute bg-[var(--primary-color)] text-[#ddd] xs:p-[2px] p-[1.3px] top-[50%] translate-y-[-50%] left-0 txs:ext-[2rem]  text-[1.5rem] rounded-[4px]`} onClick={handlePrev}>
                &lt;
            </button>
        </div>
        <div className={`flex w-full justify-center items-center h-[40px] gap-[7px] z-[5]`}>
            {componentArray.map((_, index) => (
                <div key={index} className={`h-[22px] w-[22px] rounded-full ${index === presentComponent ? 'bg-[var(--primary-color)] scale-110 shadow-primary' : 'bg-[#bce9e7]'} border-[2px] border-[#7dcdcf7e]`}  onClick={ () => setPresentComponent(index)} />
            ))}
        </div>
    </div>
  )
}

export default SmallCategory