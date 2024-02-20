import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div onClick={handleNav} className="block z-10 mr-4 mt-1">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-the-blue"
            : "absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-the-blue"
        }
      >
        <ul>
          <li>
            <a href="/#projects">projects</a>
          </li>
          <li>
            <a href="/#timeline">timeline</a>
          </li>
          <li>
            <a href="/#contact">contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
