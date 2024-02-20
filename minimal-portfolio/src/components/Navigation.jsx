import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
  {
    name: "About",
    href: "#intro",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#timeline",
  },
  {
    name: "Skills",
    href: "#skills",
  },
];

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
      {nav && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300">
          {navlinks.map((navlink) => (
            <a
              key={navlink.name}
              href={navlink.href}
              className="p-2 text-the-blue text-4xl"
            >
              {navlink.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
