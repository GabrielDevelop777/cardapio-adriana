import styled from "styled-components";
import { scaleIn } from "../../styles/GlobalStyle";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 251, 245, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9998; /* Abaixo do loader e toasts */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  animation: ${scaleIn} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid #eee;
`;

export const IconWrapper = styled.div`
  color: #c0392b;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
`;
