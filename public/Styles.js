import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
  from {
    opacity: 0;
  } 
  to{
    opactiy: 1;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.32rem;
  margin-bottom: 0.5rem;
`;

export const ListItem = styled.div`
  margin: 0.8rem 0rem;
  margin-left: 0.4rem;
  font-size: 0.95rem;
  text-align: left;
`;

export const Indented = styled.div`
  @media (min-width: 700px) {
    margin-left: 1rem;
  }
`;

export const Card = styled.div`
  margin-bottom: 3rem;
  padding: 0rem 1.5rem;
  color: inherit;
`;

export const Link = styled.span`
  opacity: 0.9;
  font-weight: 500;
  color: blue;
  transition: color 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  :hover {
    color: skyblue;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  @media (max-width: 700px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const InLineTechStack = styled.span`
  font-weight: 700;
  font-size: 0.9rem;
`;

export const Header = styled.span`
  font-weight: 500;
  font-size: 1.05rem;
`;

export const SubHeader = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Subtext = styled.span`
  font-size: 0.8rem;
  font-weight: 10;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Grid = styled.div`
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

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
