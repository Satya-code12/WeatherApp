import React from "react";
import { SearchResult } from "../service";

export type TempratureUnit = "metric" | "imperial";

interface IFilterContext {
  searchLocation: SearchResult | null;
  setSearchLocation: (location: SearchResult | null) => void;
  tempratureUnit: TempratureUnit;
  setTempratureUnit: (tempratureUnit: TempratureUnit) => void;
}

const FilterContext = React.createContext<IFilterContext | undefined>(
  undefined
);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [tempratureUnit, setTempratureUnit] =
    React.useState<TempratureUnit>("metric");

  const [searchLocation, setSearchLocation] =
    React.useState<SearchResult | null>(null);

  return (
    <FilterContext.Provider
      value={{
        tempratureUnit,
        setTempratureUnit,
        searchLocation,
        setSearchLocation,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export { FilterProvider, useFilter };
