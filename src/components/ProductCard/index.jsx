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

const ProductCard = ({ product, onAddToCart }) => {
	const isBeverage = product.category === "Bebidas";

	return (
		<Card>
			<CardImage
				src={product.image}
				alt={product.name}
				$isBeverage={isBeverage} // Passa a prop para o styled-component
			/>
			<CardBody>
				<Title>{product.name}</Title>
				<Description>{product.description}</Description>
				<CardFooter>
					<Price>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</Price>
					<AddButton onClick={() => onAddToCart(product)}>Adicionar</AddButton>
				</CardFooter>
			</CardBody>
		</Card>
	);
};

export default ProductCard;
