function Navbar() {
  return (
    <>
      <nav className="container mx-auto max-w-[1080px] py-1">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-2xl font font-semibold">Dark Weather</h2>
          <div className="flex gap-x-8 xl:gap-x-16 h-fit">
            <p className="cursor-pointer text-lg">Home</p>
            <p className="cursor-pointer text-lg">Download App</p>
            <p className="cursor-pointer text-lg">Contact us</p>
          </div>
          <button
            className="px-[17.5px] py-[10px] rounded-[12px]  font-semibold"
            style={{
              background: "linear-gradient(-56deg, #3A5E72 0%, #5C93B1 100%)",
            }}
          >
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}

export { Navbar };