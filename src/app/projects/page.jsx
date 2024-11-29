"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { Description } from "@radix-ui/react-dialog";

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
      description:
        "SkySocial is a social media application that includes features like creating posts, commenting, liking posts, following and unfollowing users, and real-time chat functionality. ",
      skills: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Crypto-js",
        "Express.js",
        "Cloudinary",
        "ShadCN ui",
        "tailwind CSS",
      ],
    },
    {
      title: "Natours",
      image: "/projects/natours.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://natour-web-app.netlify.app/",
      category: "fullstack",
      description:
        "Natours is a tour booking application where users can book tours, check the weather forecast for the destination, and complete payments through Stripe.",
      skills: [
        "React.js",
        "Node.js",
        "Stripe",
        "Express.js",
        "Cloudinary",
        "tailwind CSS",
      ],
    },
    {
      title: "dev.com",
      image: "/projects/Devcom.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://dev-com.netlify.app/",
      category: "frontend",
      description: "A simple static frontend project built with React.js.",
      skills: ["React.js", "tailwind CSS", "JavaScript"],
    },
    {
      title: "ScrapeGit",
      image: "/projects/scrapeGit.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://fyle-frontend-challenge-1.netlify.app/",
      category: "frontend",
      description:
        "ScrapeGit is a web application where users can scrape GitHub profiles using the GitHub API. This project was developed as an assignment.",
      skills: ["Angular.js", "Github Api", "tailwind CSS"],
    },
    {
      title: "Topic",
      image: "/projects/topic.png",
      githubLink: "https://github.com/Saurabhchaudhary9799/TourWebsite",
      liveLink: "https://get-topics.netlify.app/",
      category: "frontend",
      description: "A simple frontend project built using React.js.",
      skills: ["React.js", "JavaScript", "tailwind CSS"],
    },
  ];

  const fullStackProjects = projects.filter(
    (item) => item.category === "fullstack"
  );
  const frontendProjects = projects.filter(
    (item) => item.category === "frontend"
  );

  return (
    <section className="projects-section">
      <div className="flex gap-x-10 text-xl">
        <div
          className="cursor-pointer text-sm md:text-lg"
          onClick={() => setCategory("all")}
          style={{
            borderBottom: category === "all" ? "2px solid #FBBF24" : "none",
          }}
        >
          All
        </div>
        <div
          className="cursor-pointer text-sm md:text-lg"
          onClick={() => setCategory("fullstack")}
          style={{
            borderBottom:
              category === "fullstack" ? "2px solid #FBBF24" : "none",
          }}
        >
          Full Stack
        </div>
        <div
          className="cursor-pointer text-sm md:text-lg"
          onClick={() => setCategory("frontend")}
          style={{
            borderBottom:
              category === "frontend" ? "2px solid #FBBF24" : "none",
          }}
        >
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
                viewport={{ once: true }}  
                custom={index}
                key={index}
                whileHover="hover" // Apply shaking effect on hover
                className=" project rounded flex flex-col gap-y-2 bg-[#2B2B2C] overflow-hidden  px-3 py-2"
                // variants={shakeEffect} // Add the shake effect variant
              >
                <div>
                  <Image
                    className="rounded"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={700}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-[#FBBF24] font-bold">{item.title}</h1>
                  <p className="text-sm font-regular">{item.description}</p>
                  <h1 className="text-sm font-regular">Technologies used : </h1>
                  <div className="flex flex-wrap gap-2 text-sm ">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="border p-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href={item.githubLink} className="flex items-center gap-x-2 bg-[#FBBF24] text-black p-2 rounded" target="_blank">
                      <span><BsGithub/></span> Github
                    </Link>
                    <Link href={item.liveLink} className="flex items-center gap-x-2 bg-[#FBBF24] text-black p-2 rounded" target="_blank">
                    <span><FaLink/></span> Live
                    </Link>
                  </div>
                </div>
                {/* Overlay div */}
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
                viewport={{ once: true }}  
                custom={index}
                key={index}
                whileHover="hover" // Apply shaking effect on hover
                className=" project rounded flex flex-col gap-y-2 bg-[#2B2B2C] overflow-hidden px-3 py-2"
                // variants={shakeEffect} // Add the shake effect variant
              >
                <div>
                  <Image
                    className="rounded"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={700}
                  />
                </div>
                <div className="space-y-2 ">
                  <h1 className="text-[#FBBF24] font-bold">{item.title}</h1>
                  <p className="text-sm font-regular">{item.description}</p>
                  <h1 className="text-sm font-regular">Technologies used : </h1>
                  <div className="flex flex-wrap gap-2 text-sm ">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="border p-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href={item.githubLink} className="flex items-center gap-x-2 bg-[#FBBF24] text-black p-2 rounded" target="_blank">
                      <span><BsGithub/></span> Github
                    </Link>
                    <Link href={item.liveLink} className="flex items-center gap-x-2 bg-[#FBBF24] text-black p-2 rounded" target="_blank">
                    <span><FaLink/></span> Live
                    </Link>
                  </div>
                </div>
                {/* Overlay div */}
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
                viewport={{ once: true }}  
                custom={index}
                key={index}
                whileHover="hover" // Apply shaking effect on hover
                className=" project rounded flex flex-col gap-y-2 bg-[#2B2B2C] overflow-hidden px-3 py-2"
                // variants={shakeEffect} // Add the shake effect variant
              >
                <div>
                  <Image
                    className="rounded"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={700}
                  />
                </div>
                <div className="space-y-2  ">
                  <h1 className="text-[#FBBF24] font-bold">{item.title}</h1>
                  <p className="text-sm font-regular">{item.description}</p>
                  <h1 className="text-sm font-regular">Technologies used : </h1>
                  <div className="flex flex-wrap gap-2 text-sm ">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="border p-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href={item.githubLink} className="flex items-center gap-x-2 bg-[#FBBF24] text-black p-2 rounded" target="_blank">
                      <span><BsGithub/></span> Github
                    </Link>
                    <Link href={item.liveLink} className="flex items-center gap-x-2 bg-[#FBBF24] text-black p-2 rounded" target="_blank">
                    <span><FaLink/></span> Live
                    </Link>
                  </div>
                </div>
                {/* Overlay div */}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
