const Dark = function () {
  return (
    <div>
      <div className="bg-[#0F141E] h-screen text-white flex  items-center justify-center   ">
        <div className="z-10 w-[450px] h-[660px] flex justify-center items-center relative mb-[100px] mt-[40px]">
          <img
            src="moonbottom.svg"
            className="absolute bottom-[0px] left-[280px] "
          ></img>
          <div className="backdrop-blur-2xl z-20 w-[350px]  h-[550px]  rounded-2xl flex flex-col items-center shadow-lg">
            <div className="flex gap-8 justify-center items-center mt-[20px]">
              <div className="flex flex-col">
                <p className="text-[10px]">September 10 ,2021</p>
                <h1 className="text-[36px] font-semibold">Krakow</h1>
              </div>
              <img src="room.svg"></img>
            </div>
            <div className="pt-[50px]">
              <img src="moon.png" className="w-[200px]"></img>
            </div>
            <div className="mr-[60px]">
              <h1 className="text-[80px] font-bold bg-gradient-to-b from-gray-50 to-transparent bg-clip-text text-transparent">
                -26.7°
              </h1>
              <p className="text-[#777CCE]">Clear</p>
            </div>
            <div className="flex justify-center gap-10 pt-4">
              <img src="Home.svg" className="w-[24px]"></img>
              <img src="Pin.svg" className="w-[24px]"></img>
              <img src="Heart.svg" className="w-[24px]"></img>
              <img src="User.svg" className="w-[24px]"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dark;
