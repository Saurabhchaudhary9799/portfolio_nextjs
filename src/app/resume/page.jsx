"use client";
import { animate, motion } from "framer-motion";
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
  const skills = [
    "HTML",
    "CSS",
    "Tailwind css",
    "Bootstrap",
    "Chakra UI",
    "MaterialUI",
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux",
    "Typescript",
    "Next.js",
    "Git",
    "Github",
    "REST API",
    "C++",
    "Framer-motion",
    "Computer Network",
    "Operating System",
    "DBMS",
    "OOPs",
    "DSA",
    "Problem solving",
  ];
  return (
    <section className="resume-section  flex flex-col gap-y-5">
      <div className="education-section">
        <h1 className="text-3xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
          Education
        </h1>
        <div className="education-details border-l-2 pl-5 flex flex-col gap-y-5">
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }} className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3">
            <h1 className="text-yellow-500 text-2xl font-bold">
              Bachelor Of Technology
            </h1>
            <span className="text-xl">Nov,2021 - present </span>
            <p>
              <span className="text-yellow-500 text-xl">Grade :</span> 7.73
            </p>
            <p className="text-lg">
              Currently pursuing Computer Science & Engineering at Shri Mata
              Vaishno Devi University. Dedicated to mastering cutting-edge
              technologies and problem-solving skills for innovative solutions
              in the digital age.
            </p>
          </motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.15,
            },
          }} className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3">
            <h1 className="text-yellow-500 text-2xl font-bold">High School</h1>
            <span className="text-xl">June,2017-April,2019 </span>
            <p>
              <span className="text-yellow-500 text-xl">Grade :</span> 92.20 %{" "}
            </p>
            <p className="text-lg">
              I have passed out my 12th class from Nutan Adarsh Vidhya Mandir ,
              Nadbai , demonstrating strong academic performance and involvement
              in extracurricular activities, fostering teamwork and leadership
              skills. This School environment is very peace and beautiful.
            </p>
          </motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.25,
            },
          }} className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3">
            <h1 className="text-yellow-500 text-2xl font-bold">
              Secondary School
            </h1>
            <span className="text-xl">June,2016-June,2017 </span>
            <p>
              <span className="text-yellow-500 text-xl">Grade :</span> 91.33%
            </p>
            <p className="text-lg">
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
        <h1 className="text-3xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
          Experience
        </h1>
        <div className="education-details border-l-2 pl-5 flex flex-col gap-y-5">
          <motion.div initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }} className="relative border bg-[#2B2B2C] before:content-[''] before:block before:w-[15px] before:h-[15px] before:bg-white before:rounded-[50%] before:absolute before:-left-[28px] before:-top-[1px] px-5 rounded-xl py-3">
            <h1 className="text-yellow-500 text-2xl font-bold">
              Open Source Contributoe
            </h1>
            <span className="text-xl">01 Oct,2023 - 31 Oct , 2023 </span>
            <p className="text-lg">Hacktoberfest 2023</p>
            <p className="text-lg">
              I Actively participated in Hacktoberfest, an annual event
              encouraging open source contributions , and Contributed to
              multiple open source projects by submitting high-quality pull
              requests. I Engaged with the developer community to identify areas
              for improvement and enhance project functionality.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="skills-section">
        <h1 className="text-3xl font-bold after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-500 mb-5">
          Skills
        </h1>
        <div className="flex gap-4 flex-wrap text-lg">
          {skills.map((item, index) => (
            <motion.span
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              
              custom={index}
              key={index}
              className="bg-white text-black px-3 py-2 rounded-xl"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
