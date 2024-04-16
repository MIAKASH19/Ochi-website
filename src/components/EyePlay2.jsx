import React, { useEffect, useState } from "react";

const EyePlay2 = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angel - 180);
    });
  });

  return (
    <div className="relative bg-[#CDEA68] w-full h-[120vh] flex items-center flex-col justify-center">
      {["ready", "to Start", "the project"].map((item, index) => (
        <h1 className="text-black text-[30vh] font-founder leading-[23vh] uppercase">
          {item}
        </h1>
      ))}
      <div className="btns mt-10 flex flex-col items-center justify-center gap-5">
        <button className="flex items-center justify-between gap-4 px-5 py-3 rounded-full font-neue uppercase bg-black text-white text-[13px] hover:bg-white cursor-pointer hover:text-black transition-all duration-200 ease-in">
          Start the project
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
        <h4 className="font-neue uppercase text-[13px]">or</h4>
        <button className="flex items-center justify-between gap-4 border-[1px] px-5 py-3 rounded-full font-neue uppercase border-black text-[13px]  hover:bg-black cursor-pointer hover:text-white transition-all duration-200 ease-in">
          hello@ochi.design
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </button>
      </div>
      <div className="absolute flex gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="w-[13vw] flex items-center justify-center h-[13vw] bg-zinc-100 rounded-full">
          <div className="w-2/3 bg-black h-2/3 rounded-full relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-8 bg-zinc-100 h-8 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[13vw] flex items-center justify-center h-[13vw] bg-zinc-100 rounded-full">
          <div className="w-2/3 bg-black h-2/3 rounded-full relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
            >
              <div className="w-8 bg-zinc-100 h-8 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyePlay2;
