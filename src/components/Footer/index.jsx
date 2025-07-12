import { Facebook, Instagram, Phone } from "lucide-react";
import React from "react";
import {
	Copyright,
	FooterContainer,
	FooterTitle,
	InfoSection,
	SocialLink,
	SocialLinks,
} from "./styles";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterContainer>
			<FooterTitle>Delicias da Dri</FooterTitle>

			<SocialLinks>
				<SocialLink
					href="https://www.instagram.com/adriana_silva101/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<Instagram size={28} />
				</SocialLink>
				<SocialLink
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<Facebook size={28} />
				</SocialLink>
				<SocialLink
					href="https://wa.me/5521965150526"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
				>
					<Phone size={28} />
				</SocialLink>
			</SocialLinks>

			<InfoSection>
				<p>Parque Paulista</p>
				<p>Aberto de segunda à sabado, 11:00 - 15:00</p>
			</InfoSection>

			<Copyright>
				&copy; {currentYear} Delicias da Dri. Todos os direitos reservados.
			</Copyright>
		</FooterContainer>
	);
};

export default Footer;
