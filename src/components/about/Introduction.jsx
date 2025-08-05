//import './Introduction.css'
import arrow from "/arrowdown.svg";
import { ProfilePhoto } from "./ProfilePhoto";
import { styled } from "styled-components";

const StyledSection = styled.section`
  display: flex;
  padding: 64px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  background-color: var(--color-white);

  .intro-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }

  .dev-name {
    color: var(--color-foreground);
    font-size: 32px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    align-self: flex-start;
  }

  .dev-title {
    color: var(--color-foreground);
    font-size: 80px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    align-self: flex-start;
  }

  .dev-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
    align-self: stretch;
    text-align: left;
    word-wrap: break-word;
    color: var(--color-black);
    font-size: 18px;
    font-weight: 400;
    font-family: "Hind", sans-serif;
  }

  .arrow {
    animation: move 2s linear infinite;
  }

  @keyframes move {
    0%,
    100% {
      transform: translateY(0);
    }

    25%,
    75% {
      transform: translateY(-10px);
    }
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    padding: 128px 32px 30px 32px;

    .dev-name {
      font-size: 28px;
    }

    .dev-title {
      font-size: 52px;
    }
  }

  @media (min-width: 1025px) {
    padding: 332px 161px 100px 161px;

    .dev-name {
      font-size: 36px;
    }

    .dev-title {
      font-size: 70px;
    }
  }

  @media (min-width: 667px) {
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(3, auto);

    .intro-box {
      grid-area: 1/1/2/8;
    }

    .dev-photo {
      grid-area: 2/1/3/3;
    }

    .dev-intro {
      grid-area: 2/3/3/9;
      font-size: 20px;
    }

    .arrow {
      grid-area: 3/5/4/6;
      align-items: center;
    }
  }
`;

export const Introduction = () => {
  return (
    <StyledSection aria-label="A page of introduction">
      <div className="intro-box">
        <h1 className="dev-name">Hi, I&apos;m Kasia Wolkowicz</h1>
        <h2 className="dev-title">Frontend Developer</h2>
      </div>

      <ProfilePhoto className={"dev-photo"} />
      <div className="dev-intro">
        <article>
          I'm a Front-End Developer with a strong focus on accessibility, clean
          code, and creating user-friendly digital experiences. With a
          background in payroll, financial services, and office administration,
          I bring a unique mix of technical skill and business insight to every
          project I work on.
        </article>
        <article>
          Whether I’m coding a responsive layout, improving performance, or
          making sure a site works for users with assistive tech, I care deeply
          about the details. Currently levelling up my JavaScript and React
          skills while contributing to projects that make a difference.
        </article>
      </div>

      <img src={arrow} alt="an arrow to show the next page" className="arrow" />
    </StyledSection>
  );
};
