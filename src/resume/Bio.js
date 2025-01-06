import styled from "styled-components";
import * as React from "react";

const BioStyles = styled.div`
  padding: 0.25rem 1.5rem;
  align-items: center;
  border-left: 1px solid lightgray;
  font-size: 1rem;
`;

const Container = styled.div`
  grid-area: Bio;
`;

export default function Bio() {
  return (
    <Container>
      <BioStyles>
        Full stack developer with strong .NET / Node.js back-end experience and
        a passion for all things front-end. My current focus is data science and
        machine learning.
      </BioStyles>
    </Container>
  );
}
