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
import * as React from "react";

const Container = styled(Content)`
  grid-area: ProfessionalExperience;
`;

export default function ProfessionalExperience() {
  return (
    <Container>
      <Title style={{ textAlign: "left" }}>
        <FontAwesomeIcon size={"1x"} icon={faDesktop} /> Professional Experience
      </Title>

      <IndependentFreelancing />

      <ShipworksSoftwareDeveloper />

      <KarmakSoftwareDeveloper />

      <KarmakSoftwareApprentice />

      <CampWartburg />
    </Container>
  );
}

const IndependentFreelancing = () => (
  <Card>
    <Bold>
      Freelance Developer <Subtext>Independent, 3/2022 - Present</Subtext>
    </Bold>
    <ListItem>
      Created projects for both personal use and for clients to increase my
      proficiency in new platforms.
    </ListItem>
    <ListItem>
      • Learned cross-platform development frameworks such as Flutter and React
      Native.
    </ListItem>
    <ListItem>
      • Developed fullstack applications from inception to production.
    </ListItem>
    <ListItem>
      • Gained experience in directly communicating feature priority and
      estimated timelines with stakeholders.
    </ListItem>
  </Card>
);

const ShipworksSoftwareDeveloper = () => (
  <Card>
    <Bold>
      Software Developer <Subtext>ShipWorks, 1/2021 - 2/2022</Subtext>
    </Bold>
    <ListItem>
      Worked as part of a small, purpose-oriented team and collaborated with
      other teams to maintain, enhance, and migrate our flagship product to the
      cloud.
    </ListItem>
    <ListItem>
      • Played a key role in supporting vital integrations with major platforms
      such as Ebay and Amazon.
    </ListItem>
    <ListItem>
      • Partnered with support agents and product management in swiftly
      addressing client issues and communicating with ecommerce customers.
    </ListItem>
    <ListItem>
      • Used AWS Lambda and the Serverless framework to rapidly and seamless
      replace aging client functionality with durable cloud alternatives.
    </ListItem>
  </Card>
);

const KarmakSoftwareDeveloper = () => (
  <Card>
    <Bold>
      Software Developer <Subtext>Karmak, 12/2019 - 12/2020</Subtext>
    </Bold>
    <ListItem>
      As part of a Small cross-functional team, I maintained and enhanced new
      features for Karmak’s most popular public facing API,{" "}
      <Link onClick={() => window.open("https://unity.karmak.io/")}>Unity</Link>
      .
    </ListItem>
    <ListItem>
      • Built durable, fault tolerant APIs hosted on Azure Service Fabric.
    </ListItem>
    <ListItem>
      • Refactored persistence layer of a microservice from CosmosDB to Table
      Storage.
    </ListItem>
    <ListItem>
      • Used Azure Relay to expand hybrid-cloud communication models.
    </ListItem>
    <ListItem>
      • Collaborated with QA in ensuring the code is well covered with
      Unit/Integration tests.
    </ListItem>
  </Card>
);

const KarmakSoftwareApprentice = () => (
  <Card>
    <Bold>
      Software Apprentice <Subtext>Karmak, 5/2019 - 11/2019</Subtext>
    </Bold>
    <ListItem>
      Went through a 6 Month Software Apprenticeship program sponsored by Karmak
      to accelerate my developer career and build valuable skills.
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
);

const CampWartburg = () => (
  <Card>
    <Bold>
      Group Course/Highropes Facilitator{" "}
      <Subtext>Camp Wartburg, 2017-2019</Subtext>
    </Bold>
    <ListItem>
      Led team building activities through high/low ropes courses for private
      groups.
    </ListItem>
    <ListItem>
      • Instructed and assisted patrons in potentially hazardous environments.
    </ListItem>
    <ListItem>
      • Facilitated productive group conversations with a focus on problem
      solving.
    </ListItem>
  </Card>
);
