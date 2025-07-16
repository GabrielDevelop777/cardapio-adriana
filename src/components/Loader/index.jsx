import React, { useState, useEffect } from "react";
import logoUrl from "../../assets/logo.png"; // Importando como URL
import {
	LoaderContent,
	LoaderOverlay,
	LogoContainer,
	PercentageText,
	ProgressBarContainer,
	ProgressBarFill,
} from "./styles";

const Loader = ({ onLoaded }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(onLoaded, 300);
					return 100;
				}
				return prev + 2;
			});
		}, 40);

		return () => clearInterval(interval);
	}, [onLoaded]);

	return (
		<LoaderOverlay>
			<LoaderContent>
				<LogoContainer>
					<img src={logoUrl} alt="Carregando Delicias da Dri" />
				</LogoContainer>
				<ProgressBarContainer>
					<ProgressBarFill progress={progress} />
				</ProgressBarContainer>
				<PercentageText>{progress}%</PercentageText>
			</LoaderContent>
		</LoaderOverlay>
	);
};

export default Loader;
