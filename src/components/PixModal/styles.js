import styled from "styled-components";
import { scaleIn } from "../../styles/GlobalStyle";

export const Overlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000; display: flex; justify-content: center; align-items: center;
`;

export const Content = styled.div`
  position: relative; width: 90%; max-width: 450px;
  background-color: white; border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  animation: ${scaleIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex; flex-direction: column; text-align: center;
  padding: 2.5rem;
`;

// Container para a tela de confirmação
export const ConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #2ecc71;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem; color: #333; margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 1.5rem; color: #555; line-height: 1.5;
`;

export const QRCodeWrapper = styled.div`
  padding: 1rem; border: 1px solid #ddd; border-radius: 8px;
  display: inline-block; margin-bottom: 1.5rem;
`;

export const PixCodeInput = styled.textarea`
  width: 100%; padding: 0.8rem; border: 1px solid #ccc;
  border-radius: 8px; font-size: 0.9rem;
  font-family: 'Courier New', Courier, monospace;
  resize: none; margin-bottom: 1rem; background-color: #f9f9f9;
`;

export const ButtonGroup = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 1rem;
  margin-top: 1rem; width: 100%;
`;

export const ActionButton = styled.button`
  width: 100%;
  color: white; border: none; padding: 0.8rem 1.5rem;
  border-radius: 8px; cursor: pointer; font-weight: 500;
  transition: background-color 0.2s;

  &.copy {
    background-color: #555;
    &:hover { background-color: #333; }
  }

  &.paid {
    background-color: #27ae60;
    &:hover { background-color: #229954; }
  }

  &.receipt {
    background-color: #3498db;
    &:hover { background-color: #2980b9; }
  }

  &.close {
    background: none;
    color: #888;
    padding-top: 0;
    &:hover { color: #333; text-decoration: underline; }
  }
`;
