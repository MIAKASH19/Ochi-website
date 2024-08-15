import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const Landing = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="text-white bg-zinc-900 w-full h-screen pt-10 font-neue"
    >
      <div className="textstructure mt-20 sm:mt-36 px-6 sm:px-10">
        {["we create", "eye-opening", "presentations"].map((masktext, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isSmallScreen ? "18vw" : "10vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.8,
                      duration: 0.7,
                    }}
                    className="w-[18vw] bg-green-500 h-[11vw] sm:h-[6vw] relative top-[1.5vw] sm:top-[.5vw] mr-[2vw] sm:mr-[1vw] rounded-md overflow-hidden object-contain mb-1"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt="ochi_image"
                      className="w-full h-full bg-cover"
                    />
                  </motion.div>
                )}
                <h1 className="font-founder font-semibold text-[17vw] sm:text-[9vw] uppercase leading-[13vw] sm:leading-[7.3vw]">
                  {masktext}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-16 sm:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-3 sm:px-10 gap-8 sm:gap-0">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="text-md sm:text-md font-DM  leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex gap-4 sm:gap-3">
          <div className="border-[1px] px-8 sm:px-12 border-zinc-500 uppercase cursor-pointer text-xs sm:text-sm py-2 rounded-full hover:bg-white hover:text-black transition ease-in duration-300 tracking-wide">
            Start the Project
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-zinc-500 border-[1px] flex items-center justify-center hover:bg-white hover:text-black transition ease-in duration-100">
            <MdArrowOutward size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
