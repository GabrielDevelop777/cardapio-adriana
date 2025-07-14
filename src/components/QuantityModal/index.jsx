import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import {
	ConfirmButton,
	ControlButton,
	Controls,
	FlavorButton,
	FlavorOptions,
	FlavorSection,
	FlavorTitle,
	ModalContainer,
	Overlay,
	QuantityDisplay,
	Subtitle,
	Title,
} from "./styles";

const QuantityModal = ({ isOpen, onClose, product, onConfirm }) => {
	const [quantity, setQuantity] = useState(1);
	const [flavor, setFlavor] = useState("Carne"); // Sabor padrão

	if (!isOpen) return null;

	const handleConfirm = () => {
		onConfirm(product, quantity, flavor);
		onClose();
	};

	return (
		<Overlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<Title>{product.name}</Title>
				<Subtitle>Escolha o sabor e a quantidade</Subtitle>

				<FlavorSection>
					<FlavorTitle>Sabor da Panqueca</FlavorTitle>
					<FlavorOptions>
						<FlavorButton
							$isActive={flavor === "Carne"}
							onClick={() => setFlavor("Carne")}
						>
							Carne
						</FlavorButton>
						<FlavorButton
							$isActive={flavor === "Frango"}
							onClick={() => setFlavor("Frango")}
						>
							Frango
						</FlavorButton>
					</FlavorOptions>
				</FlavorSection>

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
