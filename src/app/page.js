import Dark from "@/components/dark/dark";
import Light from "@/components/light/light";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="absolute z-10  w-[940px] h-[940px] border rounded-full flex justify-center items-center">
      <div className="absolute z-10  w-[540px] h-[540px] border rounded-full flex justify-center items-center">
      <div className="absolute z-10  w-[340px] h-[340px] border rounded-full flex justify-center items-center ">
      <div className="absolute z-10 w-[139px] h-[139px] bg-[#F3F4F6]  rounded-full" ></div>
      <div className="absolute z-10 w-[40px] h-[40px] bg-[#81a1e1] mb-[176px] ml-[42px] rounded-bl-[10px]" ></div>
      <div className="absolute z-10 w-[40px] h-[40px] bg-[#81a1e1] mb-[-176px] ml-[42px] rounded-tl-[10px]" ></div>
      <div className="absolute z-10 w-[40px] h-[40px] mb-[40px] mr-[38px]" >
        <img src="vec-left.svg"></img>
      </div>
      <div className="absolute z-10 w-[40px] h-[42px] mb-[46px] ml-[48px]" >
        <img src="vec-right.svg" className="w-[40px] h-[88px]"></img>
      </div>
      <div className="absolute z-10 w-[140px] h-[140px] border clip-path-half rounded-full flex justify-center items-center ">
      </div>
        </div>
      </div>
      </div>
    <div className="grid grid-cols-2 max-md:flex max-md:flex-col w-screen">
    <Light></Light>
    <Dark></Dark>
    </div>
    </div>
   
  );
}
