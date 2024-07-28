import React from "react";
import PartlyCloudy from "../assets/pcloudy.png"; 

const WeatherCard =()=>{
  return(
    <div className="h-[450px] w-[320px]  rounded-[20px] bg-[#4d718329] backdrop-blur-sm shadow-sm shadow-[#4c6f8280]/20 relative pt-[10rem] ">
    <img
      src={PartlyCloudy}
      alt="partly cloudy"
      className="absolute -top-[90px] -right-[35px] scale-105"
    />
    <p className="text-[35px]  w-[80%] mx-auto text-white font-light">
      <span className="font-semibold">Tehran</span> 35°C
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