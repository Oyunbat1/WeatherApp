import Dark from "@/components/dark/dark";
import Light from "@/components/light/light";
import BackgroundDeco from "@/components/background-dec/bgDec";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <BackgroundDeco></BackgroundDeco>
    <div className="grid grid-cols-2 max-md:flex max-md:flex-col w-screen ">
    <Light></Light>
    <Dark></Dark>
    </div>
    </div>
   
  );
}
