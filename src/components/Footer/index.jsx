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
					href="#"
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
					href="https://wa.me/5521999999999"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
				>
					<Phone size={28} />
				</SocialLink>
			</SocialLinks>

			<InfoSection>
				<p>Duque de Caxias, Rio de Janeiro</p>
				<p>Aberto todos os dias, 18:00 - 23:00</p>
			</InfoSection>

			<Copyright>
				&copy; {currentYear} Delicias da Dri. Todos os direitos reservados.
			</Copyright>
		</FooterContainer>
	);
};

export default Footer;
