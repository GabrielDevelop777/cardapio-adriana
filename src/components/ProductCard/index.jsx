import React from "react";
import {
	AddButton,
	Card,
	CardBody,
	CardFooter,
	CardImage,
	Description,
	Price,
	Title,
} from "./styles";

const ProductCard = ({
	product,
	onOpenQuantityModal,
	onOpenAddonModal,
	isStoreOpen,
	countdown,
}) => {
	const isBeverage = product.category === "Bebidas";

	const handleAddClick = () => {
		if (product.requiresQuantityModal) {
			onOpenQuantityModal(product);
		} else if (product.requiresAddonModal) {
			onOpenAddonModal(product);
		} else {
			// Para produtos simples, chama a função de adicionar diretamente
			onOpenAddonModal(product); // Reutiliza a lógica para adicionar sem addon
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
