import { Clock } from "lucide-react";
import {
	CloseButton,
	IconWrapper,
	ModalContainer,
	ModalHeader,
	Overlay,
	Subtitle,
	Title,
} from "./styles";

const ClosedStoreModal = ({ onClose }) => {
	return (
		<Overlay onClick={onClose}>
			{/* e.stopPropagation() impede que o clique no modal feche ele */}
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<ModalHeader>
					<CloseButton onClick={onClose}></CloseButton>
				</ModalHeader>

				<IconWrapper>
					{/* Ícone mais amigável e contextual */}
					<Clock size={50} strokeWidth={1.5} />
				</IconWrapper>

				<Title>Estamos fechados no momento</Title>

				<Subtitle>
					Nosso horário de funcionamento é de Segunda a Sexta, das 10:00 às
					16:00.
				</Subtitle>
			</ModalContainer>
		</Overlay>
	);
};

export default ClosedStoreModal;
