import { styled } from "styled-components";

const StyledHeader = styled.h3`
  font-size: 24px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: var(--color-black);

  @media (min-width: 1025px) {
    font-size: 32px;
  }
`;

export const ProjectTitle = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};
