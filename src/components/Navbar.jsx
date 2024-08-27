"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import profile from "../../public/profile_picture.jpg";
import Profile from "./Profile";
import SideNav from "./SideNav";
import {motion} from "framer-motion";


const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
 const [isOpen , setIsOpen] = useState(false);
 
 
  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleNavigation = () =>{
    setIsOpen(!isOpen);
  }
  const handleCloseNavigation = () =>{
    setIsOpen(false);
  }
  return (
    <section className="navbar-section bg-[#2B2B2C] rounded-t-xl relative">
      <div className="flex md:hidden justify-between items-center px-10 py-5">
        <div>
          <Image
            src={profile}
            alt="profile_picture"
            className="h-16 w-16 rounded-[50%] transition-all duration-200 ease-in-out cursor-pointer"
            onClick={handleOpenProfile}
          />
        </div>
        <span className="text-4xl cursor-pointer" onClick={handleNavigation}>
          <GiHamburgerMenu />
        </span>
      </div>
      {
        openProfile && <Profile/>
      }
      {
        isOpen && <motion.div initial={{x:300}} animate={{x:0}}  className="absolute h-screen w-3/6  right-0 top-0 bg-[#2B2B2C] text-white z-50 block md:hidden p-0"><SideNav handleCloseNavigation={handleCloseNavigation}/></motion.div>
      }
      <ul className="hidden md:flex gap-x-5 justify-center  text-xl py-5">
        <li>
          <Link href="/">about</Link>
        </li>
        <li>
          <Link href="/resume">resume</Link>
        </li>
        <li>
          <Link href="/projects">projects</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
