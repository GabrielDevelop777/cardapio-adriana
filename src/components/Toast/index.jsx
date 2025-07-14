import { CheckCircle, Info, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "./styles";

const Toast = ({ id, message, duration = 3000, onClose, type = "info" }) => {
	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsExiting(true);
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [duration]);

	const handleAnimationEnd = () => {
		if (isExiting) {
			onClose(id); // Passa o ID para o pai remover este toast específico
		}
	};

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
		<ToastContainer
			$type={type}
			$isExiting={isExiting}
			onAnimationEnd={handleAnimationEnd}
		>
			{getIcon()}
			<span>{message}</span>
		</ToastContainer>
	);
};

export default Toast;
