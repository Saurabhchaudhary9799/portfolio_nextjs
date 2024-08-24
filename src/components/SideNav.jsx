import Link from 'next/link';
import React from 'react'
import { ImCross } from "react-icons/im";

const SideNav = ({handleCloseNavigation}) => {
  return (
    <section className="sidenav-section bg-white">
         <div className='flex justify-end items-center px-10 py-5 text-4xl' onClick={handleCloseNavigation}><span><ImCross/></span></div>
         <div> 
            <ul className='flex flex-col gap-y-5 text-3xl items-center py-5'>
              <li><Link href={"/"} onClick={handleCloseNavigation}>About</Link></li>
              <li><Link href={"/resume"} onClick={handleCloseNavigation}>Resume</Link></li>
              <li><Link href={"/projects"} onClick={handleCloseNavigation}>Projects</Link></li>
              <li><Link href={"/contact"} onClick={handleCloseNavigation}>Contact</Link></li>
            </ul>
         </div>
    </section>
  )
}

export default SideNav