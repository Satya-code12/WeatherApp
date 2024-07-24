import * as React from "react";

export interface IFiltersProps {}

export function Filters(props: IFiltersProps) {
  return (
    <div className="bg-[#24343D] text-white w-fit h-[40px] rounded-[8px] px-6 p-1 flex items-center gap-x-4">
      <span>Filters</span>
      <div className="bg-black/40 h-full w-fit px-4 py-1 rounded-md border border-white/40">
        Coldest
      </div>
      <div className="bg-black/40 h-full w-fit px-4 py-1 rounded-md border border-white/40">
        Coldest
      </div>
      <div className="bg-black/40 h-full w-fit px-4 py-1 rounded-md border border-white/40">
        Coldest
      </div>
    </div>
  );
}
