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
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 6,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 7,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 8,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 9,
    category: "frontend",
    title: "Launchwave Landing Page",
    description: "React + Tailwind Landing Page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
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
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-04 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=actvie]:border-accent h-[48px] px-6 rounded-full"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default work;
