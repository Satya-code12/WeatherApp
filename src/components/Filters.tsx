import { TempratureUnit, useFilter } from "../contexts/FilterContext";

export function Filters() {
  const { tempratureUnit, setTempratureUnit } = useFilter();
  const tempratureUnits: { value: TempratureUnit; title: string }[] = [
    {
      value: "metric",
      title: "Celsius",
    },
    {
      title: "Farenheit",
      value: "imperial",
    },
  ];
  return (
    <div className="bg-[#24343D] text-white w-fit h-[40px] rounded-[8px] px-6 p-1 flex items-center gap-x-4">
      <span>Filters</span>
      <select
        className="bg-black/40 h-full w-fit px-4 py-1 rounded-md border border-white/40"
        value={tempratureUnit}
        onChange={(e) => setTempratureUnit(e.target.value as TempratureUnit)}
      >
        {tempratureUnits.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
