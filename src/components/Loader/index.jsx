import React, { useEffect, useState } from "react";
import logoUrl from "../../assets/adriana.svg";

import {
  LoaderContent,
  LoaderOverlay,
  LogoContainer,
  PercentageText,
  ProgressBarContainer,
  ProgressBarFill,
  LoadingDots,
  GlowEffect,
} from "./styles";

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onLoaded, 500);
          return 100;
        }
        // Velocidade variável para simular carregamento real
        const increment = prev > 70 ? 1 : prev > 40 ? 2 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <LoaderOverlay $isComplete={isComplete}>
      <LoaderContent>
        <LogoContainer $isComplete={isComplete}>
          <GlowEffect />
          <img src={logoUrl} alt="Carregando Delícias da Dri" />
        </LogoContainer>

        <ProgressBarContainer>
          <ProgressBarFill progress={progress} $isComplete={isComplete} />
        </ProgressBarContainer>

        <PercentageText $isComplete={isComplete}>
          {progress}%
        </PercentageText>

        <LoadingDots>
          <span></span>
          <span></span>
          <span></span>
        </LoadingDots>
      </LoaderContent>
    </LoaderOverlay>
  );
};

export default Loader;