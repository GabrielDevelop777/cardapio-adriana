import styled from "styled-components";
import { fadeIn } from "../../styles/GlobalStyle";

export const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  flex-grow: 1;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Price = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2a9d8f;
`;

export const AddButton = styled.button`
  background: linear-gradient(90deg, #8E2DE2, #4A00E0);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-size: 200% 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(74, 0, 224, 0.4);
  }
`;
