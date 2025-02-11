import InputField from "./input/input"

const Light = function(){
    return (
        <div>
         <div className="  bg-[#F3F4F6] h-screen flex flex-col items-center gap-0 relative">
          
        <InputField/>
     <div className="z-10 w-[450px] h-[660px] flex justify-center items-center relative mb-[100px]  ">
     <img src="sun.svg" className="absolute top-[-40px] right-[300px]"></img>
           <div className=" backdrop-blur-2xl z-20 w-[350px] h-[550px]  rounded-2xl flex flex-col items-center shadow-lg">
       
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
         <h1 className="text-[80px] font-bold bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent ">-12.1°</h1>
         <p className="text-[#FF8E27]">Bright</p>
       </div>
       <div className="flex justify-center gap-10 pt-4">
     <img src="Home.svg" className="w-[24px]"></img>
     <img src="Pin.svg" className="w-[24px]" ></img>
     <img src="Heart.svg" className="w-[24px]"></img>
     <img src="User.svg" className="w-[24px]"></img>
     </div>
     </div>
     </div>

    
   </div>
        </div>
    )
}


export default Light