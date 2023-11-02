import styled from "styled-components";
import * as React from 'react';

const Container = styled.div`
  padding: 1rem;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
`;

const Name = styled.div`
  margin-top: 0.5rem;
  line-height: 1.15;
  font-size: 4rem;
  align-self: center;
`;

const Email = styled.div`
  opacity: 0.6;
  padding-left: 1rem;
`;

export default function Header() {
  return (
    <Container>
      <Name>Daniel Jost</Name>
      <Email>Dan.J.Jost@gmail.com</Email>
    </Container>
  );
}
