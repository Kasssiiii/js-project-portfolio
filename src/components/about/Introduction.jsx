import './Introduction.css'
import arrow from '../../assets/arrowdown.svg'
import { ProfilePhoto } from './ProfilePhoto';

export const Introduction = () => {
  return (
    <>
      <section className="intro-wrapper" aria-label="A page of introduction">
        <div className="intro-box">
          <h1 className="dev-name">Hi, I&apos;m Kasia Wolkowicz</h1>
          <h2 className="dev-title">Frontend Developer</h2>
        </div>
        
          <ProfilePhoto className={"dev-photo"} />
          <div className="dev-intro">
            <article >
              I'm a Front-End Developer with a strong focus on accessibility,
              clean code, and creating user-friendly digital experiences. With a
              background in payroll, financial services, and office
              administration, I bring a unique mix of technical skill and
              business insight to every project I work on.
            </article>
            <article>
              Whether I’m coding a responsive layout, improving performance, or
              making sure a site works for users with assistive tech, I care
              deeply about the details. Currently levelling up my JavaScript and
              React skills while contributing to projects that make a
              difference.
            </article>
          </div>
        
        <img
          src={arrow}
          alt="an arrow to show the next page"
          className="arrow"
        />
      </section>
    </>
  );
};