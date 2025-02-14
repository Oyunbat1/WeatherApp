"use client"
import Dark from "@/components/dark/dark";
import Light from "@/components/light/light";
import BackgroundDeco from "@/components/background-dec/bgDec";
import { useState , useEffect } from "react";

export default function Home() {
  const [countries , setCountries] = useState([]);
  const [weatherData,setWeatherData] = useState(null);
  const [filteredCountries , setFilteredCountries] = useState([]);
//

  useEffect(()=>{
    const getData = async () =>{
      const response = await fetch('https://countriesnow.space/api/v0.1/countries')
      const countries = await response.json();  

      const arr = [];

      countries.data.map((country) =>{
        country.cities.map(city => arr.push(`${city},${country.country}`))
      })
      setCountries(arr)
    }
    getData();
  },[])

  useEffect(()=>{
    const getWeatherData = async ()=>{
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a883db7833914b2189320617251402=${selectedCity}`);
      const fetchedData = await response.json();
      console.log(fetchedData);
    }
    getWeatherData()
  },[])

 

  return (
    <div className="flex justify-center items-center">
      <BackgroundDeco></BackgroundDeco>
    <div className="grid grid-cols-2 max-md:flex max-md:flex-col w-screen max-md:overflow-hidden overflow-hidden">
    <Light countries = {countries} setCountries ={setCountries} filteredCountry = {filteredCountries} setFilteredCountries = {setFilteredCountries} ></Light>
    <Dark></Dark>
    </div>
    </div>
   
  );
}
