import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Title, Bold, Subtext, Indented, Content } from "../public/Styles.js";

const Container = styled(Content)`
  grid-area: Education;
`;

const GPA = styled.div`
  margin: 0.5rem;
`;

export default function Education() {
  return (
    <Container>
      <Title>
        <FontAwesomeIcon size={"1x"} icon={faBookOpen} /> Education
      </Title>
      <Indented>
        <Bold>
          Southwestern Illinois College <Subtext>2017-2019</Subtext>
        </Bold>
        <GPA>3.7 Cumulative GPA</GPA>
      </Indented>
    </Container>
  );
}
