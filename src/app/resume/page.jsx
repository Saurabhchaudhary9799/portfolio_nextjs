"use client";
import { animate, motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiMui,
  SiExpress,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoGithub } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
const Resume = () => {
  const skillsWithIcon = [
    {
      title: "HTML",
      icon: FaHtml5,
      color: "text-orange-600", // HTML orange color
    },
    {
      title: "CSS",
      icon: FaCss3Alt,
      color: "text-blue-600", // CSS blue color
    },
    {
      title: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "text-teal-400", // Tailwind teal color
    },
    {
      title: "Bootstrap",
      icon: FaBootstrap,
      color: "text-purple-600", // Bootstrap purple color
    },
    {
      title: "Chakra UI",
      icon: SiChakraui,
      color: "text-teal-500", // Chakra UI teal color
    },
    {
      title: "MaterialUI",
      icon: SiMui,
      color: "text-blue-500", // MaterialUI blue color
    },
    {
      title: "Javascript",
      icon: FaJs,
      color: "text-yellow-400", // JavaScript yellow color
    },
    {
      title: "React.js",
      icon: RiReactjsFill,
      color: "text-blue-400", // React blue color
    },
    {
      title: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500", // Node.js green color
    },
    {
      title: "Express.js",
      icon: SiExpress,
      color: "text-gray-500", // Express.js gray color
    },
    {
      title: "MongoDB",
      icon: DiMongodb,
      color: "text-green-600", // MongoDB green color
    },
    {
      title: "PostgreSQL",
      icon: BiLogoPostgresql,
      color: "text-blue-700", // MongoDB green color
    },
    {
      title: "Redux",
      icon: SiRedux,
      color: "text-purple-500", // Redux purple color
    },
    {
      title: "Next.js",
      icon: RiNextjsFill,
      color: "text-black", // Next.js black color
    },
    {
      title: "Gitgub",
      icon: IoLogoGithub,
      color: "text-black-500", // Git red color
    },
    {
      title: "Framer Motion",
      icon: FiFramer,
      color: "text-pink-500", // Framer Motion pink color
    },
    {
      title: "Typescript",
      icon: SiTypescript,
      color: "text-blue-500", // Typescript blue color
    },
    {
      title: "Postman",
      icon: SiPostman,
      color: "text-orange-500", // Typescript blue color
    },
  ];

  return (
    <section className="resume-section  flex flex-col gap-y-5">
      <div className="education-section">
        <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
          Education
        </h1>
        <div className="education-details border-l-2 pl-5 flex flex-col gap-y-5">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.05,
              },
            }}
            className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3"
          >
            <h1 className="text-yellow-500 text-xl font-bold">
              Bachelor Of Technology
            </h1>
            <span className="text-lg">Nov,2021 - present </span>
            <p>
              <span className="text-yellow-500 text-lg">Grade :</span> 7.73
            </p>
            <p className="text-sm text-justify">
              Currently pursuing Computer Science & Engineering at Shri Mata
              Vaishno Devi University. Dedicated to mastering cutting-edge
              technologies and problem-solving skills for innovative solutions
              in the digital age.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.15,
              },
            }}
            className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3"
          >
            <h1 className="text-yellow-500 text-xl font-bold">High School</h1>
            <span className="text-lg">June,2017-April,2019 </span>
            <p>
              <span className="text-yellow-500 text-lg">Grade :</span> 92.20 %{" "}
            </p>
            <p className="text-sm text-justify">
              I have passed out my 12th class from Nutan Adarsh Vidhya Mandir ,
              Nadbai , demonstrating strong academic performance and involvement
              in extracurricular activities, fostering teamwork and leadership
              skills. This School environment is very peace and beautiful.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.25,
              },
            }}
            className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3"
          >
            <h1 className="text-yellow-500 text-xl font-bold">
              Secondary School
            </h1>
            <span className="text-lg">June,2016-June,2017 </span>
            <p>
              <span className="text-yellow-500 text-lg">Grade :</span> 91.33%
            </p>
            <p className="text-sm text-justify">
              I have passed out my 10th class from Bhagvati Bal Niketan Sr. Sec.
              school , Nadbai . In secondary school, I excelled academically,
              actively participating in various subjects. Engaged in
              extracurricular activities, honing leadership and teamwork skills.
              Demonstrated a strong commitment to learning and personal growth.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="experience-section">
        <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
          Experience
        </h1>
        <div className="education-details border-l-2 pl-5 flex flex-col gap-y-5">
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.05,
              },
            }}
            className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3"
          >
            <h1 className="text-yellow-500 text-xl font-bold">
              React.js Frontend Developer
            </h1>
            <span className="text-lg">01 Jul,2024 - 31 Aug,2024 </span>
            <p className="text-lg">Shri Mata Vaishno Devi University</p>
            <ul className="list-decimal list-inside">
             <li className="text-sm text-justify">Developed a responsive conference website using React.js and Tailwind CSS, enhancing user experience across various devices with a focus on accessibility and performance</li>
             <li className="text-sm text-justify">Maintained proactive attitude in tackling new challenges and demonstrated a commitment to practical problem-solving and continuous learning throughout my internship</li>
            </ul>
            
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.05,
              },
            }}
            className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3"
          >
            <h1 className="text-yellow-500 text-xl font-bold">
              Open Source Contributor
            </h1>
            <span className="text-lg">01 Oct,2023 - 31 Oct,2023 </span>
            <p className="text-lg">Hacktoberfest 2023</p>
            <ul className="list-decimal list-inside">
             <li className="text-sm text-justify">Actively participated in Hacktoberfest by contributing high-quality pull requests to multiple open-source projects, enhancing functionality and user experience.</li>
             <li className="text-sm text-justify">Engaged with the developer community to identify areas for improvement, fostering collaboration and driving project innovation.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="skills-section">
        <h1 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
          Skills
        </h1>
        <div className="flex gap-4 flex-wrap text-sm">
          {skillsWithIcon.map((item, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={index}
              className="bg-white text-black px-3 py-2 rounded-xl flex justify-center items-center gap-x-3"
            >
              <item.icon className={`${item.color} text-3xl`} />
              {item.title}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
