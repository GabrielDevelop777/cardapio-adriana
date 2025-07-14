import styled from "styled-components";
import { scaleIn } from "../../styles/GlobalStyle";

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1001; /* Acima do AddonModal */
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
  margin-bottom: 1.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #e67e22;
  transition: all 0.2s;
  background-color: #fff;
  color: #e67e22;

  &:hover {
    background-color: #e67e22;
    color: white;
  }
`;
