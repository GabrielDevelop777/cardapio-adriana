import { useEffect, useState } from "react";

const useCountdown = (targetHour) => {
	const calculateTimeLeft = () => {
		const now = new Date();
		const targetDate = new Date();

		targetDate.setHours(targetHour, 0, 0, 0);

		// Se o horário alvo de hoje já passou, define para o dia seguinte
		if (now.getHours() >= targetHour) {
			targetDate.setDate(targetDate.getDate() + 1);
		}

		const difference = targetDate - now;

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				hours: Math.floor(difference / (1000 * 60 * 60)),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		// Limpa o timer quando o componente é desmontado
		return () => clearTimeout(timer);
	});

	const formatTime = (time) => {
		return String(time).padStart(2, "0");
	};

	if (!timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds) {
		return "Em breve...";
	}

	return `${formatTime(timeLeft.hours)}h ${formatTime(timeLeft.minutes)}m ${formatTime(timeLeft.seconds)}s`;
};

export default useCountdown;
