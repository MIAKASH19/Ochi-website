import React, { useEffect, useState } from "react";

const EyePlay2 = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.6"
        className="relative py-12 sm:py-20 bg-[#CDEA68] w-full h-1/2 sm:h-full flex flex-col items-center justify-center"
      >
        {["ready", "to Start", "the project?"].map((item, index) => (
          <h1
            key={index}
            className="text-[#222222] text-[10vw] sm:text-[15vw] md:text-[20vh] lg:text-[33vh] font-founder leading-[8vw] sm:leading-[12vw] md:leading-[16vh] lg:leading-[23vh] uppercase text-center"
          >
            {item}
          </h1>
        ))}
        <div className="btns mt-10 flex flex-col items-center gap-5">
          <button className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5 sm:py-3 rounded-full font-neue uppercase bg-[#222222] text-white text-xs sm:text-sm hover:bg-white cursor-pointer hover:text-black transition-all duration-200 ease-in">
            Start the project
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
          <h4 className="font-neue uppercase text-xs sm:text-sm">or</h4>
          <button className="flex items-center justify-between gap-4 border-[1px] px-4 py-2 sm:px-5 sm:py-3 rounded-full font-neue uppercase border-black text-xs sm:text-sm hover:bg-[#222222] cursor-pointer hover:text-white transition-all duration-200 ease-in">
            hello@ochi.design
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </button>
        </div>
        <div
          data-scroll
          data-scroll-speed=".5"
          className="sm:absolute fixed flex gap-10 sm:gap-16 lg:gap-20 top-1/5 sm:top-[40%] sm:left-1.2 left-1/5 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[20vw] sm:w-[13vw] flex items-center justify-center h-[20vw] sm:h-[13vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 bg-[#222222] h-2/3 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-6 bg-zinc-100 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[20vw] sm:w-[13vw] flex items-center justify-center h-[20vw] sm:h-[13vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 bg-[#222222] h-2/3 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-6 bg-zinc-100 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyePlay2;
