import styled from "styled-components";
import { scaleIn } from "../../styles/GlobalStyle";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DrawerContainer = styled.aside`
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  z-index: 1001;
  animation: ${scaleIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    color: #e67e22;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  &:hover { color: #333; }
`;

export const Content = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
  &:first-child {
    margin-top: 0;
  }
`;

export const CartList = styled.div`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${(props) => (props.$isInvalid ? "#e74c3c" : "#ddd")};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$isInvalid ? "#e74c3c" : "#e67e22")};
    box-shadow: 0 0 0 2px ${(props) => (props.$isInvalid ? "rgba(231, 76, 60, 0.2)" : "rgba(230, 126, 34, 0.2)")};
  }
  &::placeholder {
    color: #aaa;
  }
`;

export const FeeMessage = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: ${(props) => (props.type === "delivery" ? "#2a9d8f" : "#c0392b")};
`;

export const OptionsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const OptionButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  background-color: ${(props) => (props.$isActive ? "#e67e22" : "#f0f2f5")};
  color: ${(props) => (props.$isActive ? "white" : "#333")};
  border: 2px solid ${(props) => (props.$isActive ? "#e67e22" : "#f0f2f5")};
`;

export const Footer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #eee;
  background-color: #fafafa;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const FinalizeButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  background-color: #e67e22;
  color: white;
  border: none;
  transition: background-color 0.2s;
  &:hover { background-color: #264653; }
  &:disabled { background-color: #ccc; cursor: not-allowed; }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
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
  color: #e67e22;
  display: flex;
  align-items: center;
  &:hover { color: #f39c12; }
`;

export const ItemQuantity = styled.span`
  font-weight: 600;
  min-width: 20px;
  text-align: center;
`;
