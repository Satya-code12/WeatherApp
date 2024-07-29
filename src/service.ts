import { TempratureUnit } from "./contexts/FilterContext";

export type WeatherAPIData = {
  name: string;
  main: {
    temp: number;
    [key: string]: any;
  };
  weather: [
    {
      main: WeatherType;
      [key: string]: any;
    }
  ];
  [key: string]: any;
};

export type WeatherType = "Clear" | "Clouds" | "Rain" | "Snow";

export async function FetchWeather(
  lat: number,
  lon: number,
  tempratureUnit: TempratureUnit = "metric"
): Promise<WeatherAPIData | string> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51b7e07a039253d3045ad93e4794f3ec&units=${tempratureUnit}`;

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw response.statusText;
      }
      const data = await response.json();
      resolve(data);
    } catch (error) {
      if (typeof error === "string") {
        reject(error);
      }

      reject("Something went wrong");
    }
  });
}
