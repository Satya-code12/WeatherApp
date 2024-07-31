import React, { useEffect } from "react";
import PartlyCloudy from "../assets/pcloudy.png"; 
// import { weatherData } from "../ApiService";

const WeatherCard =(props: any)=>{

  const weatherData = {
    name: bhubaneswar
    main: {
      temp: number;
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=51b7e07a039253d3045ad93e4794f3ec&units=imperial`;

  const fetchWeatherData = async () =>{
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    }
    catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    fetchWeatherData();
  }, [])

  return(
    <div className="h-[450px] w-[320px]  rounded-[20px] bg-[#4d718329] backdrop-blur-sm shadow-sm shadow-[#4c6f8280]/20 relative pt-[10rem] ">
    <img
      src={PartlyCloudy}
      alt="partly cloudy"
      className="absolute -top-[90px] -right-[35px] scale-105"
    />
    <p className="text-[35px]  w-[80%] mx-auto text-white font-light">
      <span className="font-semibold">{weatherData.name}</span>{weatherData.main.temp}
    </p>
    <p className="text-[20px] text-white w-[80%] mx-auto mt-4 ">
      wind speed : 11 km
    </p>
    <p className="text-[20px] text-white w-[80%] mx-auto mt-4 ">
      Tuesday : 19:52
    </p>
    <p className="text-[20px] text-white w-[80%] mx-auto mt-4 ">Cloudy </p>
  </div>
  );
}

export {WeatherCard};