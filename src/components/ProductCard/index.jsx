import React, { useState } from "react";
import {
	AddButton,
	Card,
	CardBody,
	CardFooter,
	CardImage,
	Description,
	MixCheckbox,
	MixLabel,
	MixOptionContainer,
	Price,
	Title,
} from "./styles";

const ProductCard = ({
	product,
	onAddToCart,
	onOpenQuantityModal,
	onOpenAddonModal,
	isStoreOpen,
	countdown,
}) => {
	const [isMixed, setIsMixed] = useState(false);
	const isBeverage = product.category === "Bebidas";

	const handleAddClick = () => {
		if (product.requiresQuantityModal) {
			onOpenQuantityModal(product);
			return;
		}
		if (product.requiresAddonModal) {
			onOpenAddonModal(product);
			return;
		}

		// Lógica para o Frango Empanado com opção de mistura
		if (product.mixOption) {
			if (isMixed) {
				const mixedProduct = {
					...product,
					id: `${product.id}-mixed`,
					name: `${product.name} (Misto com Toscana)`,
				};
				onAddToCart(mixedProduct);
			} else {
				onAddToCart(product);
			}
		} else {
			// Para produtos simples sem nenhuma opção
			onAddToCart(product);
		}
	};

	return (
		<Card>
			<CardImage
				src={product.image}
				alt={product.name}
				$isBeverage={isBeverage}
			/>
			<CardBody>
				<Title>{product.name}</Title>
				<Description>{product.description}</Description>

				{product.mixOption && (
					<MixOptionContainer>
						<MixCheckbox
							type="checkbox"
							id={`mix-${product.id}`}
							checked={isMixed}
							onChange={(e) => setIsMixed(e.target.checked)}
							disabled={!isStoreOpen}
						/>
						<MixLabel htmlFor={`mix-${product.id}`}>
							Misturar com Toscana
						</MixLabel>
					</MixOptionContainer>
				)}

				<CardFooter>
					<Price>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</Price>
					<AddButton onClick={handleAddClick} disabled={!isStoreOpen}>
						{isStoreOpen ? "Adicionar" : `Abre em ${countdown}`}
					</AddButton>
				</CardFooter>
			</CardBody>
		</Card>
	);
};

export default ProductCard;
