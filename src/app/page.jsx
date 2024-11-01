import Navbar from "@/components/Navbar";
import { FaLaptopCode } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FaCodeMerge } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <section className="about-section rounded ">
        <div className="about-container mb-5 ">
          <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
            {" "}
            About me
          </h1>
          <p className="text-sm mb-3">
            Hello! I&apos;m Saurbh Kumar, a 4th-year Computer Science and Engineering
            student at Shri Mata Vaishno Devi University, and a dedicated
            full-stack developer. With a strong foundation in both front-end and
            back-end technologies, I specialize in creating responsive and
            user-friendly web applications. My journey in tech extends beyond
            academics; I am also an active freelancer and open-source
            contributor. I&apos;m passionate about collaborating on impactful
            projects and continuously improving through new challenges.
          </p>
          <p className="text-sm ">
            I&apos;m currently available for freelance opportunities in web
            development, so if you&apos;re looking for someone to bring your vision
            to life with a keen eye for detail and efficient code, let&apos;s
            connect!.
          </p>
        </div>
        <div className="roles">
          <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
            What I&apos;m doing
          </h1>
          <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-x-5 xl:flex-wrap">
            <div className="  bg-[#2B2B2C] flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl group hover:bg-white hover:border hover:text-black">
              <span className="text-yellow-500 text-3xl">
                <FaLaptopCode />
              </span>
              <span className="text-lg font-bold text-center">
                Web Development
              </span>
              <p className="w-full text-center text-sm text-gray-200 group-hover:text-black">
                <span className="text-yellow-500 text-lg">&quot;</span>
                Creating dynamic and responsive websites that deliver
                exceptional user experiences. Specializing in modern frameworks
                and best practices to ensure optimal performance and
                accessibility.
                <span className="text-yellow-500 text-lg">&quot;</span>
              </p>
            </div>
            <div className="   bg-[#2B2B2C] flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl group hover:bg-white hover:border hover:text-black">
              <span className="text-yellow-500 text-3xl">
                <SiFreelancer />
              </span>
              <span className="text-lg font-bold">Freelancing</span>
              <p className="w-full text-center text-sm text-gray-200 group-hover:text-black">
                <span className="text-yellow-500 text-lg">&quot;</span>
                Offering bespoke web solutions tailored to your business needs.
                From concept to deployment, I provide end-to-end services that
                enhance your online presence and engage your audience.
                <span className="text-yellow-500 text-lg">&quot;</span>
              </p>
            </div>
            <div className="  bg-[#2B2B2C] flex flex-col justify-center items-center p-3 gap-y-2 rounded-xl group hover:bg-white hover:border hover:text-black">
              <span className="text-yellow-500 text-3xl">
                <FaCodeMerge />
              </span>
              <span className="text-lg font-bold">Open Source Contributor</span>
              <p className="w-full text-center text-sm text-gray-200 group-hover:text-black">
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
