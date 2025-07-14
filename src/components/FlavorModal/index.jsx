import React from "react";
import {
	ActionButton,
	ButtonGroup,
	ModalContainer,
	Overlay,
	Title,
} from "./styles";

const FlavorModal = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	const handleConfirm = (flavor) => {
		onConfirm(flavor);
		onClose();
	};

	return (
		<Overlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<Title>Qual o sabor da Panqueca?</Title>
				<ButtonGroup>
					<ActionButton onClick={() => handleConfirm("Carne")}>
						Carne
					</ActionButton>
					<ActionButton onClick={() => handleConfirm("Frango")}>
						Frango
					</ActionButton>
				</ButtonGroup>
			</ModalContainer>
		</Overlay>
	);
};

export default FlavorModal;
