// import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
// import {
// 	CheckoutButton,
// 	ClearButton,
// 	Container,
// 	ControlButton,
// 	Footer,
// 	Item,
// 	ItemControls,
// 	ItemImage,
// 	ItemInfo,
// 	ItemName,
// 	ItemPrice,
// 	ItemQuantity,
// 	Title,
// 	Total,
// } from "./styles";

// const Cart = ({
// 	cartItems,
// 	onUpdateQuantity,
// 	onClearCart,
// 	onCheckout,
// 	total,
// }) => (
// 	<Container>
// 		<Title>
// 			<ShoppingCart size={28} /> Meu Pedido
// 		</Title>
// 		{cartItems.length === 0 ? (
// 			<p style={{ textAlign: "center", color: "#888", padding: "2rem 0" }}>
// 				Seu carrinho está vazio.
// 			</p>
// 		) : (
// 			<>
// 				{cartItems.map((item) => (
// 					<Item key={item.id}>
// 						<ItemImage src={item.image} alt={item.name} />
// 						<ItemInfo>
// 							<ItemName>{item.name}</ItemName>
// 							<ItemPrice>
// 								R$ {item.price.toFixed(2).replace(".", ",")}
// 							</ItemPrice>
// 						</ItemInfo>
// 						<ItemControls>
// 							<ControlButton
// 								onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
// 							>
// 								<MinusCircle size={20} />
// 							</ControlButton>
// 							<ItemQuantity>{item.quantity}</ItemQuantity>
// 							<ControlButton
// 								onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
// 							>
// 								<PlusCircle size={20} />
// 							</ControlButton>
// 						</ItemControls>
// 					</Item>
// 				))}
// 				<Footer>
// 					<ClearButton onClick={onClearCart}>Limpar carrinho</ClearButton>
// 					<Total>
// 						<span>Total:</span>
// 						<span>R$ {total.toFixed(2).replace(".", ",")}</span>
// 					</Total>
// 					<CheckoutButton
// 						onClick={onCheckout}
// 						disabled={cartItems.length === 0}
// 					>
// 						Finalizar e Pagar
// 					</CheckoutButton>
// 				</Footer>
// 			</>
// 		)}
// 	</Container>
// );

// export default Cart;
