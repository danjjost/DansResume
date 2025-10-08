import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Content, Indented, Title } from "../Styles.js";
import * as React from "react";

const Skill = styled.div`
  font-weight: 500;
  font-size: 1.02rem;
  margin: 0.1rem;
  opacity: 60%;
`;

const Container = styled(Content)`
  grid-area: TechnicalSummary;
`;

export default function TechnicalSummary() {
  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faKeyboard} size={"1x"} /> Technical Summary
      </Title>
      <Indented>
        <Skill>C# • .NET • Blazor</Skill>
        <Skill>Node.js • Typescript</Skill>
        <Skill>React • Next.js</Skill>
        <Skill>Python • Pytorch</Skill>
        <Skill>React Native • Flutter</Skill>
        <Skill>AWS • DynamoDB</Skill>
        <Skill>Microsoft Azure • CosmosDB</Skill>
        <Skill>Java</Skill>
        <Skill>Dart</Skill>
        <Skill>Mongo</Skill>
        <Skill>SQL</Skill>
        <Skill>Angular</Skill>
      </Indented>
    </Container>
  );
}
