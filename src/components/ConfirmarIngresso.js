import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ConfirmationPageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #6a1b9a;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ConfirmationCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ConfirmarIngresso = ({ nome, contato }) => {
  return (
    <ConfirmationPageContainer>
      <Title><StyledLink to="/">Confirmação</StyledLink></Title>
      <ConfirmationCard>
        <h2>O ingresso foi verificado com sucesso!</h2>
        <p>Nome da Pessoa: {nome}</p>
        <ContactInfo>Informações de Contato: {contato}</ContactInfo>
      </ConfirmationCard>
    </ConfirmationPageContainer>
  );
};

export default ConfirmarIngresso;
