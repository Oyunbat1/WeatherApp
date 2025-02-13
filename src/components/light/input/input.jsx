"use client";
import { useState } from "react";


const InputField = function (props) {
  const [selectCountry , setSelectedCountry ] =useState([]);
  const [filteredCountry , setFilteredCountries ] = useState(props.filteredCountry);

    const onChangeSearchValue = (e)=>{
    const data = props.countries.filter(country => country.toLowerCase().startsWith(e.target.value)).slice(0,4);
    props.setFilteredCountries(data);
  }
  

  function SelectCountry(index){
    setSelectedCountry(filteredCountry[index]);
    props.setFilteredCountries([]);
  }
  
  return (
    <div className="z-20 flex flex-col">
      <div className="  max-xl:ml-[160px] max-lg:w-[380px] max-lg:mr-[150px] max-md:w-[340px] max-md:mr-[160px] w-[500px] h-[70px] bg-white rounded-full flex items-center mt-[80px] mr-[140px] shadow-lg">
        <img src="search.svg" className="w-[40px] ml-[20px]"></img>
        <input
          type="text"
          className=" w-[420px] h-[40px] outline-none pl-[10px] bg-transparent placeholder:text-[26px] text-[22px] placeholder:font-bold font-bold"
          placeholder="Search" onChange={onChangeSearchValue}
        ></input>
      </div>
   <div className="w-[500px] bg-white/80 rounded-2xl mt-[8px] max-xl:ml-[160px] max-lg:w-[380px]  max-md:w-[340px]  ">
   {props.filteredCountry.map((country ,index) => (<div onClick={()=>SelectCountry(index)} className=" py-[4px] pl-[26px] font-semibold  flex items-center gap-3" key={country+index}>
        <img className="w-[30px]" src="Pin.svg"></img>
        {country}
      </div>))}
   </div>
    </div>
  );
};

export default InputField;
