import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Title, Header, Subtext, Indented, Content } from "../Styles.js";
import * as React from "react";

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
        <Header>
          Southwestern Illinois College <Subtext>2017-2019</Subtext>
        </Header>
        <GPA>3.7 Cumulative GPA</GPA>
        <GPA>Java I</GPA>
        <GPA>Java II</GPA>
      </Indented>
    </Container>
  );
}
