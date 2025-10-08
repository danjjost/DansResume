import {
  Card,
  ListItem,
  Title,
  Subtext,
  InLineTechStack,
  Content,
  Link,
  SubHeader,
  Header,
} from "../Styles.js";
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

      <WashUAppDeveloper />

      <MtechSystemsLeadDeveloper />

      <FreelanceDeveloper />

      <ShipworksSoftwareDeveloper />

      <KarmakSoftwareDeveloper />

      <KarmakSoftwareApprentice />
    </Container>
  );
}

const WashUAppDeveloper = () => (
  <Card>
    <Header>
      Application Developer III{" "}
      <Subtext>Washington University, 1/2024 - Present</Subtext>
    </Header>
    <ListItem>
      Collaborated with stakeholders, end users, and fellow developers to
      swiftly deliver integrations as part of a complete student system
      overhaul.
    </ListItem>
    <ListItem>
      • Developed an internal, chat-based <InLineTechStack>LLM</InLineTechStack>{" "}
      assistant using <InLineTechStack>Azure OpenAI</InLineTechStack> to allow
      students and professors to securely leverage AI.
    </ListItem>
    <ListItem>
      • Used <InLineTechStack>C# / .NET</InLineTechStack> to craft microservices
      tailored to department-specific needs.
    </ListItem>
    <ListItem>
      • Adhered rigorously to unit testing best practices, leveraging the{" "}
      <InLineTechStack>xUnit</InLineTechStack> framework to ensure applications
      are implemented precisely without relying on late-stage QA testing.
    </ListItem>
    <ListItem>
      • Built user-friendly <InLineTechStack>Blazor</InLineTechStack>{" "}
      applications secured by SSO to conveniently streamline administrative
      tasks.
    </ListItem>
    <ListItem>
      • Proactively navigated bureaucratic red tape by conducting research and
      preforming preparatory work ahead of formal approvals.
    </ListItem>
  </Card>
);

const MtechSystemsLeadDeveloper = () => (
  <Card>
    <Header>
      Senior Software Developer{" "}
      <Subtext>Mtech Systems, 12/2022 - 11/2023</Subtext>
    </Header>
    <ListItem>
      Alongside a team of three other senior developers, I built and maintained
      web applications for poultry farm automation in the IoT space.
    </ListItem>
    <ListItem>
      • Used <InLineTechStack>.NET</InLineTechStack> with{" "}
      <InLineTechStack>Azure Functions</InLineTechStack>,{" "}
      <InLineTechStack>Azure IoT</InLineTechStack>, and{" "}
      <InLineTechStack>CosmosDB</InLineTechStack> to enable real-time reporting
      of sensor data for our users.
    </ListItem>
    <ListItem>
      • Enabled push notifications for our users using{" "}
      <InLineTechStack>Azure Notification Hubs</InLineTechStack> for critical
      sensor events.
    </ListItem>
    <ListItem>
      • Used <InLineTechStack>Angular</InLineTechStack> and{" "}
      <InLineTechStack>Ionic</InLineTechStack> to host a cross-platform mobile
      application along with two supplemental web applications.
    </ListItem>
    <ListItem>
      • Made use of <InLineTechStack>Azure DevOps</InLineTechStack> to manage
      CI/CD pipelines for all applications.
    </ListItem>
  </Card>
);

const FreelanceDeveloper = () => (
  <Card>
    <Header>
      Freelance Developer <Subtext>Independent, 3/2022 - 12/2022</Subtext>
    </Header>
    <ListItem>
      <SubHeader>Seatitude Startup</SubHeader>
      <br />
      <ListItem>
        Worked as part of an independent, agile team to create a table
        management application for a local restaurant.
      </ListItem>
      <ListItem>
        • Built a <InLineTechStack>.NET/AWS Lambda</InLineTechStack> backend
        from scratch and integrated with a{" "}
        <InLineTechStack>React Native</InLineTechStack> frontend spearheaded by
        my peers.
      </ListItem>
      <ListItem>
        • Participated in bi-weekly stakeholder meetings, often assisting in
        prioritizing new features.
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
        • Designed and implemented a full-stack prototype using{" "}
        <InLineTechStack>Flutter, Node.js, and AWS Lambda</InLineTechStack>.
      </ListItem>
      <ListItem>
        • Gained experience in directly communicating feature priority and
        estimated timelines with stakeholders.
      </ListItem>
    </ListItem>
    <ListItem>
      <SubHeader>Collegiate Tutor</SubHeader>
      <br />
      <ListItem>
        Worked as a private tutor for 4th year Computer Science students,
        providing practical guidance and application-centric experience.
      </ListItem>
      <ListItem>
        • Provided mentorship in{" "}
        <InLineTechStack>
          React, Node.js/Express, .NET, and entry-level Angular.
        </InLineTechStack>
      </ListItem>
      <ListItem>
        • Assisted in establishing <InLineTechStack>CI/CD</InLineTechStack>{" "}
        pipelines for <InLineTechStack>Azure App Service</InLineTechStack>{" "}
        deployments.
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
      • Used <InLineTechStack>.NET, Node.Js, AWS Lambda,</InLineTechStack> and
      the <InLineTechStack>Serverless</InLineTechStack> framework to rapidly and
      seamlessly replace aging client functionality with durable cloud
      alternatives.
    </ListItem>
    <ListItem>
      • Used <InLineTechStack>React and Typescript</InLineTechStack> to build
      out our new, modern frontend in an effort to slowly replace our legacy UI.
    </ListItem>
    <ListItem>
      • Used <InLineTechStack>.NET and SQL</InLineTechStack> to add features and
      address bugs in our legacy codebase.
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
      • Built durable, fault tolerant APIs in{" "}
      <InLineTechStack>.NET,</InLineTechStack> hosted on{" "}
      <InLineTechStack>Azure Service Fabric.</InLineTechStack>
    </ListItem>
    <ListItem>
      • Exposed on-prem client functionality to the API using{" "}
      <InLineTechStack>.NET, Visual Basic, and SQL.</InLineTechStack>
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
      • Paired with senior developers on production frontend code in{" "}
      <InLineTechStack>React</InLineTechStack>.
    </ListItem>
    <ListItem>
      • Created full stack web applications from start to completion using{" "}
      <InLineTechStack>
        .NET, Node.js/Express, React, and Azure.
      </InLineTechStack>
    </ListItem>
    <ListItem>
      • Learned TDD through practice and Kata’s of non-production code.
    </ListItem>
    <ListItem>
      • Studied <InLineTechStack>Clean Code</InLineTechStack> By Robert Martin.
    </ListItem>
    <ListItem>• Completed both independent and team assignments.</ListItem>
  </Card>
);
