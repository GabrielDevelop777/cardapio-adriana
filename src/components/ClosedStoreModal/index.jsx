import { XCircle } from "lucide-react";
import { IconWrapper, ModalContainer, Overlay, Title } from "./styles";

const ClosedStoreModal = () => {
	return (
		<Overlay>
			<ModalContainer>
				<IconWrapper>
					<XCircle size={60} strokeWidth={1.5} />
				</IconWrapper>
				<Title>Desculpa, não funcionaremos hoje!</Title>
			</ModalContainer>
		</Overlay>
	);
};

export default ClosedStoreModal;
