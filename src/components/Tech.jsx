import { PageTopic } from "./PageTopic";
import { styled } from "styled-components";

const StyledSection = styled.section`
  padding: 128px 16px;
  background-color: var(--color-background);
  width: 100%;

  .tech-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
  }

  .tech {
    color: var(--color-white);
    font-size: 80px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }

  .tech-details {
    color: var(--color-white);
    font-size: 32px;
    font-weight: 600;
    font-family: "Hind", sans-serif;
    text-align: left;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    padding: 256px 32px;

    .tech-details {
      text-align: center;
    }
  }

  @media (min-width: 1025px) {
    padding: 0px 161px;
    height: 980px;
    display: flex;

    .tech-container {
      flex-direction: row;
      gap: 124px;
      justify-content: center;
      align-items: center;
    }

    .tech {
      font-size: 80px;
    }

    .tech-details {
      font-size: 32px;
    }
  }
`;

export const Tech = () => {
  return (
    <StyledSection>
      <div className="tech-container">
        <PageTopic className={"tech"} pageTopic={"Tech"} />
        <p className="tech-details">
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
        </p>
      </div>
    </StyledSection>
  );
};
