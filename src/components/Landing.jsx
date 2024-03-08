import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  return (
    <div className="text-white bg-zinc-900 w-full h-screen pt-1 font-neue">
      <div className="textstructure mt-36 px-10">
        {["we create", "eye-opening", "presentations"].map(
          (masktext, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-center">
                  {index === 1 && (
                    <div className="w-[10vw] bg-green-500 h-[6vw] relative top-[.5vw] mr-[1vw] rounded-md overflow-hidden object-contain">
                      <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="ochi_image" />
                    </div>
                  )}
                  <h1 className="font-founder font-semibold text-[9vw] uppercase leading-[7.3vw]">
                    {masktext}
                  </h1>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-20 flex justify-between items-center p-3 px-10">
        {[
          "For public and provate companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="text-md font-neue leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex gap-3 ">
          <div className="border-[1px] px-12 border-zinc-500 uppercase cursor-pointer text-sm py-2 rounded-full hover:bg-white hover:text-black transition ease-in duration-300 tracking-wide">
            Start the Project
          </div>
          <div className="w-10 h-10 rounded-full border-zinc-500 border-[1px] flex items-center justify-center hover:bg-white hover:text-black transition ease-in duration-100">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
