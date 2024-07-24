import { Filters } from "../components/Filters";
import { SearchBar } from "../components/SearchBar";
import { WeatherCard } from "../components/WeatherCard";

interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <div className="">
      <h3 className="text-center text-white text-[40px] w-[750px] mx-auto mt-[5rem]">
        Seeing the weather of the whole world with{" "}
        <span
          className="font-bold"
          style={{
            background: "-webkit-linear-gradient(#CAECFF, #78CFFF",
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
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </section>
    </div>
  );
}
