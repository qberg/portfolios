import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 w-full ease-in duration-300 z-10">
      <div className="sticky bg-white p-4 max-w-[1240px] m-auto flex items-center justify-between shadow-lg shadow-rust p-2 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60">
        <a href="/">
          <h1 className="font-bold text-xl">
            N<span className="text-the-blue">P</span>G.
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
