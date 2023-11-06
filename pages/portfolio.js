import Head from "next/head";
import React from "react";
import { Body, Container } from "../src/Styles";
import PortfolioHeader from "../src/portfolio/PortfolioHeader";
import Gallery from "../src/portfolio/Gallery";

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

const useWidth = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const pollForWidth = () => {
      if (typeof window !== "undefined" && window.innerWidth) {
        setWidth(window.innerWidth);
      } else {
        // If window or window.innerWidth is not defined, try again after 100ms
        setTimeout(pollForWidth, 100);
      }
    };

    pollForWidth();
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default function WebPortfolio() {
  const width = useWidth();
  const activeWidth = width - 200;
  console.log(activeWidth);

  return (
    <Container>
      <Head>
        <title>Frontend Development Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <PortfolioHeader />
        <br />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={sonarWebImages}
          title={"Sonar Web"}
        />

        <br />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={sonarAppImages}
          title={"Mtech - Sonar App"}
        />

        <br />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={shipWorksHubImages}
          title={"Shipworks - Hub"}
        />

        <br />
        <Gallery
          activeWidth={activeWidth}
          imagePaths={unityImage}
          title={"Shipworks - Hub"}
        />
      </Body>
    </Container>
  );
}
