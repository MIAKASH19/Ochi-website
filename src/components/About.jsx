import React from "react";

export default function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full bg-[#CDEA68] py-10 sm:py-20 sm:mt-0 mt-1 h-auto sm:h-[130vh] px-4 sm:px-10 rounded-tl-3xl rounded-tr-3xl font-neue"
    >
      <h1 className="pb-10 text-[5vh] sm:text-[4vw] leading-[5vh] sm:leading-[4vw]  text-left">
        Ochi is a strategic partner for fast-growing tech businesses that need to
        raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex flex-col sm:flex-row w-full border-t-[1px] border-[#41500a] pt-5">
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
          <h2 className="text-3xl text-zinc-900 sm:text-5xl font-medium">Our Approach:</h2>
          <button className="text-sm text-white bg-zinc-900 py-4 px-8 rounded-full mt-5 flex uppercase items-center hover:bg-gray-800 transition">
            Read More
            <div className="bg-white w-3 h-3 rounded-full ml-5"></div>
          </button>
        </div>
        <div className="w-full sm:w-1/2 h-[50vh] sm:h-[70vh] bg-green-900 rounded-2xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Homepage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
