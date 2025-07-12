import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
`;

export const FooterTitle = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #f39c12;
`;

export const InfoSection = styled.div`
  margin: 1.5rem 0;
  line-height: 1.7;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const SocialLink = styled.a`
  color: #ecf0f1;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: #f39c12;
    transform: scale(1.2);
  }
`;

// Novo estilo para o container do mapa
export const MapContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: #bdc3c7;
  margin-top: 2rem;
  border-top: 1px solid #34495e;
  padding-top: 1.5rem;
  width: 100%;
  max-width: 800px;
`;
