import React from "react";
import { motion } from "framer-motion";

export default function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className="w-full py-10 bg-[#004D43] overflow-hidden rounded-tl-3xl rounded-tr-3xl">
      <div className="text flex border-t-[1px] border-zinc-400 border-b-[1px] whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[25vw] -mb-[.5vw] -mt-[3vw] text-white font-founder uppercase leading-none pr-10"
        >
          We are ochi
        </motion.h1> 
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[25vw] -mb-[.5vw] -mt-[3vw] text-white font-founder uppercase leading-none pr-10"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[25vw] -mb-[.5vw] -mt-[3vw] text-white font-founder uppercase leading-none pr-10"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}
