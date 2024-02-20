import React from "react";

import { about } from "../data/about";
import Button from "./ui/Button";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const { name, role, description, resume, social } = about;
  return (
    <section id="intro">
      <div className="flex items-center justify-center flex-col text-center pt-14 pb-6">
        <h1 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">
          Hi, I am <span className="text-the-blue">{name}.</span>
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium text-gray-800">
          {role}
        </p>
        <p className="text-sm max-w-xl mb-6">
          Hello, I’m Naveen Prashanna Gurumurthy, a passionate computer
          scientist specializing in Intelligent Systems. I’m currently pursuing
          a Master of Science degree at the{" "}
          <a
            href="https://www.utdallas.edu/"
            target="_blank"
            className="text-the-blue hover:underline underline-offset-2"
            rel="noreferrer noopener"
          >
            University of Texas at Dallas
          </a>{" "}
          building upon my strong educational foundation from the{" "}
          <a
            href="https://www.iitm.ac.in/"
            target="_blank"
            className="text-the-blue hover:underline"
            rel="noreferrer noopener"
          >
            Indian Institute of Technology Madras (IIT-M)
          </a>
          , where I earned a Bachelor + Master of Technology degree in
          Mechanical Engineering with a Minor in Artificial Intelligence and
          Machine Learning.
        </p>
        <div className="flex flex-row">
          <Button href={resume} text="Resume" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
