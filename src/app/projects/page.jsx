"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";

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

const shakeEffect = {
  hover: {
    rotateY: [-10, 10, -10, 10, 0], // 3D shake effect (left-right rotation)
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Projects = () => {
  const [category, setCategory] = useState("all");
  const projects = [
    {
      title: "SkySocial",
      image: "/projects/skySocial.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/SkySocial",
      liveLink: "https://sky-social.vercel.app/",
      category: "fullstack",
    },
    {
      title: "Natours",
      image: "/projects/natours.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://natour-web-app.netlify.app/",
      category: "fullstack",
    },
    {
      title: "dev.com",
      image: "/projects/Devcom.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://dev-com.netlify.app/",
      category: "frontend",
    },
    {
      title: "ScrapeGit",
      image: "/projects/scrapeGit.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://fyle-frontend-challenge-1.netlify.app/",
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

  const fullStackProjects = projects.filter((item) => item.category === "fullstack");
  const frontendProjects = projects.filter((item) => item.category === "frontend");

  return (
    <section className="projects-section">
      <div className="flex gap-x-10 text-xl">
        <div className="cursor-pointer text-sm md:text-lg" onClick={() => setCategory("all")} style={{ borderBottom: category === "all" ? "2px solid #FBBF24" : "none" }}>
          All
        </div>
        <div className="cursor-pointer text-sm md:text-lg" onClick={() => setCategory("fullstack")} style={{ borderBottom: category === "fullstack" ? "2px solid #FBBF24" : "none" }}>
          Full Stack
        </div>
        <div className="cursor-pointer text-sm md:text-lg" onClick={() => setCategory("frontend")} style={{ borderBottom: category === "frontend" ? "2px solid #FBBF24" : "none" }}>
          Frontend
        </div>
      </div>
      <div className="py-5">
        {category === "all" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((item, index) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={index}
                whileHover="hover" // Apply shaking effect on hover
                className="relative project rounded flex flex-col gap-y-2 bg-[#2B2B2C] overflow-hidden"
                // variants={shakeEffect} // Add the shake effect variant
              >
                <div>
                  <Image className="rounded" src={item.image} alt={item.title} width={500} height={700} />
                </div>
                {/* Overlay div */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center gap-x-5 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href={item.githubLink} target="_blank">
                    <span>
                      <BsGithub />
                    </span>
                  </Link>
                  <Link href={item.liveLink} target="_blank">
                    <span>
                      <FaLink />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {category === "fullstack" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {fullStackProjects.map((item, index) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={index}
                whileHover="hover" // Apply shaking effect on hover
                className="relative project rounded flex flex-col gap-y-2 bg-[#2B2B2C] overflow-hidden"
                // variants={shakeEffect} // Add the shake effect variant
              >
                <div>
                  <Image className="rounded" src={item.image} alt={item.title} width={500} height={700} />
                </div>
                {/* Overlay div */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center gap-x-5 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href={item.githubLink} target="_blank">
                    <span>
                      <BsGithub />
                    </span>
                  </Link>
                  <Link href={item.liveLink} target="_blank">
                    <span>
                      <FaLink />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {category === "frontend" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {frontendProjects.map((item, index) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                key={index}
                whileHover="hover" // Apply shaking effect on hover
                className="relative project rounded flex flex-col gap-y-2 bg-[#2B2B2C] overflow-hidden"
                // variants={shakeEffect} // Add the shake effect variant
              >
                <div>
                  <Image className="rounded" src={item.image} alt={item.title} width={500} height={700} />
                </div>
                {/* Overlay div */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center gap-x-5 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href={item.githubLink} target="_blank">
                    <span>
                      <BsGithub />
                    </span>
                  </Link>
                  <Link href={item.liveLink} target="_blank">
                    <span>
                      <FaLink />
                    </span>
                  </Link>
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
