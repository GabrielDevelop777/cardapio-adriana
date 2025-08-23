import styled from "styled-components";
import { scaleIn } from "../../styles/GlobalStyle";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 251, 245, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem; /* Adicionado para evitar que o modal cole nas bordas em telas pequenas */
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  width: 100%; /* Ajustado para melhor responsividade */
  max-width: 450px; /* Levemente menor para um visual mais compacto */
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  animation: ${scaleIn} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid #eee;
  position: relative; /* Necessário para posicionar o botão de fechar */
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Espaçamento entre os elementos */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 24px; /* Para ocupar espaço mesmo sem título */
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease-in-out;
  padding: 0;

  &:hover {
    color: #333;
  }
`;

export const IconWrapper = styled.div`
  /* A cor foi movida para uma mais neutra, o laranja/amarelo pode ser uma boa opção */
  color: #e67e22; /* Um laranja amigável */
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem; /* Um pouco menor para dar espaço ao subtítulo */
  font-weight: 700;
  color: #2c3e50; /* Um azul escuro/cinza em vez de preto puro */
  line-height: 1.3;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif; /* Uma fonte mais legível para parágrafos */
  font-size: 1rem;
  color: #7f8c8d; /* Cinza mais suave */
  line-height: 1.6;
  margin: 0.5rem 0 1.5rem 0; /* Espaçamento vertical */
`;
