import styled from "styled-components";
import { fadeIn } from "../../styles/GlobalStyle";

export const AppContainer = styled.div`
  animation: ${fadeIn} 0.8s ease-in;
`;

export const Header = styled.header`
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

export const HeaderTitle = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 4.5rem;
  font-weight: 400;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.25);
  margin: 0;
`;

export const HeaderSlogan = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  letter-spacing: 1px;
  opacity: 0.9;
`;

export const StatusBadge = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1.5rem;
  background-color: ${(props) => (props.$isOpen ? "#2ecc71" : "#e74c3c")};
  color: white;
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
`;

export const MainContent = styled.main`
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MenuSection = styled.section`
  margin-bottom: 3.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e67e22;
`;

export const DishOfTheDayTitle = styled(SectionTitle)`
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

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const ToastManager = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;
