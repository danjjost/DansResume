import Head from "next/head";
import styled from "styled-components";
import { Body, Container, FadeIn, Grid } from "../public/Styles";
import * as React from "react";
import Header from "../public/resume/Header";
import Bio from "../public/resume/Bio";
import ProfessionalExperience from "../public/resume/ProfessionalExperience";
import Sidebar from "../public/resume/Sidebar";

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
