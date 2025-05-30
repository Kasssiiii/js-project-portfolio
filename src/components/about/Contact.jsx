import './Contact.css'
import { PageTopic } from '../PageTopic'
import { Linkedin } from '../icons/Linkedin'
import { Github } from '../icons/Github'
import { Instagram } from '../icons/Instagram'
import { ProfilePhoto } from './ProfilePhoto'

export const Contact = () => {
    const linkedin = "https://www.linkedin.com/in/kasiawolko/"
    const github = "https://github.com/Kasssiiii"
    const instagram = "https://www.instagram.com/kasia_wolko/"

    return (
      <section className="contact-wrapper">
        <PageTopic pageTopic={"Let's Talk"} className={"contact"} />
        <div className="contactContent">
          <ProfilePhoto className={"profilePhoto"} />
          <div className="info">
            <p className="name">Kasia Wolkowicz</p>
            <p className='location'>🖈Based in Stockholm, Sweden</p>
            <p className='worldwide'>✉ kasia.gru@gmail.com</p>
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
      </section>
    );
}