"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const about = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-fit h-[680px]">
          <div className="flex-1 bg-pink-50/10">1</div>
          <div className="flex-1 bg-blue-50/10">2</div>
        </div>
      </div>
    </motion.section>
  );
};

export default about;
