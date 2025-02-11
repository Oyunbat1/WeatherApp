import Dark from "@/components/dark/dark";
import Light from "@/components/light/light";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div className="absolute z-10  w-[940px] h-[940px] border rounded-full flex justify-center items-center">
      <div className="absolute z-10  w-[540px] h-[540px] border rounded-full flex justify-center items-center">
      <div className="absolute z-10  w-[340px] h-[340px] border rounded-full flex justify-center items-center ">
      <div className="absolute z-10 w-[140px] h-[140px] border rounded-full clip-path-half">
</div>

        </div>
      </div>
      </div>
    <div className="grid grid-cols-2 max-md:flex max-md:flex-col ">
    <Light></Light>
    <Dark></Dark>
    </div>
    </div>
   
  );
}
