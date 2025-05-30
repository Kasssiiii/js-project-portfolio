import { PageTopic } from './PageTopic'
import './Tech.css'

export const Tech = () => {
  return (
    <section className="tech-wrapper">
      <div className="tech-container">
        <PageTopic className={"tech"} pageTopic={"Tech"} />
        <p className="tech-details">
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
           Web Accessibility, APIs, mob-programming, pair-programming, GitHub. 
        </p>
      </div>
    </section>
  );
};