"use client";

import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

//data
const projects = [
  {
    id: 1,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "fullstack",
    title: "Nextfolio Portfolio Site",
    description: "Next.js Portfolio Site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "Authboard Deashboard",
    description: "Mern app with authentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Express", "Mongodb", "React", "Node.js"],
  },
  {
    id: 4,
    category: "fullstack",
    title: "Chatsync Platform",
    description: "Real time MERN app with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["mern", "Socket.io", "Redux"],
  },
  {
    id: 5,
    category: "uiux",
    title: "flowomobile app design",
    description: "mobile firs figma design",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["figma", "adobde xd"],
  },
  {
    id: 6,
    category: "uiux",
    title: "shopease dashboard redesign",
    description: "redesign of e-commerce dashboard",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["whimsical", "figma", "Framer"],
  },
  {
    id: 7,
    category: "branding",
    title: "brewhaus brand identity",
    description: "a bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["illustrator", "photoshop", "figma"],
  },
  {
    id: 8,
    category: "branding",
    title: "lunaskin luxury branding",
    description: "elegant branding for a premium skincare product line ",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["figma", "photoshop", "canva"],
  },
  {
    id: 9,
    category: "branding",
    title: "novatach brand kit",
    description: "full brand for a tech startup including logo and brand look",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["illustrator", "figma", "notion"],
  },
];

//categories
const categories = ["frontend", "fullstack", "uiux", "branding"];

const work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mxauto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabslist */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-04 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=actvie]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div>
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper>
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return <SwiperSlide>{project.title}</SwiperSlide>;
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default work;
