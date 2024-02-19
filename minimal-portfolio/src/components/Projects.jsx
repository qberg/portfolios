import React from "react";

import ProjectCard from "./ui/ProjectCard";
import projects from "../data/projects";
import Button from "./ui/Button";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              stack={project.stack}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div className="pt-8">
        <Button href="https://github.com/naveen015" text="Show More" />
      </div>
    </section>
  );
};

export default Projects;
