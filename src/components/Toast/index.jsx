import { CheckCircle, Info } from "lucide-react";
import React, { useEffect } from "react";
import { ToastContainer } from "./styles";

const Toast = ({ message, duration = 2000, onClose, type = "info" }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [duration, onClose]);

	const icon =
		type === "success" ? <CheckCircle size={20} /> : <Info size={20} />;

	return (
		<ToastContainer>
			{icon}
			<span>{message}</span>
		</ToastContainer>
	);
};

export default Toast;
