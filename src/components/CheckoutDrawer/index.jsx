import {
	CreditCard,
	DollarSign,
	MinusCircle,
	PlusCircle,
	Store,
	Truck,
	X,
} from "lucide-react";
import React, { useState, useMemo } from "react";
import {
	CartList,
	CloseButton,
	Content,
	ControlButton,
	DeliveryFeeMessage,
	DrawerContainer,
	FinalizeButton,
	Footer,
	Form,
	Header,
	Input,
	Item,
	ItemControls,
	ItemImage,
	ItemInfo,
	ItemName,
	ItemPrice,
	ItemQuantity,
	OptionButton,
	OptionsGroup,
	Overlay,
	SectionTitle,
	Total,
} from "./styles";

const DELIVERY_FEE = 5.0;

const CheckoutDrawer = ({
	isOpen,
	onClose,
	cartItems,
	cartTotal,
	onUpdateQuantity,
	onPixCheckout,
	formData = { name: "", phone: "", address: "" },
	onFormChange,
	deliveryType,
	onDeliveryTypeChange,
}) => {
	const [paymentMethod, setPaymentMethod] = useState("pix");

	const finalTotal = useMemo(() => {
		return deliveryType === "delivery" ? cartTotal + DELIVERY_FEE : cartTotal;
	}, [cartTotal, deliveryType]);

	if (!isOpen) return null;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		onFormChange((prev) => ({ ...prev, [name]: value }));
	};

	const handleFinalizeOrder = () => {
		const isDelivery = deliveryType === "delivery";
		if (
			!formData.name ||
			(isDelivery && (!formData.phone || !formData.address))
		) {
			alert("Por favor, preencha todos os campos necessários.");
			return;
		}

		if (paymentMethod === "pix") {
			onPixCheckout(finalTotal);
		} else {
			const orderSummary = cartItems
				.map((item) => `${item.quantity}x ${item.name}`)
				.join("%0A");
			const deliveryInfo = isDelivery
				? `*Telefone:* ${formData.phone}%0A*Endereço:* ${formData.address}%0A*Taxa de Entrega:* R$ ${DELIVERY_FEE.toFixed(2).replace(".", ",")}`
				: "*Modalidade:* Retirar na Loja";

			const message = `
        *Novo Pedido - Delicias da Dri* 🚀%0A
        %0A*Cliente:* ${formData.name}%0A
        ${deliveryInfo}%0A
        %0A*Itens:*%0A${orderSummary}%0A
        %0A*Total:* R$ ${finalTotal.toFixed(2).replace(".", ",")}%0A
        *Pagamento:* Dinheiro
      `
				.trim()
				.replace(/\s+/g, "%20");

			const whatsappNumber = "5521999999999"; // SUBSTITUA PELO SEU NÚMERO
			const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

			window.open(whatsappUrl, "_blank");
			onClose();
		}
	};

	return (
		<Overlay onClick={onClose}>
			<DrawerContainer onClick={(e) => e.stopPropagation()}>
				<Header>
					<h2>Finalizar Pedido</h2>
					<CloseButton onClick={onClose}>
						<X size={24} />
					</CloseButton>
				</Header>

				<Content>
					<SectionTitle>Seu Pedido</SectionTitle>
					<CartList>
						{cartItems.map((item) => (
							<Item key={item.id}>
								<ItemImage src={item.image} alt={item.name} />
								<ItemInfo>
									<ItemName>{item.name}</ItemName>
									<ItemPrice>
										R$ {item.price.toFixed(2).replace(".", ",")}
									</ItemPrice>
								</ItemInfo>
								<ItemControls>
									<ControlButton
										onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
									>
										<MinusCircle size={20} />
									</ControlButton>
									<ItemQuantity>{item.quantity}</ItemQuantity>
									<ControlButton
										onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
									>
										<PlusCircle size={20} />
									</ControlButton>
								</ItemControls>
							</Item>
						))}
					</CartList>

					<SectionTitle>Opção de Entrega</SectionTitle>
					<OptionsGroup>
						<OptionButton
							$isActive={deliveryType === "pickup"}
							onClick={() => onDeliveryTypeChange("pickup")}
						>
							<Store size={20} /> Retirar na Loja
						</OptionButton>
						<OptionButton
							$isActive={deliveryType === "delivery"}
							onClick={() => onDeliveryTypeChange("delivery")}
						>
							<Truck size={20} /> Entrega
						</OptionButton>
					</OptionsGroup>

					<SectionTitle>Seus Dados</SectionTitle>
					<Form>
						<Input
							type="text"
							name="name"
							placeholder="Seu Nome"
							value={formData.name}
							onChange={handleInputChange}
							required
						/>
						{deliveryType === "delivery" && (
							<>
								<Input
									type="tel"
									name="phone"
									placeholder="Telefone (WhatsApp)"
									value={formData.phone}
									onChange={handleInputChange}
									required
								/>
								<Input
									type="text"
									name="address"
									placeholder="Endereço Completo para Entrega"
									value={formData.address}
									onChange={handleInputChange}
									required
								/>
								<DeliveryFeeMessage>
									Taxa de entrega: R${" "}
									{DELIVERY_FEE.toFixed(2).replace(".", ",")}
								</DeliveryFeeMessage>
							</>
						)}
					</Form>

					<SectionTitle>Forma de Pagamento</SectionTitle>
					<OptionsGroup>
						<OptionButton
							$isActive={paymentMethod === "pix"}
							onClick={() => setPaymentMethod("pix")}
						>
							<CreditCard size={20} /> PIX
						</OptionButton>
						<OptionButton
							$isActive={paymentMethod === "dinheiro"}
							onClick={() => setPaymentMethod("dinheiro")}
						>
							<DollarSign size={20} /> Dinheiro
						</OptionButton>
					</OptionsGroup>
				</Content>

				<Footer>
					<Total>
						<span>Total:</span>
						<span>R$ {finalTotal.toFixed(2).replace(".", ",")}</span>
					</Total>
					<FinalizeButton onClick={handleFinalizeOrder}>
						{paymentMethod === "pix"
							? "Pagar com PIX"
							: "Enviar Pedido via WhatsApp"}
					</FinalizeButton>
				</Footer>
			</DrawerContainer>
		</Overlay>
	);
};

export default CheckoutDrawer;
