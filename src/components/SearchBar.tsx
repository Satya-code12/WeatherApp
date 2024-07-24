import * as React from "react";

export interface ISearchBarProps {}

export function SearchBar(props: ISearchBarProps) {
  return (
    <div className="bg-[#364f5d] text-white w-[220px] h-[40px] rounded-[8px] p-1 px-3">
      <input
        placeholder="Search here"
        className="bg-transparent outline-none w-full h-full"
      />
    </div>
  );
}
