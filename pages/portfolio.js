import Head from "next/head";
import React from "react";
import { Body, Container } from "../src/Styles";
import PortfolioHeader from "../src/portfolio/PortfolioHeader";
import Gallery from "../src/portfolio/Gallery";
import SonarWebGallery from "../src/portfolio/SonarWebGallery";

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
  return (
    <Container>
      <Head>
        <title>Frontend Development Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <PortfolioHeader />
        <Gallery width={500} imagePaths={sonarWebImages} title={"Sonar Web"} />
        <Gallery
          width={300}
          imagePaths={sonarAppImages}
          title={"Mtech - Sonar App"}
        />
        <Gallery
          width={500}
          imagePaths={shipWorksHubImages}
          title={"Shipworks - Hub"}
        />
        <Gallery
          width={1000}
          imagePaths={unityImage}
          title={"Shipworks - Hub"}
        />
      </Body>
    </Container>
  );
}
