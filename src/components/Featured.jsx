import { motion, useAnimation } from "framer-motion";
import React from "react";

export default function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full relative sm:py-12 py-20 bg-zinc-900 min-h-screen">
      <div className="w-full px-4 sm:px-10">
        <h1 className="border-b border-zinc-600 pb-8 text-3xl sm:text-5xl text-white font-neue">
          Featured projects
        </h1>
        <div className="cards w-full flex flex-col sm:flex-row gap-40 sm:gap-8 py-8">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full sm:w-1/2 h-[70vh] sm:h-[85vh]"
          >
            <h3 className="text-white flex items-center gap-3 mb-5 font-neue text-xl sm:text-2xl">
              <div className="w-2 h-2 bg-white rounded-full"></div>FYDE
            </h3>
            <h1 className="flex overflow-hidden left-full text-[#CDEA68] text-[8vw] sm:text-[130px] -translate-x-1/2 leading-none absolute font-founder z-[9] -translate-y-1/2 top-1/2">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="overflow-hidden card bg-green-900 rounded-xl duration-500 transition-all ease-in-out w-full h-full hover:scale-95">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
            <div className="btns flex flex-wrap gap-2 mt-3">
              {["Audit", "copywriting", "sales deck", "slides design"].map((item, index) => (
                <span
                  key={index}
                  className="border-[1px] rounded-full px-4 py-1 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out uppercase cursor-pointer font-neue text-xs sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full sm:w-1/2 h-[70vh] sm:h-[85vh]"
          >
            <h3 className="text-white flex items-center gap-3 mb-5 font-neue text-xl sm:text-2xl">
              <div className="w-2 h-2 bg-white rounded-full"></div>TRAWA
            </h3>
            <h1 className="flex overflow-hidden right-full text-[#CDEA68] text-[8vw] sm:text-[130px] translate-x-1/2 leading-none absolute font-founder z-[9] -translate-y-1/2 top-1/2">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="overflow-hidden card bg-green-900 rounded-xl duration-500 transition-all ease-in-out w-full h-full hover:scale-95">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt="TRAWA"
              />
            </div>
            <div className="btns flex flex-wrap gap-2 mt-3">
              {["brand identity", "design research", "investor deck"].map((item, index) => (
                <span
                  key={index}
                  className="border-[1px] rounded-full px-4 py-1 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out uppercase cursor-pointer font-neue text-xs sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <button className="absolute sm:-bottom-24 -bottom-28 left-1/2 -translate-x-1/2 rounded-full flex items-center justify-between gap-5 text-white border-[1px] sm:px-6 px-10 py-3 sm:py-2 hover:bg-white hover:text-black transition-all ease-in duration-400 font-neue text-xs sm:text-sm">
        View Projects
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </button>
    </div>
  );
}
