import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Title, Content, Indented, Link } from "../public/Styles.js";

const Container = styled(Content)`
  grid-area: ContactInfo;
`;

const ContactMethod = styled(Indented)`
  font-size: 1.1rem;
  margin: 0.9rem 0rem;
  font-weight: 400;
`;

export default function ContactInfo() {
  return (
    <Container>
      <Title>Contact Info</Title>
      <Indented>
        <ContactMethod>
          <FontAwesomeIcon size={"1x"} icon={faEnvelope} color={"darkblue"} />{" "}
          Dan.J.Jost@gmail.com
        </ContactMethod>
        <Link
          onClick={() => window.open("https://www.linkedin.com/in/DanJJost")}
        >
          <ContactMethod>
            <FontAwesomeIcon size={"1x"} icon={faLinkedin} color={"darkblue"} />{" "}
            LinkedIn Profile
          </ContactMethod>
        </Link>
        <ContactMethod>
          <FontAwesomeIcon size={"1x"} icon={faMobileAlt} color={"darkblue"} />{" "}
          (614) 662-0255‬
        </ContactMethod>
      </Indented>
    </Container>
  );
}
