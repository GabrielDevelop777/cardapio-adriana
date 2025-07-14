import styled from "styled-components";
import { scaleIn } from "../../styles/GlobalStyle";

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  animation: ${scaleIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;

  &.confirm {
    background-color: #2ecc71;
    color: white;
    border-color: #2ecc71;
    &:hover { background-color: #27ae60; }
  }

  &.deny {
    background-color: #f1f2f6;
    color: #555;
    &:hover { background-color: #dfe4ea; }
  }
`;
