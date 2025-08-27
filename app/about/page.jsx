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
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* image and social icons */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10">
            1
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About Me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Jake</span>Doe
              </h2>
              <p className="max-w-[540px] mb-12">
                I focus on creating visually stunning,user friendlly web
                experiences that not only look great but also function
                seamlessly, ensuring every detail is carefully designed and
                executed.
              </p>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default about;
