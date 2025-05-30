import { PageTopic } from '../PageTopic'
import { Linkedin } from '../icons/Linkedin'
import { Github } from '../icons/Github'
import { Instagram } from '../icons/Instagram'
import { ProfilePhoto } from './ProfilePhoto'
import { styled } from 'styled-components'


const StyledContact = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 128px 16px;
gap: 64px;
background-color: var(--color-white);

.contact {
    color: var(--color-foreground);
    font-family: "Montserrat", sans-serif;
    font-size: 56px;
    font-weight: 700;
}

.contactContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
.info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.name{
    font-size: 30px;
    color: var(--color-foreground);
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
}

.location,
.email{
    color: var(--color-foreground);
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 600;
}

.contactIcons {
    display: flex;
    justify-content: center;
    align-items: space-around;
    gap: 45px;
}

.contactIcons a:hover {
    svg path {
        fill: var(--color-foreground)
    }
}

@media (min-width:667px) and (max-width:1024px) {
    .contact-wrapper {
        padding: 128px 32px;
    }
    .location,
    .email{
      font-size: 20px;
    }
}

@media (min-width: 1025px) {
    .contact-wrapper {
        padding: 100px 162px 100px 161px;
        gap: 80px;
    }

    .contact {
        font-size: 80px;
    }

    .name {
        font-size: 35px;
    }

    .location,
    .email{
        font-size: 20px;
    }
}
`

export const Contact = () => {
    const linkedin = "https://www.linkedin.com/in/kasiawolko/"
    const github = "https://github.com/Kasssiiii"
    const instagram = "https://www.instagram.com/kasia_wolko/"

    return (
      <StyledContact>
        <PageTopic pageTopic="Let's Talk" className="contact" />
        <div className="contactContent">
          <ProfilePhoto className={"profilePhoto"} />
          <div className="info">
            <p className="name">Kasia Wolkowicz</p>
            <p className='location'>🖈Based in Stockholm, Sweden</p>
            <p className='email'>✉ kasia.gru@gmail.com</p>
          </div>
        </div>
        <div className="contactIcons">
          <a href={linkedin} alt="Linkedin button" aria-label="Link to Linkedin profile page">
            <Linkedin />
          </a>
          <a href={github} alt="Github button" aria-label="Link to Github page">
            <Github />
          </a>
          <a href={instagram} alt="Instagram button" aria-label="Link to instagram page">
            <Instagram />
          </a>
        </div>
      </StyledContact>
    );
}