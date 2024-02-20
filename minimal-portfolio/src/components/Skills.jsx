import React from "react";

import skills from "../data/skills";
import Title from "./Title";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center pb-6"
    >
      <Title>Skills</Title>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center max-w-xl p-4 border-2 border-the-blue">
        {skills.map((skill) => (
          <img src={skill.icon} alt={skill.name} className="h-8 w-8" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
