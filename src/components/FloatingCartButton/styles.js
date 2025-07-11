import styled from "styled-components";
import { fadeIn } from "../../styles/GlobalStyle";

export const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  transition: transform 0.2s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #c0392b;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  border: 2px solid white;
`;
