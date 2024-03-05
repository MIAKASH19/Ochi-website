import React from "react";

const Landing = () => {
  return (
    <div className="text-white bg-zinc-900 w-full h-screen pt-1">
      <div className="textstructure mt-40 px-10">
        {["we create", "eye opening", "presentations"].map(
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
    </div>
  );
};

export default Landing;
