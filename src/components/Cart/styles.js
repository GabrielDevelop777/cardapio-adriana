import styled from "styled-components";
import { fadeIn } from "../../styles/GlobalStyle";

export const Container = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  position: sticky;
  top: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #e85d04;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 1rem;
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
`;

export const ItemName = styled.span`
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
`;

export const ItemPrice = styled.span`
  font-weight: 500;
  color: #555;
`;

export const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #e85d04;
  display: flex;
  align-items: center;
  &:hover { color: #f48c06; }
`;

export const ItemQuantity = styled.span`
  font-weight: 600;
  min-width: 20px;
  text-align: center;
`;

export const Footer = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ClearButton = styled.button`
  font-size: 0.9rem;
  color: #e74c3c;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: right;
  margin-bottom: 1rem;
  &:hover { text-decoration: underline; }
`;

export const CheckoutButton = styled.button`
  background-color: #2a9d8f;
  color: white;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #264653;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
