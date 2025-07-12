import styled from "styled-components";
import { fadeIn } from "../../styles/GlobalStyle";
import { AddButton as BaseAddButton } from "../ProductCard/styles";

export const Card = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 16px;
  padding: 2.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  animation: ${fadeIn} 0.5s ease-out;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 280px;
    min-width: 427px;
    margin-left: -39px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const AddButton = styled(BaseAddButton)`
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  
  &:disabled {
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
  }
`;
