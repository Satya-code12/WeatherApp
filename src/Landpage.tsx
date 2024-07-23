import { Content } from "./LandPage2";

function Navbar () {
  return(
    <>
      <section  className="h-screen">
      <div className="w-[1,277px] h-[78px] mt-[51px] ml-[80px] flex gap-[168px] text-white">
          <h2 className="w-[281px] h-[60px] text-[40px] text-[40px]">Dark Weather</h2>
        <div className="w-[495px] h-[38px] flex gap-[50px]">
          <a href="#">Home</a>
          <a href="#">Download App</a>
          <a href="#">Contact us</a>
        </div>
        <button className="backdrop-filter backdrop-blur-md bg-opacity-10 w-[165px] h-[78px] text-base font font-semibold  border rounded-[20px] px-[35px] py-[20px] text-white border-gray-100 hover:bg-gradient-to-br from-neutral-900 to-teal-600">Sign up</button>
      </div>

      <Content/>
      </section>
    </>
  );
}

export { Navbar };