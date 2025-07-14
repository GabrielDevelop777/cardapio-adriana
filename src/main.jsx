import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./containers/Home";
import { GlobalStyle } from "./styles/GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyle />
		<Home />
		<Analytics />
	</React.StrictMode>,
);
