import { Project } from "./Project";
import { PageTopic } from "../PageTopic";
import { styled } from "styled-components";

import projects from "../../data/projects.json";

const StyledSection = styled.section`
  display: flex;
  padding: 128px 16px 208px 16px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background-color: var(--color-white);
  width: 100%;
  overflow: scroll;

  .project {
    color: var(--color-black);
    font-size: 56px;
    font-family: "Montserrat", sans-serif;
    align-self: center;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
    align-self: stretch;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    padding: 128px 32px;

    .project {
      align-self: self-start;
    }
  }

  @media (min-width: 1025px) {
    padding: 128px 161px 124px 161px;

    .project {
      font-size: 80px;
      align-self: self-start;
    }

    .project-container {
      gap: 128px;
    }
  }
`;

export const Projects = () => {
  return (
    <StyledSection>
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
    </StyledSection>
  );
};
