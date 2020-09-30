import {
  Card,
  ListItem,
  Title,
  Bold,
  Subtext,
  LightBold,
  Content,
  Link,
} from "../public/Styles.js";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled(Content)`
  grid-area: ProfessionalExperience;
`;

export default function ProfessionalExperience() {
  return (
    <Container>
      <Title style={{ textAlign: "left" }}>
        <FontAwesomeIcon size={"1x"} icon={faDesktop} /> Professional Experience
      </Title>
      <Card>
        <Bold>
          Software Developer <Subtext>Karmak, 12/2019 - Present</Subtext>
        </Bold>
        <ListItem>
          As part of a Small cross-functional team, I maintained and enhanced
          new features for Karmak’s most popular public facing API,{" "}
          <Link onClick={() => window.open("https://unity.karmak.io/")}>
            Unity
          </Link>
          .
        </ListItem>
        <ListItem>
          • Built durable, fault tolerant APIs hosted on Azure Service Fabric.
        </ListItem>
        <ListItem>
          • Refactored persistence layer of a microservice from CosmosDB to
          Table Storage.
        </ListItem>
        <ListItem>
          • Used Azure Relay to expand hybrid-cloud communication models.
        </ListItem>
        <ListItem>
          • Collaborated with QA in ensuring the code is well covered with
          Unit/Integration tests.
        </ListItem>
      </Card>
      <Card>
        <Bold>
          Software Apprentice <Subtext>Karmak, 5/2019 - 11/2019</Subtext>
        </Bold>
        <ListItem>
          Went through a 6 Month Software Apprenticeship program sponsored by
          Karmak to accelerate my developer career and build valuable skills.
        </ListItem>
        <ListItem>
          • Learned TDD through practice and Kata’s of non-production code.
        </ListItem>
        <ListItem>
          • Studied <LightBold>Clean Code</LightBold> By Robert Martin.
        </ListItem>
        <ListItem>• Completed both independent and team assignments</ListItem>
        <ListItem>
          • Created full stack web applications from start to production.
        </ListItem>
        <ListItem>
          • Paired with senior developers on production frontend code.
        </ListItem>
      </Card>
      <Card>
        <Bold>
          Group Course/Highropes Facilitator{" "}
          <Subtext>Camp Wartburg, 2017-2019</Subtext>
        </Bold>
        <ListItem>
          Led team building activities through high/low ropes courses for
          private groups.
        </ListItem>
        <ListItem>
          • Instructed and assisted patrons in potentially hazardous
          environments.
        </ListItem>
        <ListItem>
          • Facilitated productive group conversations with a focus on problem
          solving.
        </ListItem>
      </Card>
    </Container>
  );
}
