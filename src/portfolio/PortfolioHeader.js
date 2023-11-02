import styled from "styled-components";
import * as React from "react";
import Bio from "../resume/Bio";

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  margin-top: 0.5rem;
  line-height: 1.15;
  font-size: 4rem;
  align-self: center;
`;

const BioStyles = styled.div`
  padding: 0.25rem 1.5rem;
  align-items: center;
  border-left: 1px solid lightgray;
  font-size: 1rem;
`;

export default function PortfolioHeader() {
  return (
    <>
      <Container>
        <Title>Web Development Portfolio</Title>
      </Container>
      <BioStyles>Photos of websites I've worked on</BioStyles>
      <br />
    </>
  );
}
