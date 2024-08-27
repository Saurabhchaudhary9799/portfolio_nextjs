import Link from 'next/link';
import React from 'react'
import { ImCross } from "react-icons/im";

const SideNav = ({handleCloseNavigation}) => {
  return (
    <section className="sidenav-section bg-[#2B2B2C] rounded-r-xl ">
         <div className='flex justify-end items-center px-10 py-5 text-2xl font-regular border-b-2' onClick={handleCloseNavigation}><span><ImCross/></span></div>
         
         <div className=' h-screen flex justify-center items-center'> 
            <ul className='flex flex-col gap-y-5 text-3xl items-center py-5'>
              <li className='hover:text-yellow-500 hover:scale-125 transition-all'><Link href={"/"} onClick={handleCloseNavigation}>About</Link></li>
              <li className='hover:text-yellow-500 hover:scale-125 transition-all'><Link href={"/resume"} onClick={handleCloseNavigation}>Resume</Link></li>
              <li className='hover:text-yellow-500 hover:scale-125 transition-all'><Link href={"/projects"} onClick={handleCloseNavigation}>Projects</Link></li>
              <li className='hover:text-yellow-500 hover:scale-125 transition-all'><Link href={"/contact"} onClick={handleCloseNavigation}>Contact</Link></li>
            </ul>
         </div>
    </section>
  )
}

export default SideNav