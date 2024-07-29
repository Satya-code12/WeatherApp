import { Filters } from "../components/Filters";
import { SearchBar } from "../components/SearchBar";
import { WeatherCard } from "../components/WeatherCard";

export function Home() {
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
        <div className="flex justify-between mx-auto">
          {/* Angul */}
          <WeatherCard lat={20.8653} lon={85.1842} />
          {/* Dehradun */}
          <WeatherCard lat={30.3165} lon={78.0322} />
          {/* Los Angeles */}
          <WeatherCard lat={40.066} lon={-79.892} />
        </div>
      </section>
    </div>
  );
}
