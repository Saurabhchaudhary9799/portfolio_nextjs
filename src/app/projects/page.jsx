"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  console.log("fullstack", fullStackProjects);
  console.log("frontend", frontendProjects);
  return (
    <section className="projects-section px-10 py-5">
      <div className="flex gap-x-10 text-xl">
        <div
          className="cursor-pointer  "
          onClick={() => setCategory("all")}
          style={{
            borderBottom: category === "all" ? "2px solid #FBBF24" : "none",
          }}
        >
          All
        </div>
        <div
          className="cursor-pointer "
          onClick={() => setCategory("fullstack")}
          style={{
            borderBottom:
              category === "fullstack" ? "2px solid #FBBF24" : "none",
          }}
        >
          Full Stack Projects
        </div>
        <div
          className="cursor-pointer "
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
          <div className="flex flex-col gap-y-5 justify-center items-center">
            {projects.map((item, i) => (
              <div
                className="project border  p-3 rounded-xl flex flex-col gap-y-2 bg-[#2B2B2C]"
                key={i}
              >
                <div>
                  <Image
                    className="rounded-xl"
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
              </div>
            ))}
          </div>
        )}
        {category === "fullstack" && (
          <div className="flex flex-col gap-y-5 justify-center items-center">
            {fullStackProjects.map((item, i) => (
              <div
                className="project border  p-3 rounded-xl flex flex-col gap-y-2 bg-[#2B2B2C]"
                key={i}
              >
                <div>
                  <Image
                    className="rounded-xl"
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
              </div>
            ))}
          </div>
        )}
        {category === "frontend" && (
          <div className="flex flex-col gap-y-5 justify-center items-center">
            {frontendProjects.map((item, i) => (
              <div
                className="project border  p-3 rounded-xl flex flex-col gap-y-2 bg-[#2B2B2C]"
                key={i}
              >
                <div>
                  <Image
                    className="rounded-xl"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
