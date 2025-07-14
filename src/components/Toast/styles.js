import styled, { css } from "styled-components";
import { toastInRight, toastOutRight } from "../../styles/GlobalStyle";

// O ToastContainer agora não tem mais position: fixed.
// Ele é um item flex dentro do ToastManager.
export const ToastContainer = styled.div`
  background: ${(props) =>
		props.$type === "error"
			? "linear-gradient(90deg, #e74c3c, #c0392b)"
			: "linear-gradient(90deg, #e67e22, #f39c12)"};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  max-width: 350px;
  
  animation: ${toastInRight} 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);

  ${(props) =>
		props.$isExiting &&
		css`
    animation: ${toastOutRight} 0.5s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
  `}
`;
