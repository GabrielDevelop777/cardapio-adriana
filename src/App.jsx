import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

import CheckoutDrawer from "./components/CheckoutDrawer";
import DishOfTheDayCard from "./components/DishOfTheDayCard";
import FloatingCartButton from "./components/FloatingCartButton";
import Footer from "./components/Footer"; // Importando o novo componente
import PixModal from "./components/PixModal";
// Importando componentes e dados
import ProductCard from "./components/ProductCard";
import Toast from "./components/Toast";
import { mockData } from "./data/mock";

// --- Estilos do Layout Principal ---
const AppContainer = styled.div``;

const Header = styled.header`
  background: linear-gradient(90deg, #e67e22, #f39c12);
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 4.5rem;
  font-weight: 400;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.25);
  margin: 0;
`;

const HeaderSlogan = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  letter-spacing: 1px;
  opacity: 0.9;
`;

const MainContent = styled.main`
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuSection = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e67e22;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export default function App() {
	const [cart, setCart] = useState([]);
	const [isPixModalOpen, setPixModalOpen] = useState(false);
	const [pixTotal, setPixTotal] = useState(0);
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const [toast, setToast] = useState({
		show: false,
		message: "",
		type: "info",
	});
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		address: "",
		observation: "",
	});
	const [deliveryType, setDeliveryType] = useState("pickup");

	// Efeito para travar o scroll do body quando um modal estiver aberto
	useEffect(() => {
		const body = document.body;
		if (isDrawerOpen || isPixModalOpen) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "auto";
		}

		return () => {
			body.style.overflow = "auto";
		};
	}, [isDrawerOpen, isPixModalOpen]);

	const showToast = (message, duration = 2000, type = "info") => {
		setToast({ show: true, message, duration, type });
	};

	const handleUpdateQuantity = (productId, newQuantity) => {
		if (newQuantity <= 0) {
			setCart((prev) => prev.filter((item) => item.id !== productId));
		} else {
			setCart((prev) =>
				prev.map((item) =>
					item.id === productId ? { ...item, quantity: newQuantity } : item,
				),
			);
		}
	};

	const handleAddToCart = (productToAdd) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === productToAdd.id);
			if (existing) {
				return prev.map((item) =>
					item.id === productToAdd.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...prev, { ...productToAdd, quantity: 1 }];
		});
		showToast(`${productToAdd.name} adicionado!`, 2000, "success");
	};

	const cartTotal = useMemo(
		() => cart.reduce((total, item) => total + item.price * item.quantity, 0),
		[cart],
	);
	const cartItemCount = useMemo(
		() => cart.reduce((count, item) => count + item.quantity, 0),
		[cart],
	);

	const handlePixCheckout = (finalTotal) => {
		if (cart.length > 0) {
			setPixTotal(finalTotal);
			setDrawerOpen(false);
			setPixModalOpen(true);
		}
	};

	const handleClosePixModal = () => {
		setPixModalOpen(false);
		setCart([]);
		setFormData({ name: "", phone: "", address: "", observation: "" });
		setDeliveryType("pickup");
	};

	const handleFloatingCartClick = () => {
		if (cartItemCount === 0) {
			showToast("Seu carrinho está vazio!");
		} else {
			setDrawerOpen(true);
		}
	};

	const productsByCategory = useMemo(() => {
		return mockData.products.reduce((acc, product) => {
			const category = product.category || "Outros";
			if (!acc[category]) acc[category] = [];
			acc[category].push(product);
			return acc;
		}, {});
	}, []);

	return (
		<AppContainer>
			{toast.show && (
				<Toast
					message={toast.message}
					duration={toast.duration}
					type={toast.type}
					onClose={() => setToast({ show: false, message: "", type: "info" })}
				/>
			)}
			<Header>
				<HeaderTitle>Delicias da Dri</HeaderTitle>
				<HeaderSlogan>Aqui, cada sabor no seu lugar!</HeaderSlogan>
			</Header>

			<MainContent>
				<MenuSection>
					<DishOfTheDayCard
						product={mockData.dishOfTheDay}
						onAddToCart={handleAddToCart}
					/>
				</MenuSection>

				{Object.entries(productsByCategory).map(([category, products]) => (
					<MenuSection key={category}>
						<SectionTitle>{category}</SectionTitle>
						<ProductList>
							{products.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									onAddToCart={handleAddToCart}
								/>
							))}
						</ProductList>
					</MenuSection>
				))}
			</MainContent>

			<FloatingCartButton
				itemCount={cartItemCount}
				onClick={handleFloatingCartClick}
			/>

			<CheckoutDrawer
				isOpen={isDrawerOpen}
				onClose={() => setDrawerOpen(false)}
				cartItems={cart}
				cartTotal={cartTotal}
				onUpdateQuantity={handleUpdateQuantity}
				onPixCheckout={handlePixCheckout}
				formData={formData}
				onFormChange={setFormData}
				deliveryType={deliveryType}
				onDeliveryTypeChange={setDeliveryType}
				showToast={showToast}
			/>

			{isPixModalOpen && (
				<PixModal
					total={pixTotal}
					onClose={handleClosePixModal}
					formData={formData}
					cartItems={cart}
					deliveryType={deliveryType}
				/>
			)}

			<Footer />
		</AppContainer>
	);
}
