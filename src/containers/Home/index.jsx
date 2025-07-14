import React, { useState, useMemo, useEffect, useCallback } from "react";

import CheckoutDrawer from "../../components/CheckoutDrawer";
import DishOfTheDayCard from "../../components/DishOfTheDayCard";
import FloatingCartButton from "../../components/FloatingCartButton";
import Footer from "../../components/Footer";
// Importando componentes e dados
import Loader from "../../components/Loader";
import PixModal from "../../components/PixModal";
import ProductCard from "../../components/ProductCard";
import QuantityModal from "../../components/QuantityModal";
import Toast from "../../components/Toast";
import { mockData } from "../../data/mock";
import useCountdown from "../../hooks/useCountdown";
import {
	AppContainer,
	DishOfTheDayTitle,
	Header,
	HeaderSlogan,
	HeaderTitle,
	MainContent,
	MenuSection,
	ProductList,
	SectionTitle,
	StatusBadge,
	ToastManager,
} from "./styles";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);
	const [cart, setCart] = useState([]);
	const [isPixModalOpen, setPixModalOpen] = useState(false);
	const [pixTotal, setPixTotal] = useState(0);
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const [toasts, setToasts] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		address: "",
		observation: "",
	});
	const [deliveryType, setDeliveryType] = useState("pickup");
	const [isStoreOpen, setIsStoreOpen] = useState(false);
	const [isQuantityModalOpen, setIsQuantityModalOpen] = useState(false);
	const [selectedProductForQuantity, setSelectedProductForQuantity] =
		useState(null);
	const countdown = useCountdown(11);

	useEffect(() => {
		const handleLoad = () => {
			setIsFadingOut(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 1000); // Duração da animação de fade-out
		};

		// Se a janela já carregou, executa imediatamente.
		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			// Limpa o event listener se o componente for desmontado
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	useEffect(() => {
		const checkStoreStatus = () => {
			const now = new Date();
			const currentHour = now.getHours();
			const isOpen = currentHour >= 11 && currentHour < 23;
			setIsStoreOpen(isOpen);
		};
		checkStoreStatus();
		const interval = setInterval(checkStoreStatus, 60000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const body = document.body;
		if (isDrawerOpen || isPixModalOpen || isQuantityModalOpen) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "auto";
		}
		return () => {
			body.style.overflow = "auto";
		};
	}, [isDrawerOpen, isPixModalOpen, isQuantityModalOpen]);

	const showToast = (message, duration = 3000, type = "info") => {
		const id = Date.now() + Math.random();
		setToasts((prev) => [...prev, { id, message, duration, type }]);
	};

	const handleCloseToast = useCallback((id) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	// ... (outras funções permanecem as mesmas)
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

	const handleAddToCart = (productToAdd, quantity = 1, flavor = null) => {
		if (!isStoreOpen) {
			showToast("Desculpe, estamos fechados no momento.", 3000, "error");
			return;
		}

		const finalProduct = { ...productToAdd };
		if (flavor) {
			finalProduct.name = `${productToAdd.name} de ${flavor}`;
			finalProduct.id = `${productToAdd.id}-${flavor.toLowerCase()}`;
		}

		setCart((prev) => {
			const existing = prev.find((item) => item.id === finalProduct.id);
			if (existing) {
				return prev.map((item) =>
					item.id === finalProduct.id
						? { ...item, quantity: item.quantity + quantity }
						: item,
				);
			}
			return [...prev, { ...finalProduct, quantity }];
		});
		showToast(`${finalProduct.name} adicionado!`, 2000, "success");
	};

	const handleAddAddon = (product) => {
		if (!isStoreOpen) {
			showToast("Desculpe, estamos fechados no momento.", 3000, "error");
			return;
		}
		const comboProduct = {
			...product,
			id: `${product.id}-addon`,
			name: `${product.name} com ${product.addon.name}`,
			price: product.price + product.addon.price,
		};
		handleAddToCart(comboProduct);
	};

	const handleOpenQuantityModal = (product) => {
		if (!isStoreOpen) {
			showToast("Desculpe, estamos fechados no momento.", 3000, "error");
			return;
		}
		setSelectedProductForQuantity(product);
		setIsQuantityModalOpen(true);
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

	if (isLoading) {
		return <Loader isFadingOut={isFadingOut} />;
	}

	return (
		<AppContainer>
			<ToastManager>
				{toasts.map((toast) => (
					<Toast
						key={toast.id}
						id={toast.id}
						message={toast.message}
						duration={toast.duration}
						type={toast.type}
						onClose={handleCloseToast}
					/>
				))}
			</ToastManager>

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
									onAddAddon={handleAddAddon}
									onOpenQuantityModal={handleOpenQuantityModal}
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

			<QuantityModal
				isOpen={isQuantityModalOpen}
				onClose={() => setIsQuantityModalOpen(false)}
				product={selectedProductForQuantity}
				onConfirm={handleAddToCart}
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
