import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import {
	ConfirmButton,
	ControlButton,
	Controls,
	ModalContainer,
	Overlay,
	QuantityDisplay,
	Subtitle,
	Title,
} from "./styles";

const QuantityModal = ({ isOpen, onClose, product, onConfirm }) => {
	const [quantity, setQuantity] = useState(1);

	if (!isOpen) return null;

	const handleConfirm = () => {
		onConfirm(product, quantity);
		onClose();
	};

	return (
		<Overlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<Title>{product.name}</Title>
				<Subtitle>Quantas unidades você deseja?</Subtitle>
				<Controls>
					<ControlButton onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
						<Minus size={24} />
					</ControlButton>
					<QuantityDisplay>{quantity}</QuantityDisplay>
					<ControlButton onClick={() => setQuantity((q) => q + 1)}>
						<Plus size={24} />
					</ControlButton>
				</Controls>
				<ConfirmButton onClick={handleConfirm}>
					Adicionar ao Carrinho
				</ConfirmButton>
			</ModalContainer>
		</Overlay>
	);
};

export default QuantityModal;
