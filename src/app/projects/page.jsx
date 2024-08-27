"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { animate,motion } from "framer-motion";
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
const Projects = () => {
  const [category, setCategory] = useState("all");
  const projects = [
    {
      title: "Natours",
      image: "/projects/natours.png",

      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: " https://natour-web-app.netlify.app/",

      category: "fullstack",
    },
    {
      title: "dev.com",
      image: "/projects/Devcom.png",

      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: " https://dev-com.netlify.app/",

      category: "frontend",
    },
    {
      title: "ScrapeGit",
      image: "/projects/scrapeGit.png",

      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: " https://fyle-frontend-challenge-1.netlify.app/",

      category: "frontend",
    },
    {
      title: "Topic",
      image: "/projects/topic.png",

      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://get-topics.netlify.app/",

      category: "frontend",
    },
    
  ];

  const fullStackProjects = projects.filter(
    (item) => item.category === "fullstack"
  );
  const frontendProjects = projects.filter(
    (item) => item.category === "frontend"
  );
  // console.log("fullstack", fullStackProjects);
  // console.log("frontend", frontendProjects);
  return (
    <section className="projects-section ">
      <div className="flex gap-x-10 text-xl">
        <div
          className="cursor-pointer  text-lg md:text-xl"
          onClick={() => setCategory("all")}
          style={{
            borderBottom: category === "all" ? "2px solid #FBBF24" : "none",
          }}
        >
          All
        </div>
        <div
          className="cursor-pointer text-lg md:text-xl"
          onClick={() => setCategory("fullstack")}
          style={{
            borderBottom:
              category === "fullstack" ? "2px solid #FBBF24" : "none",
          }}
        >
          Full Stack Projects
        </div>
        <div
          className="cursor-pointer text-lg md:text-xl"
          onClick={() => setCategory("frontend")}
          style={{
            borderBottom:
              category === "frontend" ? "2px solid #FBBF24" : "none",
          }}
        >
          Frontend Projects
        </div>
      </div>
      <div className="py-5">
        {category === "all" && (
          <div className="flex flex-col gap-y-10 justify-center items-center">
            {projects.map((item, index) => (
              <motion.div variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              
              custom={index}
              key={index}
                className="project border  p-3 rounded-xl flex flex-col gap-y-2 bg-[#2B2B2C] "
                
              >
                <div>
                  <Image
                    className="rounded-xl"
                    src={item.image}
                    alt="profile_picture"
                    width={500}
                    height={700}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h1 className="text-xl">{item.title}</h1>
                  <div className="border text-center text-lg rounded-xl h-[42px] flex justify-center items-center cursor-pointer">
                    <Link href={item.githubLink} target="_blank">
                      Github
                    </Link>
                  </div>
                  <div className="border text-center text-lg rounded-xl h-[42px] flex justify-center items-center cursor-pointer">
                    <Link href={item.liveLink} target="_blank">
                      Live view
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {category === "fullstack" && (
          <div className="flex flex-col gap-y-10 justify-center items-center">
            {fullStackProjects.map((item, index) => (
              <motion.div variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              
              custom={index}
              key={index}
                className="project border  p-3 rounded-xl flex flex-col gap-y-2 bg-[#2B2B2C]"
               
              >
                <div>
                  <Image
                    className="rounded-xl"
                     alt="profile_picture"
                    src={item.image}
                    width={500}
                    height={700}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h1 className="text-xl">{item.title}</h1>
                  <div className="border text-center text-lg rounded-xl h-[42px] flex justify-center items-center cursor-pointer">
                    <Link href={item.githubLink} target="_blank">
                      Github
                    </Link>
                  </div>
                  <div className="border text-center text-lg rounded-xl h-[42px] flex justify-center items-center cursor-pointer">
                    <Link href={item.liveLink} target="_blank">
                      Live view
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {category === "frontend" && (
          <div className="flex flex-col gap-y-10 justify-center items-center">
            {frontendProjects.map((item, index) => (
              <motion.div variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              
              custom={index}
              key={index}
                className="project border  p-3 rounded-xl flex flex-col gap-y-2 bg-[#2B2B2C]"
               
              >
                <div>
                  <Image
                    className="rounded-xl"
                    src={item.image}
                     alt="profile_picture"
                    width={500}
                    height={700}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h1 className="text-xl">{item.title}</h1>
                  <div className="border text-center text-lg rounded-xl h-[42px] flex justify-center items-center cursor-pointer">
                    <Link href={item.githubLink} target="_blank">
                      Github
                    </Link>
                  </div>
                  <div className="border text-center text-lg rounded-xl h-[42px] flex justify-center items-center cursor-pointer">
                    <Link href={item.liveLink} target="_blank">
                      Live view
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
