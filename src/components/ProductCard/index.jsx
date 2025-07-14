import React, { useState } from "react";
import {
	AddButton,
	AddonButton,
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
	onAddAddon,
	onOpenQuantityModal,
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

		// Se for o frango com opção de mistura, cria um produto modificado
		if (product.mixOption && isMixed) {
			const mixedProduct = {
				...product,
				id: `${product.id}-mixed`, // ID único para o item misto
				name: `${product.name} (Misto com Toscana)`,
			};
			onAddToCart(mixedProduct);
		} else {
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
					{product.addon && isStoreOpen && (
						<AddonButton onClick={() => onAddAddon(product)}>
							+ {product.addon.name} (R${" "}
							{product.addon.price.toFixed(2).replace(".", ",")})
						</AddonButton>
					)}
				</CardFooter>
			</CardBody>
		</Card>
	);
};

export default ProductCard;
