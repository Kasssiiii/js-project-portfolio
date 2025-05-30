import { Project } from "./Project";
import { PageTopic } from "../PageTopic";

import projects from "../../data/projects.json";

import './Projects.css'

export const Projects = () => {
  return (
    <>
      <section className="project-wrapper">
            <PageTopic pageTopic={"Featured Projects"} className={"project"} />
            <div className="project-container">
              {projects.projects.map((project) => {
                return (
                  <Project
                    key={project.id}
                    projectName={project.name}
                    topics={project.tags}
                    codeLink={project.github}
                    demoLink={project.netlify}
                    projectIntro={project.about}
                    image={project.image}
                    alt={project.alt}
                  />
                );
              })}
            </div>
       
      </section>
    </>
  );
};