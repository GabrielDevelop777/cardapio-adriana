import React from "react";
import {
	AddButton,
	Card,
	Description,
	Footer,
	Price,
	Tag,
	Title,
} from "./styles";

const DishOfTheDayCard = ({ product, onAddToCart }) => (
	<Card image={product.image}>
		<Tag>Prato do Dia</Tag>
		<Title>{product.name}</Title>
		<Description>{product.description}</Description>
		<Footer>
			<Price>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</Price>
			<AddButton
				onClick={() => onAddToCart(product)}
				style={{ padding: "0.8rem 1.5rem", fontSize: "1rem" }}
			>
				Adicionar ao Pedido
			</AddButton>
		</Footer>
	</Card>
);

export default DishOfTheDayCard;
