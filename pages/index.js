import Head from "next/head";
import styled from "styled-components";
import { Body, Container, FadeIn, Grid } from "../src/Styles";
import * as React from "react";
import Header from "../src/resume/Header";
import Bio from "../src/resume/Bio";
import ProfessionalExperience from "../src/resume/ProfessionalExperience";
import Sidebar from "../src/resume/Sidebar";

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
