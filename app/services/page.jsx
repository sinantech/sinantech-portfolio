"use client";

import { motion } from "framer-motion";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const service = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Website interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Backend Development",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "Search Engine Optimization",
  },
  {
    icon: "/assets/services/video.svg",
    href: "",
    title: "Video Production",
  },
];

const services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div>
          <h2>
            Custom <span>Web Solutions</span>to Boost Your Business
          </h2>
        </div>
        {/* slider */}
        <div>slider</div>
      </div>
    </motion.section>
  );
};

export default services;
