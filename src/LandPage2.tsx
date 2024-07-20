function Content (){
  return(
    <>
      <div className="flex flex-col justify-center items-center h-[3rem] mt-[2rem] w-[37rem] ml-[18rem] p-3 text-white">
        <h1 className="text-3xl">Seeing the weather of the whole world </h1>
        <p className="text-3xl text-white">with <b>Dark Weather</b>!</p>
      </div>
     <div className="flex mt-[2.5rem] ml-[9rem]">
        <div>
          <input className="h-[3rem] w-[15rem] rounded-md outline-0 p-1 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 border border-gray-300 text-white" type="text" placeholder="Search Here" />
        </div>
        <div className=" h-9 flex ml-[18.5rem] backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 rounded-md h-[3rem] w-[20rem] border border-gray-300">
          <h1 className="text-white p-[.6rem]" >Filters</h1>

          <select className="m-[.4rem] rounded-sm backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 text-white">
            <option value="">Coldest</option>
            <option value="opt1">Hot</option>
            <option value="opt2">Spring</option>
          </select>

          <select className="m-[.4rem] rounded-sm backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 text-white">
            <option value="">Coldest</option>
            <option value="opt1">Hot</option>
            <option value="opt2">Spring</option>
          </select>

          <select className="m-[.4rem] rounded-sm backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 text-white">
            <option value="">Coldest</option>
            <option value="opt1">Hot</option>
            <option value="opt2">Spring</option>
          </select>
        </div>
     </div>

     {/* ===============Card Section================= */}

    <div className="flex h-[16rem] mt-[3rem]">
      <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-300 border border-gray-300 w-[13rem] ml-[9rem] flex flex-col justify-center items-start pl-3 text-white rounded-lg text-xl">
        <h1>Tehran 35</h1>
        <h1>Wind speed: 11km</h1>
        <h1>Tuesday 19:52</h1>
        <h1>Cloudy</h1>
      </div>
      <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-300 border border-gray-300 ml-[7.2rem] w-[13rem] flex flex-col justify-center items-start pl-3 text-white rounded-lg text-xl">
        <h1>Tehran 35</h1>
        <h1>Wind speed: 11km</h1>
        <h1>Tuesday 19:52</h1>
        <h1>Cloudy</h1>
      </div>
      <div className="backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-300 border border-gray-300 ml-[7.2rem] w-[13rem] flex flex-col justify-center items-start pl-3 text-white rounded-lg text-xl">
        <h1>Tehran 35</h1>
        <h1>Wind speed: 11km</h1>
        <h1>Tuesday 19:52</h1>
        <h1>Cloudy</h1>
      </div>
    </div>
    </>
  );
}
export { Content };