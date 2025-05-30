import { styled } from "styled-components";

const StyledP = styled.p`
  list-style: none;
  color: var(--color-white);
  background-color: var(--color-black);
  width: fit-content;
  align-items: center;
  text-align: left;
  padding: 2px 6px;
  font-family: "Hind", sans-serif;
  font-size: 16px;
  border-radius: 5px;
`;

export const Tag = ({ topic }) => {
  return <StyledP>{topic}</StyledP>;
};
