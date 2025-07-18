import {
	ActionButton,
	ButtonGroup,
	ModalContainer,
	Overlay,
	Title,
} from "./styles";

const AddonModal = ({ isOpen, onClose, product, onConfirm }) => {
	if (!isOpen || !product || !product.addon) return null;

	const handleConfirm = (response) => {
		onConfirm(product, response);
		onClose();
	};

	return (
		<Overlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<Title>{product.addon.question}</Title>
				<ButtonGroup>
					<ActionButton className="deny" onClick={() => handleConfirm(false)}>
						{product.addon.denyText || "Não, obrigado"}
					</ActionButton>
					<ActionButton className="confirm" onClick={() => handleConfirm(true)}>
						{product.addon.confirmText || "Sim, adicionar"}
					</ActionButton>
				</ButtonGroup>
			</ModalContainer>
		</Overlay>
	);
};

export default AddonModal;
