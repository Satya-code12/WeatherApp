import React from 'react'

const Navbar = () =>{
  return(
    <nav className='container flex justify-between mx-auto 2xl:px-12 xl:px-12 lg:px-12'>
      <div>
        <h1 className='text-[30px] font-semibold text-white'>Dark Weather</h1>
      </div>
      <div className='flex justify-between gap-9 text-[20px] font-medium pt-2 text-white '>
        <p>Home</p>
        <p>Download App</p>
        <p>Contact us</p>
      </div>
      <div>
        <button className='text-[20px] h-[55px] w-[110px] rounded-lg text-white' style={{
          background: "linear-gradient(#3A5E72, #5C93B1)"
        }}>Sign up</button>
      </div>
    </nav>
  );
}

export {Navbar};