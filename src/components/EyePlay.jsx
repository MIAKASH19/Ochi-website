import React, { useEffect, useState } from "react";

export default function EyePlay() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angel-180);
    });
  });

  return (
    <div className="eyes w-full h-screen bg-red-500 overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
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
    </div>
  );
}
