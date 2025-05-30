import { ProjectTitle } from "./ProjectTitle";
import { Tag } from "./Tag";
import { Demo } from "../icons/Demo";
import { Code } from "../icons/Code";
import "./iconBtn.css";
import "./Project.css";

export const Project = ({
  projectName,
  projectIntro,
  topics,
  demoLink,
  codeLink,
  image,
  alt
}) => {
  const title = projectName.replaceAll("-", " ");
  return (
    <div className="project-box" aria-label="Previous projects' information">
      <img src={image} alt={alt} className="blue"/>
      <div className="detail-box">
        <div className="detail" aria-label="Previous projects' information">
          <ProjectTitle title={title} />
          <p className="description" aria-label="About the project">
            {projectIntro}{" "}
          </p>
          <div className="tag">
            {topics.map(
              (topic) =>
                topic !== "portfolio" && <Tag key={topic} topic={topic} />
            )}
          </div>
        </div>
        <div className="btn">
          <div id="liveDemoBtn" aria-label="Button of live demo">
            <a href={demoLink} aria-label="Link to project">
              <Demo />
              Live Demo
            </a>
          </div>
          <div id="viewCodeBtn" aria-label="Button of veiwing code">
            <a href={codeLink} aria-label="Link to Github">
              <Code />
              View the code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};