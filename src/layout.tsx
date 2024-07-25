import React from "react";
import { Navbar } from "./Components/Navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container pb-12  max-w-[1080px] mx-auto">
        {children}
      </main>
    </>
  );
}