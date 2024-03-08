import React from "react";

const Landing = () => {
  return (
    <div className="text-white bg-zinc-900 w-full h-screen pt-1">
      <div className="textstructure mt-40 px-10">
        {["we create", "eye-opening", "presentations"].map(
          (masktext, index) => {
            return (
              <div key={index} className="masker ">
                <h1 className="font-founder font-bold text-8xl uppercase leading-none tracking-tight">
                  {masktext}
                </h1>
              </div>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-16 flex justify-between items-center p-3 px-10">
        {[
          "For public and provate companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
            return <p className="text-md font-neue leading-none">{item}</p>
        })}
      </div>
    </div>
  );
};

export default Landing;
