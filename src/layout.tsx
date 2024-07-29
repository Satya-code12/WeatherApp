import React from "react";
import { Navbar } from "./components/Navbar";
import { FilterProvider } from "./contexts/FilterContext";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container pb-12  max-w-[1080px] mx-auto">
        <FilterProvider>{children}</FilterProvider>
      </main>
    </>
  );
}
