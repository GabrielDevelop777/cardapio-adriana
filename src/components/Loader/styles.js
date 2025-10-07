import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  70% { 
    opacity: 0.3; 
    transform: scale(1.05);
  }
  100% { 
    opacity: 0; 
    transform: scale(1.1);
    visibility: hidden; 
  }
`;

const breathe = keyframes`
  0%, 100% { 
    transform: scale(1);
    filter: drop-shadow(0 0 20px rgba(230, 126, 34, 0.3));
  }
  50% { 
    transform: scale(1.05);
    filter: drop-shadow(0 0 30px rgba(230, 126, 34, 0.6));
  }
`;

const progressShine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const dotsAnimation = keyframes`
  0%, 20% {
    opacity: 0;
    transform: translateY(0);
  }
  40% {
    opacity: 1;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${(props) => (props.$isComplete ? fadeOut : "none")} 0.8s ease-out forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(230, 126, 34, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const LoaderContent = styled.div`
margin-top: -100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${slideUp} 0.6s ease-out;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${breathe} 3s infinite ease-in-out;
  transition: all 0.5s ease;

  img {
    width: 100vw;
    height: auto;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
  }

  ${(props) =>
		props.$isComplete &&
		`
    transform: scale(1.1);
    filter: drop-shadow(0 0 40px rgba(230, 126, 34, 0.8));
  `}

  @media (max-width: 768px) {
    width: 600px;
    height: 600px;
  }
`;

export const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(230, 126, 34, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${glowPulse} 2s infinite ease-in-out;
  z-index: 1;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const ProgressBarContainer = styled.div`
  margin-top: -30%;
  width: 320px;
  height: 6px;
  background-color: #f1f2f6;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${progressShine} 2s infinite;
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background: linear-gradient(90deg, #e67e22 0%, #f39c12 50%, #f1c40f 100%);
  background-size: 200% 100%;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: ${progressShine} 2s infinite;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
    border-radius: 50px;
    opacity: ${(props) => (props.progress > 5 ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  ${(props) =>
		props.$isComplete &&
		`
    box-shadow: 0 0 20px rgba(230, 126, 34, 0.6);
    background: linear-gradient(90deg, #27ae60 0%, #2ecc71 100%);
  `}
`;

export const PercentageText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  ${(props) =>
		props.$isComplete &&
		`
    color: #27ae60;
    transform: scale(1.1);
  `}

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e67e22, #f39c12);
    animation: ${dotsAnimation} 1.4s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
