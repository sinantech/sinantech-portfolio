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
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* headline */}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Custom <span className="text-accent">Web Solutions</span>to Boost
            Your Business
          </h2>
          {/* btn */}
          <button className="btn btn-lg btn-accent flex gap-2">
            All Services <MdArrowRightAlt />
          </button>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {service.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-secondary/90 w-full h-[284px] px-[30px] py-[40px] flex flex-col justify-between ">
                  <div>
                    <Image src={item.icon} width={48} height={48} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default services;
