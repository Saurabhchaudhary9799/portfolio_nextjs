import Image from 'next/image'
import React from 'react'
import profile_picture from "../../public/profile_picture.jpg"
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCake } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Profile = () => {
  return (
    <section className="profile-section p-2 flex flex-col gap-y-5">
        <div className='flex flex-col justify-center items-center gap-y-5'>
            <Image src={profile_picture} width={200} height={200}  className='rounded-[50%]'/>
            <span className='text-2xl font-medium'>Saurbh Kumar</span>
            <span className='bg-[#2B2B2C] px-3 py-1 rounded-xl text-sm'>Full Stack Developer</span>
        </div>
        <div className="seperator border"></div>
        <div className="contact-info py-2  ">
            <ul className='flex flex-col gap-y-5 '>
               <li className='flex gap-x-5'>
                  <div className=' w-1/6 flex justify-center items-center '>
                     <span className='text-yellow-500'><MdLocalPhone/></span>
                  </div>
                  <div className='w-5/6 flex flex-col  '>
                     <span className='text-gray-500 font-regular'>PHONE</span>
                     <span>+91 8003276806</span>
                  </div>
               </li>
               <li className='flex gap-x-5'>
                  <div className=' w-1/6 flex justify-center items-center '>
                     <span className='text-yellow-500'><MdEmail/></span>
                  </div>
                  <div className='w-5/6 flex flex-col  '>
                     <span className='text-gray-500 font-regular'>GMAIL</span>
                     <span>saurbhbailara@gmail.com</span>
                  </div>
               </li>
               <li className='flex gap-x-5'>
                  <div className=' w-1/6 flex justify-center items-center '>
                     <span className='text-yellow-500'><MdCake/></span>
                  </div>
                  <div className='w-5/6 flex flex-col  '>
                     <span className='text-gray-500 font-regular'>BIRTHDAY</span>
                     <span>02 june , 2002</span>
                  </div>
               </li>
               <li className='flex gap-x-5'>
                  <div className=' w-1/6 flex justify-center items-center '>
                     <span className='text-yellow-500'><MdLocationPin/></span>
                  </div>
                  <div className='w-5/6 flex flex-col  '>
                     <span className='text-gray-500 font-regular'>LOCATION</span>
                     <span>bharatpur , Rajasthan</span>
                  </div>
               </li>
               <li className='flex justify-center gap-x-5 text-xl'>
                  <span><BsGithub/></span>
                  <span><BsInstagram/></span>
                  <span><BsLinkedin/></span>
               </li>
            </ul>
        </div>
    </section>
  )
}

export default Profile