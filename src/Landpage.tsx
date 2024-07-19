function Navbar () {
  return(
    <>
      <section  className="h-screen bg-gradient-to-bl from-gray-900 to-blue-900 text-white">
      <div className="ml-[9rem] mr-[9rem] py-5 flex ">
        <h2 className="text-2xl font font-semibold">Dark Weather</h2>
        <h2 className="pl-[9rem]">Home</h2>
        <h2 className="pl-9">Download App</h2>
        <h2 className="pl-9 pr-[10rem]">Contact us</h2>
        <button className="bg-blue-800 w-24 text-base font font-semibold  border rounded-xl border-white">Sign up</button>
      </div>
      </section>
    </>
  );
}

export { Navbar };