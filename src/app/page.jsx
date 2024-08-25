import Navbar from "@/components/Navbar";
import { FaLaptopCode } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";

export default function Home() {
  return (
    <>
      <section className="about-section rounded-xl py-5 px-10">
            <div className="about-container mb-5 ">
                <h1 className="text-3xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5"> About me</h1>
                <p className="text-lg mb-5">Hello! Myself Saurbh Kumar, a passionate and driven Computer Science Engineering student currently in my final year at Shri Mata Vaishno Devi University. My specialization is  in full stack web development with javascript ,React.js , Node.js ,.Express.js & MongoDB , with a keen interest in applying my skills to solve real-world problems.</p>
                <p className="text-lg">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover , I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way .</p>
            </div>
            <div className="roles">
               <h1  className="text-3xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">What I&apos;m doing</h1>
               <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-x-5">
                  <div className=" w-full xl:w-3/6 bg-[#2B2B2C] flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl">
                     <span className="text-yellow-500 text-3xl"><FaLaptopCode/></span>
                     <span className="text-xl font-bold text-center">Web Development</span>
                     <p className="w-48 sm:w-64 text-center text-lg">High-quality development of sites at the professional level.</p>
                  </div>
                  <div className=" w-full xl:w-3/6 bg-[#2B2B2C] flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl">
                     <span className="text-yellow-500 text-3xl"><SiFreelancer/></span>
                     <span className="text-xl font-bold">Freelancing</span>
                     <p className="w-48 sm:w-64 text-center text-lg">High-quality development of sites at the professional level.</p>
                  </div>
               </div>
            </div>
      </section>
    </>
   
  );
}
