import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
`;

const pulse = keyframes`
  0% { transform: scale(0.98); }
  50% { transform: scale(1.02); }
  100% { transform: scale(0.98); }
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${(props) => (props.$isFadingOut ? fadeOut : "none")} 0.5s ease-out forwards;
`;

export const LoaderContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const LogoContainer = styled.div`
  width: 470px;
  animation: ${pulse} 2s infinite ease-in-out;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 280px;
  height: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 130%;
  width: ${(props) => props.progress}%;
  background: linear-gradient(90deg, #e67e22, #f39c12);
  border-radius: 5px;
  transition: width 0.1s linear;
`;

export const PercentageText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
`;
