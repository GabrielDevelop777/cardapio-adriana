import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.98);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.02);
    opacity: 1;
  }
  100% {
    transform: scale(0.98);
    opacity: 0.9;
  }
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFFBF5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${(props) => (props.$isFadingOut ? fadeOut : "none")} 0.7s ease-out forwards;
  animation-delay: ${(props) => (props.$isFadingOut ? "1.5s" : "0s")}; /* Pequeno delay para a animação */
`;

export const LoaderContent = styled.div`
  text-align: center;
`;

export const LoaderTitle = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 4rem;
  font-weight: 400;
  color: #e67e22;
  animation: ${pulse} 2s infinite ease-in-out;
`;
