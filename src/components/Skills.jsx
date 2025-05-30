import { PageTopic } from "./PageTopic";
import { styled } from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-background);
  padding: 128px 16px 157px 16px;
  gap: 64px;

  .skills {
    font-size: 56px;
    font-weight: 700;
    color: var(--color-white);
  }

  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
  }

  .skillbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .listbox p {
    font-size: 18px;
    color: var(--color-white);
    font-weight: 400;
    font-family: "Hind", sans-serif;
    line-height: normal;
    text-align: center;
    padding: 2px;
  }

  .listbox p:hover {
    background-color: var(--color-foreground);
    cursor: default;
  }

  .code-head,
  .toolbox-head,
  .upcoming-head,
  .more-head {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-white);
  }

  .code-head:hover,
  .toolbox-head:hover,
  .upcoming-head:hover,
  .more-head:hover {
    background-color: var(--color-foreground);
    cursor: default;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    padding: 128px 32px 148px 32px;
    width: auto;

    .skill-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-start;
      gap: 64px;
    }

    .skillbox {
      align-items: flex-start;
    }

    .listbox p {
      text-align: left;
    }
  }

  @media (min-width: 1025px) {
    padding: 128px 161px;
    gap: 128px;

    .skill-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    .skills {
      font-size: 80px;
    }

    .listbox p {
      text-align: left;
    }

    .skill-container h3 {
      font-size: 32px;
    }

    .skillbox {
      align-items: flex-start;
      gap: 8px;
    }
  }
`;

export const Skills = () => {
  return (
    <StyledSection className="skill-wrapper">
      <PageTopic className={"skills"} pageTopic={"Skills"} />
      <div className="skill-container" aria-label="Tech skills">
        <div className="skillbox">
          <h3 className="code-head">Code</h3>
          <div className="listbox">
            <p>React</p>
            <p>Global State Management</p>
            <p>DOM Manipulation</p>
            <p>Javascript ES6</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Tailwind CSS</p>
            <p>Styled Components</p>
            <p>Node</p>
            <p>REST API</p>
            <p>Authentication</p>
          </div>
        </div>
        <div className="skillbox">
          <h3 className="toolbox-head">Toolbox</h3>
          <div className="listbox">
            <p>GitHub</p>
            <p>Git</p>
            <p>Postman</p>
            <p>VS code</p>
            <p>Netlify</p>
            <p>Figma</p>
            <p>Chrome dev tools</p>
          </div>
        </div>
        <div className="skillbox">
          <h3 className="upcoming-head">Upcoming</h3>
          <div className="listbox">
            <p>TypeScript</p>
            <p>Python</p>
          </div>
        </div>
        <div className="skillbox">
          <h3 className="more-head">More</h3>
          <div className="listbox">
            <p>Problem-Solving</p>
            <p>Agile methodology</p>
            <p>Accessibility</p>
            <p>Responsive Design</p>
            <p>Team work</p>
            <p>Mob programming</p>
            <p>Pair programming</p>
            <p>Remote working</p>
            <p>Design hand-off</p>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};
