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

const ProductCard = ({ product, onAddToCart, isStoreOpen, countdown }) => {
	const isBeverage = product.category === "Bebidas";

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
					<AddButton
						onClick={() => onAddToCart(product)}
						disabled={!isStoreOpen}
					>
						{isStoreOpen ? "Adicionar" : `Abre em ${countdown}`}
					</AddButton>
				</CardFooter>
			</CardBody>
		</Card>
	);
};

export default ProductCard;
