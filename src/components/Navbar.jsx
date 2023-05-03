import React from 'react'
import { logo } from '../assets'
import { navLinks } from '../constants'
import BuildMyOffice from './BuildMyOffice'

const Navbar = () => {
  return (
    <div className={`w-full bg-[var(--light-primary-color)] flex items-center justify-between sm:px-9 px-4 fixed z-[99] backdrop-blur-md`}>
        <header className={`flex items-center`}>
            <img src={logo} alt="logo" className={`sm:h-[80px] sm:w-[70px] h-[70px] w-[60px]`} />
            <h1 className={`text-[2rem] uppercase company__name`}>
                Bliss
            </h1>
        </header>
        <nav className={`justify-between md:flex hidden`}>
            <ul className={`flex gap-3`}>
                {navLinks.map((nav, index) => (
                    <li key={index} className={`whitespace-nowrap ${index === navLinks.length - 1 ? 'mr-5' : 'mr-0' }`}>
                        <a href={nav.linkAddress} className={`sm:p-3 md:p-5 text-[var(--deep-primary-color)]  rounded-[5px] font-poppins navs`}>{nav.linkName}</a>
                    </li>
                ))}
            </ul>
            <div>
                <BuildMyOffice/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar