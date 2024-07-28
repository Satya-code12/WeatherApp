import React from 'react'

const Search =()=>{
  return(
    <div className='h-[45px] bg-[#1e3b4c] w-[310px] rounded-lg '>
      <input type="text" placeholder='Search here...' className='bg-transparent p-2 outline-none w-full h-full text-white'/>
    </div>
  );
}

export {Search};