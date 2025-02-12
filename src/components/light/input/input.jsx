"use client";
import { useState } from "react";

const DATA = [
  {
    morning: {
      city: "Ulaanbaatar",
      temperature: "20.1^",
    },
    night: {
      city: "Ulaanbaatar",
      temperature: "-23.6^",
    },
  },
];

const InputField = function () {
  return (
    <div className="z-20">
      <div className="  max-xl:ml-[160px] max-lg:w-[380px] max-lg:mr-[150px] max-md:w-[340px] max-md:mr-[160px] w-[500px] h-[70px] bg-white rounded-full flex items-center mt-[80px] mr-[140px] shadow-lg">
        <img src="search.svg" className="w-[40px] ml-[20px]"></img>
        <input
          type="text"
          className=" w-[420px] h-[40px] outline-none pl-[10px] bg-transparent placeholder:text-[26px] text-[22px]"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default InputField;
