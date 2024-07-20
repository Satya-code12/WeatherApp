import { Content } from "./LandPage2";

function Navbar () {
  return(
    <>
      <section  className="h-screen">
      <div className="ml-[9rem] mr-[9rem] py-5 flex text-white">
        <h2 className="text-2xl font font-semibold">Dark Weather</h2>
        <h2 className="pl-[9rem] cursor-pointer">Home</h2>
        <h2 className="pl-9 cursor-pointer">Download App</h2>
        <h2 className="pl-9 pr-[10rem] cursor-pointer">Contact us</h2>
        <button className="backdrop-filter backdrop-blur-md bg-opacity-10 w-24 text-base font font-semibold  border rounded-xl text-white border-gray-100">Sign up</button>
      </div>

      <Content/>
      </section>
    </>
  );
}

export { Navbar };