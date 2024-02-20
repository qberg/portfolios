import React from "react";

import skills from "../data/skills";
import Title from "./Title";

const Skills = () => {
  const scrollers = document.querySelectorAll(".scroller");

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center pb-6"
    >
      <Title>Skills</Title>
      <div id="scroller" className="max-w-xl">
        <div className="flex flex-row flex-wrap gap-4 items-center justify-center p-4">
          {skills.map((skill) => (
            <div className="p-2 group flex relative cursor-pointer">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-[44px] w-[44px] inline-block group-hover:scale-125 ease-in-out duration-300"
              />
              <span
                class="group-hover:opacity-100 transition-opacity bg-the-blue p-1 text-[0.5rem] text-rust absolute left-1/2 
    -translate-x-1/2 translate-y-[-3.0rem] opacity-0 m-4 mx-auto max-h-xl max-w-xl"
              >
                <svg
                  class="absolute text-the-blue h-2 w-full left-0 top-full"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                  xml:space="preserve"
                >
                  <polygon
                    class="fill-current"
                    points="0,0 127.5,127.5 255,0"
                  />
                </svg>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
