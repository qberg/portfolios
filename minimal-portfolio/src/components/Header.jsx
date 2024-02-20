import React from "react";

const Header = () => {
  return (
    <header className="sticky top-4 z-[20] mx-auto w-full items-center justify-between">
      <a href="/">
        <h1 className="font-bold text-xl">
          N<span className="text-the-blue">P</span>G.
        </h1>
      </a>
    </header>
  );
};

export default Header;
