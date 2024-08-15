import React, { useEffect, useState } from "react";

export default function EyePlay() {
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex items-center">
      <div
        data-scroll
        data-scroll-speed="-0.6"
        className="relative w-full h-1/2 sm:h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-6 md:gap-10 lg:gap-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[25vw] md:w-[15vw] lg:w-[13vw] flex items-center justify-center h-[25vw] md:h-[15vw] lg:h-[13vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 bg-[#333333] h-2/3 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-8 bg-zinc-100 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[25vw] md:w-[15vw] lg:w-[13vw] flex items-center justify-center h-[25vw] md:h-[15vw] lg:h-[13vw] bg-zinc-100 rounded-full">
            <div className="w-2/3 bg-[#333333] h-2/3 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
              >
                <div className="w-8 bg-zinc-100 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
