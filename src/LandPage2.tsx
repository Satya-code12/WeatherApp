import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Content (){

  const Api ="https://api.openweathermap.org/data/2.5/weather?lat=20.5937&lon=78.9629&appid=51b7e07a039253d3045ad93e4794f3ec";
  const fetchApi = async (url: string)=>{
    try{
      const res = await fetch(url);
      if (!res.ok) {
        throw res;
      }
      const data = res.json();
      console.log(data);
    }catch(error: any){
      const res = error as Response; //implicit data object
      console.log(res.status);
    }
  }
  React.useEffect(()=>{
    fetchApi(Api);
  },[])

  return(
    <>
      <div className="flex flex-col justify-center items-center h-[3rem] mt-[2rem] w-[37rem] ml-[18rem] p-3 text-white">
        <h1 className="text-3xl">Seeing the weather of the whole world </h1>
        <p className="text-3xl text-white">with <b>Dark Weather</b>!</p>
      </div>
     <div className="flex mt-[2.5rem] ml-[9rem]">
        <div>
          <input className="h-[3rem] w-[15rem] rounded-md outline-0 p-1 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 border border-gray-300 text-white" type="text" placeholder="Search Here" />
          <button className='ml-2 h-[3rem] w-[2rem] text-white rounded-md outline-0 p-1 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 border border-gray-300 text-white'> <FontAwesomeIcon icon={faSearch} /> </button>
        </div>
        <div className=" h-9 flex ml-[15.9rem] backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-500 rounded-md h-[3rem] w-[20rem] border border-gray-300">
          <h1 className="text-white p-[.6rem]" >Filters</h1>

          <select className="m-[.4rem] rounded-sm backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-700 text-white">
            <option value="">Coldest</option>
            <option value="opt1">Hot</option>
            <option value="opt2">Spring</option>
          </select>

          <select className="m-[.4rem] rounded-sm backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-700 text-white">
            <option value="">Coldest</option>
            <option value="opt1">Hot</option>
            <option value="opt2">Spring</option>
          </select>

          <select className="m-[.4rem] rounded-sm backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-700 text-white">
            <option value="">Coldest</option>
            <option value="opt1">Hot</option>
            <option value="opt2">Spring</option>
          </select>
        </div>
     </div>

     {/* ===============Card Section================= */}

    <div className="flex h-[547.46px] mt-[3rem] w-[1,272.42px]">
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-600  ml-[7.2rem] w-[1,272.42px] flex flex-col justify-center items-start pl-3 text-white rounded-[20px] text-xl">
        <h1>Tehran 35</h1>
        <h1>Wind speed: 11km</h1>
        <h1>Tuesday 19:52</h1>
        <h1>Cloudy</h1>
      </div>
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-600  ml-[7.2rem] w-[1,272.42px] flex flex-col justify-center items-start pl-3 text-white rounded-[20px] text-xl">
        <h1>Tehran 35</h1>
        <h1>Wind speed: 11km</h1>
        <h1>Tuesday 19:52</h1>
        <h1>Cloudy</h1>
      </div>
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-600  ml-[7.2rem] w-[1,272.42px] flex flex-col justify-center items-start pl-3 text-white rounded-[20px] text-xl">
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