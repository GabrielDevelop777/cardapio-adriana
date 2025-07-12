import React from "react";

// Componente SVG para o ícone do PIX
const PixIcon = ({ size = 20, color = "currentColor" }) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.0001 12.29L15.2901 9L12.0001 5.71L8.71011 9L12.0001 12.29Z"
			fill={color}
		/>
		<path
			d="M5.71011 15L9.00011 18.29L12.2901 15L9.00011 11.71L5.71011 15Z"
			fill={color}
		/>
		<path
			d="M15.29 15L18.58 11.71L15.29 8.42004L12 11.71L15.29 15Z"
			fill={color}
		/>
		<path
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
			fill={color}
		/>
	</svg>
);

export default PixIcon;
