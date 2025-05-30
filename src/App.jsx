import { Introduction } from "./components/about/Introduction";
import { Tech } from "./components/Tech";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/about/Contact";
import { Footer } from "./components/Footer";

import { styled } from "styled-components";

const StyledDiv = styled.div`
  body {
    margin: 0;
  }
`;

export const App = () => {
  return (
    <StyledDiv>
      <main>
        <Introduction />
        <Tech />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </StyledDiv>
  );
};
