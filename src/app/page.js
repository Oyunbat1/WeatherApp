import Image from "next/image";

export default function Home() {
  return (
   <div className="grid grid-cols-2">
    <div className="bg-[#F3F4F6] h-screen flex flex-col items-center gap-10">
      <div className="w-[540px] h-[70px] bg-white rounded-2xl flex items-center mt-[40px] mr-[140px]">
        <img src="search.svg" className="w-[40px] ml-[20px]"></img>
        <input type="text"  className=" w-[420px] h-[40px] outline-none pl-[10px] placeholder:text-[26px] " placeholder="Search"></input>
      </div>
      <div className="w-[350px] h-[550px] bg-white rounded-2xl flex flex-col items-center">
        <div className="flex gap-8 justify-center items-center mt-[20px]">
        <div className="flex flex-col">
        <p className="text-[10px]">February 10 ,2025</p>
        <h1 className="text-[36px] font-semibold">Ulaanbaatar</h1>
        </div>
        <img src="room.svg"></img>
        </div>
        <div className="pt-[50px]">
          <img src="icon.png" className="w-[200px]"></img>
        </div>
        <div className="mr-[60px]">
          <h1 className="text-[80px] font-bold">-12.1</h1>
          <p className="">Freezing fog</p>
        </div>
      </div>
    </div>
    <div className="bg-[#0F141E] h-screen text-white">hello</div>
   </div>
  );
}
