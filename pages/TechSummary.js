import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Content, Indented, Title } from "../public/Styles.js";

const Skill = styled.div`
  font-weight: 500;
  font-size: 1.02rem;
  margin: 0.1rem;
  opacity: 60%;
`;

const Container = styled(Content)`
  grid-area: TechSummary;
`;

export default function TechSummary() {
  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faKeyboard} size={"1x"} /> Technical Summary
      </Title>
      <Indented>
        <Skill>React • Typescript</Skill>
        <Skill>C# • .NET</Skill> <Skill>NodeJS</Skill> <Skill>ASP.NET</Skill>
        <Skill>Java</Skill>
        <Skill>Azure Application Insights • Log Analytics</Skill>
        <Skill>Azure Devops Pipelines</Skill>
        <Skill>Azure Storage</Skill>
        <Skill>Mongo</Skill>
        <Skill>MSSQL</Skill>
      </Indented>
    </Container>
  );
}
