import React from "react";

export default function Featured() {
  return (
    <div className="w-full relative py-12 bg-zinc-900 h-[145vh]">
      <div className="w-full px-10 ">
        <h1 className="border-b-[1px] pb-8 border-zinc-600 text-5xl text-white font-neue">
          Featured projects
        </h1>
        <div className="cards w-full flex gap-10  py-8">
          <div className="cardcontainer relative w-1/2  h-[85vh] ">
            <h3 className="text-white flex items-center gap-3 mb-5 font-neue">
              <div className="w-2 h-2 bg-white rounded-full"></div>FYDE
            </h3>
            <h1 className=" left-full text-[#CDEA68] text-[130px] -translate-x-1/2 leading-none absolute font-founder z-[9] -translate-y-1/2 top-1/2">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="overflow-hidden card bg-green-900 rounded-xl duration-500 transition-all ease-in-out w-full h-full hover:scale-75">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="btns flex gap-2 mt-3">
              {["Audit", "copywriting", "sales deck", "slides design"].map(
                (item, index) => (
                  <span className="border-[1px] rounded-[20px] px-4 py-1 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out uppercase cursor-pointer font-neue">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="cardcontainer w-1/2 relative h-[85vh]">
          <h3 className="text-white flex items-center gap-3 mb-5 font-neue">
              <div className="w-2 h-2 bg-white rounded-full"></div>TRAWA
            </h3>
            <h1 className=" right-full text-[#CDEA68] text-[130px] translate-x-1/2 leading-none absolute font-founder z-[9] -translate-y-1/2 top-1/2">
              {"TRAWA".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="overflow-hidden card bg-green-900 rounded-xl duration-500 transition-all ease-in-out w-full h-full hover:scale-75">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="btns flex gap-2 mt-3">
              {["brand identity", "design research", "investor deck"].map(
                (item, index) => (
                  <span className="border-[1px] rounded-[20px] px-4 py-1 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out uppercase cursor-pointer font-neue">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
        <button className="absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-between gap-5 text-white border-[1px] px-10 py-3 hover:bg-white hover:text-black transition-all ease-in duration-400 font-neue">
          View Projects
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </button>
    </div>
  );
}
