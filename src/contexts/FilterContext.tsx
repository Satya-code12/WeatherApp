import React from "react";

export type TempratureUnit = "metric" | "imperial";

interface IFilterContext {
  tempratureUnit: TempratureUnit;
  setTempratureUnit: (tempratureUnit: TempratureUnit) => void;
}

const FilterContext = React.createContext<IFilterContext | undefined>(
  undefined
);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [tempratureUnit, setTempratureUnit] =
    React.useState<TempratureUnit>("metric");

  return (
    <FilterContext.Provider value={{ tempratureUnit, setTempratureUnit }}>
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
