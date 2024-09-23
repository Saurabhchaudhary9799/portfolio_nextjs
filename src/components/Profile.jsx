import Image from "next/image";
import React from "react";
import profile_picture from "../../public/profile_picture.jpg";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCake } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";
import Link from "next/link";
const Profile = () => {
  return (
    <section className="profile-section p-2 flex flex-col gap-y-5">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <Image
          src={profile_picture}
          width={200}
          height={200}
          alt="profile_picture"
          className="rounded-[50%] w-24 h-24"
        />

        <span className="text-xl font-medium">Saurbh Kumar</span>
        <span className="bg-[#2B2B2C] px-3 py-1 rounded-xl text-sm">
          Full Stack Developer
        </span>
      </div>
      <Separator />
      <div className="contact-info py-2  ">
        <ul className="space-y-5 ">
          <li className="flex gap-x-2  ">
            <div className="  flex justify-center items-center ">
              <span className="text-yellow-500">
                <MdLocalPhone />
              </span>
            </div>
            <div className=" flex flex-col  text-sm">
              <span className="text-gray-500 font-regular">PHONE</span>
              <span>+91 8003276806</span>
            </div>
          </li>
          <li className="flex gap-x-2">
            <div className="  flex justify-center items-center ">
              <span className="text-yellow-500">
                <MdEmail />
              </span>
            </div>
            <div className=" flex flex-col  text-sm">
              <span className="text-gray-500 font-regular">GMAIL</span>
              <span>saurbhbailara@gmail.com</span>
            </div>
          </li>
          <li className="flex gap-x-2">
            <div className="flex justify-center items-center ">
              <span className="text-yellow-500">
                <MdCake />
              </span>
            </div>
            <div className=" flex flex-col  text-sm">
              <span className="text-gray-500 font-regular">BIRTHDAY</span>
              <span>02 june , 2002</span>
            </div>
          </li>
          <li className="flex gap-x-2">
            <div className=" flex justify-center items-center ">
              <span className="text-yellow-500">
                <MdLocationPin />
              </span>
            </div>
            <div className=" flex flex-col  text-sm">
              <span className="text-gray-500 font-regular">LOCATION</span>
              <span>bharatpur , Rajasthan</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-x-5 text-lg">
        <span className="hover:-translate-y-1 transition-all hover:text-yellow-500">
          <Link
            href={"https://github.com/Saurabhchaudhary9799"}
            target="_blank"
          >
            <BsGithub />
          </Link>
        </span>
        <span className="hover:-translate-y-1 transition-all hover:text-yellow-500">
          <Link
            href={
              "https://www.instagram.com/always_code7?igsh=MWpxbzVleXd1c3d0NA=="
            }
            target="_blank"
          >
            <BsInstagram />
          </Link>
        </span>
        <span className="hover:-translate-y-1 transition-all hover:text-yellow-500">
          <Link
            href={"https://www.linkedin.com/in/saurbhkumar/"}
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </span>
        <span className="hover:-translate-y-1 transition-all hover:text-yellow-500">
          <Link href={"https://x.com/Saurabh_barakh"} target="_blank">
            <BsTwitterX />
          </Link>
        </span>
        <span className="hover:-translate-y-1 transition-all hover:text-yellow-500">
          <Link
            href={
              "https://drive.google.com/file/d/1pxFFy3dMKSWyOujHc4cMl_QZ80Elrj86/view?usp=drive_link"
            }
            target="_blank"
          >
            <FaFileDownload />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Profile;
