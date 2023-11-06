import Head from "next/head";
import { Body, Container } from "../src/Styles";
import PortfolioHeader from "../src/portfolio/PortfolioHeader";
import Gallery from "../src/portfolio/Gallery";
import * as React from "react";
import { useWidth } from "../src/hooks/useWidth";

const sonarWebImages = [
  "../images/SonarWeb-Login.png",
  "../images/SonarWeb-Home.png",
  "../images/SonarWeb-Breeder.png",
];

const sonarAppImages = [
  "../images/SonarApp-Login.png",
  "../images/SonarApp-Sensor.png",
  "../images/SonarApp-Houses.png",
  "../images/SonarApp-House.png",
  "../images/SonarApp-Benchmarking.png",
];

const shipWorksHubImages = [
  "../images/ShipWorksHub-Login.png",
  "../images/ShipWorksHub-Volume.jpg",
  "../images/ShipWorksHub-WarehouseSettings.png",
];

const unityImage = ["../images/KarmakUnity.png"];

export default function WebPortfolio() {
  const width = useWidth();
  const activeWidth = width - 200;

  return (
    <Container>
      <Head>
        <title>Frontend Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <PortfolioHeader />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={sonarWebImages}
          title={"Sonar Web"}
          icon={"angular"}
        />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={sonarAppImages}
          title={"Sonar App"}
          icon={"ionic"}
        />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={shipWorksHubImages}
          title={"ShipWorks Hub"}
          icon={"react"}
        />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={unityImage}
          title={"Unity"}
          icon={"react"}
        />
      </Body>
    </Container>
  );
}
