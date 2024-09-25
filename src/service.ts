import { TempratureUnit } from "./types";

export type WeatherAPIData = {
  name: string;
  main: {
    temp: number;
    [key: string]: object | string | number;
  };
  weather: [
    {
      main: WeatherType;
      [key: string]: object | string | number;
    }
  ];
  [key: string]: object | string | number;
};

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface SearchResult extends Coordinates {
  name: string;
  country: string;
  state: string;
  [key: string]: object | string | number;
}

export type WeatherType = "Clear" | "Clouds" | "Rain" | "Snow";

const APP_ID = "51b7e07a039253d3045ad93e4794f3ec";

export async function FetchWeather(
  lat: number,
  lon: number,
  tempratureUnit: TempratureUnit = "metric"
): Promise<WeatherAPIData | string> {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&lat=${lat}&lon=${lon}&units=${tempratureUnit}`;

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

export async function FetchCoordinates(
  query: string
): Promise<SearchResult[] | null> {
  const url = `http://api.openweathermap.org/geo/1.0/direct?appid=${APP_ID}&q=${query}&limit=5`;

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

export async function GetUserCoordinates(): Promise<Coordinates | null> {
  return new Promise(async (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lon: longitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
}