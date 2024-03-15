import React from "react";

export default function EyePlay() {
  return (
    <div className="eyes w-full h-screen bg-red-500 overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="w-[13vw] flex items-center justify-center h-[13vw] bg-zinc-100 rounded-full">
                <div className="w-2/3 bg-black h-2/3 rounded-full flex items-center justify-center">
                    <div className="w-1/4 bg-zinc-100 h-1/4 rounded-full"></div>
                </div>
            </div>
            <div className="w-[13vw] flex items-center justify-center h-[13vw] bg-zinc-100 rounded-full">
                <div className="w-2/3 bg-black h-2/3 rounded-full flex items-center justify-center">
                    <div className="w-1/4 bg-zinc-100 h-1/4 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
