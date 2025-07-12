import { Check, Send } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import React, { useState, useMemo } from "react";
import { generatePixCode } from "../../lib/pix";
import {
	ActionButton,
	ButtonGroup,
	ConfirmedContainer,
	Content,
	Overlay,
	PixCodeInput,
	QRCodeWrapper,
	SuccessIcon,
	Text,
	Title,
} from "./styles";

const DELIVERY_FEE = 5.0;

const PixModal = ({ total, onClose, formData, cartItems, deliveryType }) => {
	const [copied, setCopied] = useState(false);
	const [paymentStep, setPaymentStep] = useState("awaiting");

	const pixKey = "+5521980681134";
	const merchantName = "Adriana Silva";
	const merchantCity = "DUQUE DE CAXIAS";

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const pixCode = useMemo(
		() => generatePixCode(pixKey, merchantName, merchantCity, total),
		[total, pixKey, merchantName, merchantCity],
	);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(pixCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleSendReceipt = () => {
		const whatsappNumber = "5521965150526"; // SUBSTITUA PELO SEU NÚMERO

		const orderSummary = cartItems
			.map((item) => `${item.quantity}x ${item.name}`)
			.join("%0A");
		const deliveryInfo =
			deliveryType === "delivery"
				? `*Telefone:* ${formData.phone}%0A*Endereço:* ${formData.address}%0A*Taxa de Entrega:* R$ ${DELIVERY_FEE.toFixed(2).replace(".", ",")}`
				: // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
					`*Modalidade:* Retirar na Loja`;

		const observationInfo = formData.observation
			? `%0A*Observação:* ${formData.observation}`
			: "";

		const message = `
      *Comprovante de Pagamento - Delicias da Dri* ✅%0A
      %0AOlá! Segue o comprovante do meu pedido.%0A
      %0A*Cliente:* ${formData.name}%0A
      ${deliveryInfo}
      ${observationInfo}%0A
      %0A*Itens:*%0A${orderSummary}%0A
      %0A*Total Pago:* R$ ${total.toFixed(2).replace(".", ",")}%0A
      *Pagamento:* PIX
    `
			.trim()
			.replace(/\s+/g, "%20");

		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
		window.open(whatsappUrl, "_blank");
		onClose();
	};

	return (
		<Overlay>
			<Content>
				{paymentStep === "awaiting" ? (
					<>
						<Title>Pagamento via PIX</Title>
						<Text>
							Escaneie o QR Code com o app do seu banco ou use o "Copia e Cola".
						</Text>
						<QRCodeWrapper>
							<QRCodeSVG value={pixCode} size={200} />
						</QRCodeWrapper>
						<PixCodeInput readOnly rows="4" value={pixCode} />
						<ButtonGroup>
							<ActionButton className="copy" onClick={copyToClipboard}>
								{copied ? "Copiado!" : "Copiar Código"}
							</ActionButton>
							<ActionButton
								className="paid"
								onClick={() => setPaymentStep("confirmed")}
							>
								Já Paguei
							</ActionButton>
							<ActionButton className="close" onClick={onClose}>
								Fechar
							</ActionButton>
						</ButtonGroup>
					</>
				) : (
					<ConfirmedContainer>
						<SuccessIcon>
							<Check size={48} />
						</SuccessIcon>
						<Title>Pedido Confirmado!</Title>
						<Text>
							Seu pedido foi recebido. Para agilizar, envie o comprovante de
							pagamento.
						</Text>
						<ButtonGroup>
							<ActionButton className="receipt" onClick={handleSendReceipt}>
								<Send size={18} style={{ marginRight: "8px" }} /> Enviar
								Comprovante
							</ActionButton>
							<ActionButton className="close" onClick={onClose}>
								Fechar
							</ActionButton>
						</ButtonGroup>
					</ConfirmedContainer>
				)}
			</Content>
		</Overlay>
	);
};

export default PixModal;
