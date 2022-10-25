import {
  Card,
  ListItem,
  Title,
  Subtext,
  LightBold,
  Content,
  Link,
  SubHeader,
  Header,
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
      <Title>
        <FontAwesomeIcon size={"1x"} icon={faDesktop} /> Professional Experience
      </Title>

      <IndependentFreelancing />

      <ShipworksSoftwareDeveloper />

      <KarmakSoftwareDeveloper />

      <KarmakSoftwareApprentice />
    </Container>
  );
}

const IndependentFreelancing = () => (
  <Card>
    <Header>
      Freelance Developer <Subtext>Independent, 3/2022 - Present</Subtext>
    </Header>
    <ListItem>
      <SubHeader>Collegiate Tutor</SubHeader>
      <br />
      <ListItem>
        Worked as a private tutor for a 4th year Computer Science student in
        anticipation of final semester exams.
      </ListItem>
      <ListItem>• Learned entry-level Angular for tutoring purposes.</ListItem>
      <ListItem>
        • Provided mentorship in React, Node.js/Express, .NET, and Angular.
      </ListItem>
      <ListItem>
        • Provided guidance in establishing non-mandatory CI/CD pipelines for
        Git to Azure App Service deployments.
      </ListItem>
    </ListItem>
    <ListItem>
      <SubHeader>Auctioneer Startup</SubHeader>
      <br />
      <ListItem>
        Worked one-on-one with a licensed auctioneer to explore prototyping a
        new platform for their business.
      </ListItem>
      <ListItem>
        • Designed and implemented a full-stack prototype using Flutter,
        Node.js, and AWS Lambda.
      </ListItem>
      <ListItem>
        • Took care to be auctioneer agnostic, with the long-term goal of
        providing a white-label solution to other auctioneers.
      </ListItem>
      <ListItem>
        • Gained experience in directly communicating feature priority and
        estimated timelines with stakeholders.
      </ListItem>
    </ListItem>
    <ListItem>
      <SubHeader>Seatitude Startup</SubHeader>
      <br />
      <ListItem>
        Worked with a small startup to create a mobile app for a local
        restaurant owner.
      </ListItem>
      <ListItem>
        • Built a .NET/AWS Lambda backend and integrated with a React Native
        frontend.
      </ListItem>
      <ListItem>
        • Participated in bi-weekly stakeholder meetings, often assisting in
        prioritizing new features.
      </ListItem>
      <ListItem>
        • Participated in finding, vetting, and recruiting additional talent for
        the project.
      </ListItem>
    </ListItem>
  </Card>
);

const ShipworksSoftwareDeveloper = () => (
  <Card>
    <Header>
      Software Developer <Subtext>ShipWorks, 1/2021 - 2/2022</Subtext>
    </Header>
    <ListItem>
      Worked as part of a small, purpose-oriented team and collaborated with
      other teams to support, improve, and migrate our flagship product to the
      cloud.
    </ListItem>
    <ListItem>
      • Used .NET, Node.Js, AWS Lambda, and the Serverless framework to rapidly
      and seamlessly replace aging client functionality with durable cloud
      alternatives.
    </ListItem>
    <ListItem>
      • Used React and Typescript to build out our new, modern frontend in an
      effort to slowly replace our legacy UI.
    </ListItem>
    <ListItem>
      • Used .NET and SQL to add features and address bugs in our legacy
      codebase.
    </ListItem>
    <ListItem>
      • Played a key role in preserving vital business integrations with major
      platforms such as Ebay and Amazon.
    </ListItem>
    <ListItem>
      • Partnered with support agents and product management to swiftly address
      client issues and communicate with our ecommerce customers.
    </ListItem>
  </Card>
);

const KarmakSoftwareDeveloper = () => (
  <Card>
    <Header>
      Software Developer <Subtext>Karmak, 12/2019 - 12/2020</Subtext>
    </Header>
    <ListItem>
      As part of a 2 person cross-functional team, I maintained and enhanced new
      features for Karmak’s most popular public facing API,{" "}
      <Link onClick={() => window.open("https://unity.karmak.io/unity.html")}>
        Unity
      </Link>
      .
    </ListItem>
    <ListItem>
      • Built durable, fault tolerant APIs in .NET, hosted on Azure Service
      Fabric.
    </ListItem>
    <ListItem>
      • Exposed on-prem client functionality to the API using .NET, Visual
      Basic, and SQL.
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
    <Header>
      Software Apprentice <Subtext>Karmak, 5/2019 - 11/2019</Subtext>
    </Header>
    <ListItem>
      Went through a 6 Month Software Apprenticeship program sponsored by Karmak
      to accelerate my developer career and build valuable skills.
    </ListItem>
    <ListItem>
      • Paired with senior developers on production frontend code in React.
    </ListItem>
    <ListItem>
      • Created full stack web applications from start to completion using .NET,
      Node.js/Express, React, and Azure.
    </ListItem>
    <ListItem>
      • Learned TDD through practice and Kata’s of non-production code.
    </ListItem>
    <ListItem>
      • Studied <LightBold>Clean Code</LightBold> By Robert Martin.
    </ListItem>
    <ListItem>• Completed both independent and team assignments.</ListItem>
  </Card>
);
