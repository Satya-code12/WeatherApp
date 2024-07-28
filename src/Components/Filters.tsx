import React from "react";


const Filters =()=>{
  return(
    <div className=" h-[45px] w-[450px] bg-[#24343D] rounded-lg px-4 py-1 ">
      <div className="flex justify-between h-full w-full">
      <p className="text-[20px] text-white">Filters</p>
      <select name="Weather" id="" className="rounded-lg bg-[#1F2D346E] border border-white text-white outline-none">
        <option value="Coldest">Coldest</option>
        <option value="Coldest">Hotest</option>
        <option value="Coldest">Hot</option>
      </select>
      <select name="Weather2" id="" className="rounded-lg bg-[#1F2D346E] border border-white text-white outline-none">
        <option value="Coldest">Coldest</option>
        <option value="Coldest">Hotest</option>
        <option value="Coldest">Hot</option>
      </select>
      <select name="Weather3" id="" className="rounded-lg bg-[#1F2D346E] border border-white text-white outline-none">
        <option value="Coldest">Coldest</option>
        <option value="Coldest">Hotest</option>
        <option value="Coldest">Hot</option>
      </select>
      </div>
    </div>
  );
}
export {Filters};