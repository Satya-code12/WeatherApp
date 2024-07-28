import * as React from "react";
import Clouds from "../assets/pcloudy.png";
import Clear from "../assets/clear.png";
import Rain from "../assets/rain.png";
import { FetchWeather, WeatherType } from "../service";
import debounce from "../utils/debounce";

export interface IWeatherCardProps {
  lat: number;
  lon: number;
}

export function WeatherCard(props: IWeatherCardProps) {
  const [locationName, setLocationName] = React.useState<string | null>(null);
  const [temprature, setTemperature] = React.useState<number | null>(null);
  const [weatherType, setWeatherType] = React.useState<WeatherType | null>(
    null
  );

  const { lat, lon } = props;

  const getWeatherData = debounce(async () => {
    handleWeatherData();
  }, 1000);

  React.useEffect(() => {
    if (lat && lon) {
      setTimeout(() => {
        getWeatherData();
      }, 5000);
    }
  }, []);

  async function handleWeatherData() {
    try {
      const weatherData = await FetchWeather(lat, lon);

      if (typeof weatherData === "string") {
        throw weatherData;
      }

      setLocationName(weatherData.name);
      setTemperature(weatherData.main.temp);
      setWeatherType(weatherData.weather[0].main);
    } catch (error) {
      console.error(error);
    }
  }

  function getWeatherIcon() {
    switch (weatherType) {
      case "Clear":
        return Clear;
      case "Clouds":
        return Clouds;
      case "Rain":
        return Rain;
      default:
        return Clouds;
    }
  }
  // Component UI

  if (!locationName || !temprature) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="min-h-[450px] w-[320px]  rounded-[20px] bg-[#4d718329] backdrop-blur-sm shadow-sm shadow-[#4c6f8280]/20 relative pt-[10rem] pb-[3rem]">
      <img
        src={getWeatherIcon()}
        alt={weatherType as string}
        className={`absolute -top-[120px] -right-[35px] ${
          weatherType === "Rain"
            ? " scale-[0.7]"
            : weatherType === "Clear"
            ? "scale-[1.18]"
            : "scale-125"
        }`}
      />
      <p className="text-[40px]  w-[80%] mx-auto text-white font-light">
        <span className="font-semibold">{locationName}</span>{" "}
        {temprature.toFixed(1)} °C
      </p>
      <p className="text-[25px] text-white w-[80%] mx-auto mt-4 ">
        wind speed : 11 km
      </p>
      <p className="text-[25px] text-white w-[80%] mx-auto mt-4 ">
        Tuesday : 19:52
      </p>
      <p className="text-[25px] text-white w-[80%] mx-auto mt-4 ">Cloudy </p>
    </div>
  );
}
