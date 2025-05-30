import { ProjectTitle } from "./ProjectTitle";
import { Tag } from "./Tag";
import { Demo } from "../icons/Demo";
import { Code } from "../icons/Code";
import { styled } from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .projectSnippet {
    width: 343px;
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 13px;
  }

  .detail-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    overflow: visible;
  }

  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .description {
    font-size: 18px;
    font-weight: 400;
    font-family: "Hind", sans-serif;
    color: var(--color-black);
    text-align: left;
    word-wrap: break-word;
  }

  .tag {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 4px;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }

  .btn {
    display: flex;
    width: 430px;
    align-items: flex-start;
    gap: 32px;
  }

  #liveDemoBtn,
  #viewCodeBtn {
    border-radius: 40px;
    background-color: var(--color-white);
  }

  .btn a {
    display: flex;
    flex-direction: row;
    padding-right: 16px;
    align-items: center;
    gap: 7px;
    color: var(--color-black);
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }

  #liveDemoBtn:hover {
    background-color: var(--color-foreground);
    border-radius: 40px;
  }

  #viewCodeBtn :hover {
    background-color: var(--color-foreground);
    border-radius: 40px;
  }

  #liveDemoBtn,
  #viewCodeBtn {
    :hover {
      color: var(--color-white);
    }
  }

  #liveDemoBtn,
  #viewCodeBtn {
    :hover svg path {
      fill: var(--color-white);
    }
  }

  @media (max-width: 666px) {
    .btn {
      display: flex;
      padding-right: 16px;
      align-items: center;
      gap: 7px;
    }

    .btn a {
      font-size: 15px;
    }
  }

  @media (min-width: 667px) {
    .btn a {
      font-size: 15px;
    }
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    .project-wrapper {
      padding: 128px 32px;
    }

    .projectSnippet {
      width: 200px;
      height: 280px;
    }

    flex-direction: row;

    .detail-box {
      justify-content: space-between;
    }

    .btn {
      flex-direction: row;
      gap: 32px;
    }

    .project {
      align-self: self-start;
    }
  }

  @media (min-width: 1025px) {
    .project-wrapper {
      padding: 128px 161px 124px 161px;
    }

    .project {
      font-size: 80px;
    }

    .projectSnippet {
      width: 408px;
      height: 280px;
    }

    .project-container {
      gap: 128px;
    }

    flex-direction: row;

    .detail-box {
      justify-content: space-between;
    }

    .btn {
      flex-direction: row;
      gap: 32px;
    }

    .project {
      align-self: self-start;
    }
  }
`;

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
    <StyledDiv aria-label="Previous projects' information">
      <img src={image} alt={alt} className="projectSnippet"/>
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
    </StyledDiv>
  );
};