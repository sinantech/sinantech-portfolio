"use client";

import { motion } from "framer-motion";
// Components
import Image from "next/image";
import Blob from "@/components/Blob";
import avatarImg from "@/public/assets/avatar.png";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px]">text</div>
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />
          {/* avatar image */}
          <Image
            src={avatarImg}
            alt=""
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-[120px]"
          />
          {/* overlay gradient */}
          <div className="w-full h-[164px] bg-pink-50/10 absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
