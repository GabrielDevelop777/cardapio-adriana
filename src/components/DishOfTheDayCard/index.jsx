import React from "react";
import { AddButton, Card, Description, Footer, Price, Title } from "./styles";

const DishOfTheDayCard = ({ product, onAddToCart, isStoreOpen, countdown }) => (
	<Card image={product.image}>
		<Title>{product.name}</Title>
		<Description>{product.description}</Description>
		<Footer>
			<Price>{`R$ ${product.price.toFixed(2).replace(".", ",")}`}</Price>
			<AddButton
				onClick={() => onAddToCart(product)}
				disabled={!isStoreOpen}
				style={{ padding: "0.8rem 1.5rem", fontSize: "1rem" }}
			>
				{isStoreOpen ? "Adicionar ao Pedido" : `Abre em ${countdown}`}
			</AddButton>
		</Footer>
	</Card>
);

export default DishOfTheDayCard;
