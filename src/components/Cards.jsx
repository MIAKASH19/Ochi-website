import React from "react";

const Cards = () => {
  return (
    <div className="bg-zinc-900 px-10 py-16 flex gap-5 items-center text-white w-full h-screen">
      <div className="cardcontainer w-1/2">
        <div className="card w-full h-[55vh] rounded-2xl bg-[#004D43] flex justify-center relative items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 border-[2px] border-[#CDEA68] text-[#CDEA68] rounded-full font-neue tracking-wide uppercase px-4 py-1">©2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer w-1/4">
        <div className="relative cursor-pointer card w-full h-[55vh] rounded-2xl bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 border-[2px] rounded-full font-neue tracking-wide uppercase px-4 py-1 cursor-pointer hover:bg-white hover:text-black transition-all ease-in duration-300">rating 5.0 on clutch</button>
        </div>
      </div>
      <div className="cardcontainer w-1/4">
        <div className="relative cursor-pointer card w-full h-[55vh] rounded-2xl bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute bottom-5 left-5 border-[2px] rounded-full font-neue tracking-wide uppercase px-4 py-1 cursor-pointer hover:bg-white hover:text-black transition-all ease-in duration-300">business bootcamp alumni</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
