import styled from "styled-components";
import { fadeIn } from "../../styles/GlobalStyle";

export const Card = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.image}) no-repeat center center;
  background-size: cover;
  border-radius: 16px;
  padding: 2rem;
  color: white;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Tag = styled.span`
background: linear-gradient(90deg, #8E2DE2, #4A00E0);  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

// Reutilizando o botão do ProductCard
export { AddButton } from "../ProductCard/styles";
