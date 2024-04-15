import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center flex-col gap-6">
      <div className=" px-5 py-1 font-bold sm:text-5xl text-4xl sm:w-[80%] w-[100%] bg-gradient-to-r from-black via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        We specialize in crafting exceptional digital experiences to help our
        clients achieve their business goals .
      </div>

      <div className="px-5 sm:w-[80%] w-[100%] text-md text-gray-600">
        A fully integrated digital agency that will help you create beautiful
        website and solve your problem in your company .
      </div>

      <div className=" px-5 flex gap-10 items-center sm:w-[80%] w-[100%]">
        <Button name="Get started"></Button>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
