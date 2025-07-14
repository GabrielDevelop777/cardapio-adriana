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
  max-width: 380px;
  text-align: center;
  animation: ${scaleIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

export const FlavorSection = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const FlavorTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const FlavorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const FlavorButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  background-color: ${(props) => (props.$isActive ? "#e67e22" : "#f0f2f5")};
  color: ${(props) => (props.$isActive ? "white" : "#333")};
  border: 2px solid ${(props) => (props.$isActive ? "#e67e22" : "#f0f2f5")};
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #e67e22;
  background-color: white;
  color: #e67e22;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #e67e22;
    color: white;
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 2rem;
  font-weight: 600;
  min-width: 50px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(90deg, #e67e22, #f39c12);
  color: white;
  border: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;
