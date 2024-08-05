import React from "react";

import { Filters } from "../components/Filters";
import { SearchBar } from "../components/SearchBar";
import { WeatherCard } from "../components/WeatherCard";
import { useFilter } from "../contexts/FilterContext";
import { Coordinates, FetchCoordinates, GetUserCoordinates } from "../service";
import debounce from "../utils/debounce";

export function Home() {
  const { searchQuery } = useFilter();

  const [coordinates, setCoordinates] = React.useState<Coordinates | null>(
    null
  );

  const getCoordinates = debounce(async () => {
    const data = await FetchCoordinates(searchQuery);

    if (!data) {
      return;
    }
    const { lat, lon } = data[0];
    setCoordinates({ lat, lon });
  }, 1000);

  const getLocalCoordinates = debounce(async () => {
    const data = await GetUserCoordinates();
    if (!data) {
      setCoordinates({
        lat: 10,
        lon: 10,
      });
      return;
    }
    const { lat, lon } = data;
    setCoordinates({ lat, lon });
  }, 1000);

  React.useEffect(() => {
    setCoordinates(null);
    if (searchQuery !== "") {
      getCoordinates();
    } else {
      getLocalCoordinates();
    }
  }, [searchQuery]);

  return (
    <div className="">
      <h3 className="text-center text-white text-[40px] w-[750px] mx-auto mt-[5rem]">
        Seeing the weather of the whole world with{" "}
        <span
          className="font-bold"
          style={{
            background: "-webkit-linear-gradient(#CAECFF, #78CFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dark Weather!
        </span>
      </h3>
      <div className="flex justify-between mt-[5rem] mx-auto">
        <SearchBar />
        <Filters />
      </div>

      <section className="mt-[10rem] ">
        <div className="flex justify-center mx-auto">
          {coordinates ? (
            <WeatherCard {...coordinates} />
          ) : (
            <div className="text-white">Loading...</div>
          )}
        </div>
      </section>
    </div>
  );
}
