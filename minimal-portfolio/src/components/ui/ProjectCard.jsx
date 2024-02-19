import React from "react";
import { Folder, Github } from "../icons";

const ProjectCard = ({ title, stack, desc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="grid border-2 border-the-blue p-2 overflow-hidden rounded-md group transition duration-200 hover:translate-y-[-0.5rem] hover:shadow-xl"
    >
      <div className="w-full p-4">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-800 group-hover:text-the-blue">
            {title}
          </h3>
          <span className="mb-2 md:mb-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-the-blue"
            >
              <Github />
            </a>
          </span>
        </div>
        <p>{desc}</p>
        <div className="flex flex-wrap mt-4 items-center justify-start gap-2">
          {stack.map((item) => (
            <span className="text-gray-500">{item}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
