import { PageTopic } from "./PageTopic";
import "./Skills.css";

export const Skills = () => {
  return (
    <>
      <section className="skill-wrapper">
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
      </section>
    </>
  );
};