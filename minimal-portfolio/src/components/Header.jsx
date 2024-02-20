import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-4 bg-white grid grid-flow-col z-[20] w-full items-center justify-between shadow-lg shadow-rust p-2 rounded-lg">
      <a href="/">
        <h1 className="font-bold text-xl">
          N<span className="text-the-blue">P</span>G.
        </h1>
      </a>
      <div className="grid grid-flow-col items-center gap-x-8">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
