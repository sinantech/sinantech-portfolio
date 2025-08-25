"use client";

import { motion } from "framer-motion";

const recktangleVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

const Recktangle = () => {
  return (
    <>
      <motion.div
        variants={recktangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.6, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-30 bg-[#1b162b]"
      />
      <motion.div
        variants={recktangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.6, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-30 bg-[#1b162b]"
      />
    </>
  );
};

export default Recktangle;
