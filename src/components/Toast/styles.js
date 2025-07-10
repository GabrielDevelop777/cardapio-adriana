import styled from "styled-components";
// CORREÇÃO: Importando a animação com o nome correto 'toastInRight'.
import { toastInRight } from "../../styles/GlobalStyle";

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(90deg, #8E2DE2, #4A00E0);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  z-index: 2000;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${toastInRight} 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
`;
