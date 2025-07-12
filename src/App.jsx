import React, { useState, useMemo, useEffect, useCallback } from "react";
import styled from "styled-components";

import CheckoutDrawer from "./components/CheckoutDrawer";
import DishOfTheDayCard from "./components/DishOfTheDayCard";
import FloatingCartButton from "./components/FloatingCartButton";
import Footer from "./components/Footer";
import PixModal from "./components/PixModal";
// Importando componentes e dados
import ProductCard from "./components/ProductCard";
import Toast from "./components/Toast";
import { mockData } from "./data/mock";
import useCountdown from "./hooks/useCountdown";

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

const StatusBadge = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1rem;
  background-color: ${(props) => (props.$isOpen ? "#2ecc71" : "#e74c3c")};
  color: white;
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
`;

const MainContent = styled.main`
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuSection = styled.section`
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e67e22;
`;

const DishOfTheDayTitle = styled(SectionTitle)`
  text-align: center;
  border-bottom: none;
  font-size: 2.5rem;
  color: #333;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: #e67e22;
    margin: 0.75rem auto 0;
    border-radius: 2px;
  }
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
	const [isStoreOpen, setIsStoreOpen] = useState(false);
	const countdown = useCountdown(11);

	useEffect(() => {
		const checkStoreStatus = () => {
			const now = new Date();
			const currentHour = now.getHours();
			const isOpen = currentHour >= 11 && currentHour < 20;
			setIsStoreOpen(isOpen);
		};

		checkStoreStatus();
		const interval = setInterval(checkStoreStatus, 60000);

		return () => clearInterval(interval);
	}, []);

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

	const handleCloseToast = useCallback(() => {
		setToast((prev) => ({ ...prev, show: false }));
	}, []);

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
		if (!isStoreOpen) {
			showToast("Desculpe, estamos fechados no momento.", 3000, "error");
			return;
		}
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
		if (!isStoreOpen) {
			showToast("Desculpe, estamos fechados no momento.", 3000, "error");
			return;
		}
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
					onClose={handleCloseToast}
				/>
			)}
			<Header>
				<HeaderTitle>Delicias da Dri</HeaderTitle>
				<HeaderSlogan>"Aqui, é cada sabor no seu lugar!"</HeaderSlogan>
				<StatusBadge $isOpen={isStoreOpen}>
					{isStoreOpen ? "Aberto" : "Fechado"}
				</StatusBadge>
			</Header>

			<MainContent>
				<MenuSection>
					<DishOfTheDayTitle>Prato do Dia</DishOfTheDayTitle>
					<DishOfTheDayCard
						product={mockData.dishOfTheDay}
						onAddToCart={handleAddToCart}
						isStoreOpen={isStoreOpen}
						countdown={countdown}
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
									isStoreOpen={isStoreOpen}
									countdown={countdown}
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
