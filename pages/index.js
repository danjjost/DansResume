import Head from "next/head";
import styled from "styled-components";
import { FadeIn } from "../public/Styles";
import Bio from "./Bio";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import ProfessionalExperience from "./ProfessionalExperience";
import TechnicalSummary from "./TechnicalSummary";
import Header from "./Header";
import * as React from "react";
import Sidebar from "./Sidebar";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  margin: 0.25rem;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  grid-template-columns: 8fr 3fr;
  grid-template-areas: "Bio Bio" "ProfessionalExperience TechnicalSummary" "ProfessionalExperience Education" "ProfessionalExperience ContactInfo";
  max-width: 900px;
  animation: ${FadeIn} 0.5s ease-in;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    grid-template-areas: "Bio" "ProfessionalExperience" "Education" "TechnicalSummary" "ContactInfo";
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dan's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Header />
        <Grid>
          <Bio />
          <ProfessionalExperience />
          <Sidebar />
        </Grid>
      </Body>
    </Container>
  );
}
