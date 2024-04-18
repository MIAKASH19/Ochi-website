import React from "react";

export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className=" w-full bg-[#CDEA68] py-20 h-[130vh] px-10 rounded-tl-3xl rounded-tr-3xl text-[4vw] leading-[4vw] font-neue">
      <h1 className="pb-10">
        Ochi is a strategic partner for fast-growing tech business that need to
        raise funds, sell products, explain complex ideas, and hire greate
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#41500a] pt-5 flex font-neue">
        <div className="w-1/2">
          <h1 className="text-5xl">Our Approach:</h1>
          <button className="text-sm text-white bg-black py-4 px-8 rounded-full mt-5 flex uppercase items-center">
            Read More
            <div className="bg-white w-3 h-3 rounded-full ml-5"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-green-900 rounded-2xl overflow-hidden">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="w-full h-full bg-cover" />
        </div>
      </div>
    </div>
  );
}
