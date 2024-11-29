import Navbar from "@/components/Navbar";
import { FaLaptopCode } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FaCodeMerge } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import profile_image from  "../../public/profile_picture.jpg"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="about-section rounded ">
        <div className="block md:hidden pb-5" >
          <div className="flex flex-col justify-center items-center gap-y-3">
          <Image src={profile_image} alt="profile_picture" className="w-24 h-24 rounded-full"/>
          <div>
          <h1 className="text-center">Saurbh Kumar</h1>
          <p className="text-center">Passionate Mern Stack Developer, Freelancer and an Open Source Contributor.</p>
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
        
      </div>
      <a href="https://drive.google.com/file/d/14HY1XCWujZiDKSzBlDzaqLSkdxRZBtN_/view?usp=sharing" target="_blank" className="bg-yellow-500 px-3 py-2 rounded hover:-translate-y-1 transition-all">Resume</a>
          </div>
           
        </div>
        <div className="about-container mb-5 ">
          <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
            {" "}
            About me
          </h1>
          <p className="text-sm mb-3">
            Hello! I&apos;m <u style={{textDecoration: "none",
      borderBottom: "2px solid orange" }}>Saurbh Kumar</u>, a 4th-year <u style={{textDecoration: "none",
        borderBottom: "2px solid orange" }}>Computer Science and Engineering </u>
            student at Shri Mata Vaishno Devi University, and a dedicated 
             <u style={{textDecoration: "none",
      borderBottom: "2px solid orange" }}> full-stack developer</u>. With a strong foundation in <u style={{textDecoration: "none",
        borderBottom: "2px solid orange" }}>MERN stack</u> technologies such as React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript etc. , I specialize in creating responsive and
            user-friendly web applications. My journey in tech extends beyond
            academics; I am also an <u style={{textDecoration: "none",
      borderBottom: "2px solid orange" }}>active freelancer</u> and <u style={{textDecoration: "none",
        borderBottom: "2px solid orange" }}>open-source
            contributor</u>. I&apos;m passionate about collaborating on impactful
            projects and continuously improving through new challenges.
          </p>
          
        </div>
        <div className="roles">
          <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
            What I&apos;m doing
          </h1>
          <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-x-5 xl:flex-wrap">
            <div className="   flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl group bg-white hover:scale-105 transition-all duration-300 text-black">
              <span className="text-yellow-500 text-3xl">
                <FaLaptopCode />
              </span>
              <span className="text-lg font-bold text-center">
                Web Development
              </span>
              <p className="w-full text-center text-sm ">
                <span className="text-yellow-500 text-lg">&quot;</span>
                Creating dynamic and responsive websites that deliver
                exceptional user experiences. Specializing in modern frameworks
                and best practices to ensure optimal performance and
                accessibility.
                <span className="text-yellow-500 text-lg">&quot;</span>
              </p>
            </div>
            <div className="  flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl group bg-white hover:scale-105 transition-all duration-300 text-black">
              <span className="text-yellow-500 text-3xl">
                <SiFreelancer />
              </span>
              <span className="text-lg font-bold">Freelancing</span>
              <p className="w-full text-center text-sm ">
                <span className="text-yellow-500 text-lg">&quot;</span>
                Offering bespoke web solutions tailored to your business needs.
                From concept to deployment, I provide end-to-end services that
                enhance your online presence and engage your audience.
                <span className="text-yellow-500 text-lg">&quot;</span>
              </p>
            </div>
            <div className="   flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl group bg-white hover:scale-105 transition-all duration-300 text-black">
              <span className="text-yellow-500 text-3xl">
                <FaCodeMerge />
              </span>
              <span className="text-lg font-bold">Open Source Contributor</span>
              <p className="w-full text-center text-sm ">
                <span className="text-yellow-500 text-lg">&quot;</span>
                Contributing to impactful open-source projects, I help drive
                innovation and build community-focused solutions. From ideation
                to implementation, I collaborate to enhance project
                functionality, improve code quality, and foster growth across
                the developer ecosystem.
                <span className="text-yellow-500 text-lg">&quot;</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
