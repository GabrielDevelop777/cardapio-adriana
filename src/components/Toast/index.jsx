import { CheckCircle, Info, XCircle } from "lucide-react";
import React, { useEffect } from "react";
import { ToastContainer } from "./styles";

const Toast = ({ message, duration = 3000, onClose, type = "info" }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [duration, onClose]);

	const getIcon = () => {
		switch (type) {
			case "success":
				return <CheckCircle size={20} />;
			case "error":
				return <XCircle size={20} />;
			default:
				return <Info size={20} />;
		}
	};

	return (
		<ToastContainer $type={type}>
			{getIcon()}
			<span>{message}</span>
		</ToastContainer>
	);
};

export default Toast;
