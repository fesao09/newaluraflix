// src/components/Banner/Banner.js
import React from 'react';
import { Container, Background, Content, Title, Description } from './Banner.styles';

const Banner = () => {
  return (
    <Container>
      <Background>
        <img src="https://via.placeholder.com/1920x600" alt="Destaque" />
      </Background>
      <Content>
        <Title>Destaque do Aluraflix</Title>
        <Description>Assista agora aos melhores filmes e séries.</Description>
      </Content>
    </Container>
  );
};

export default Banner;



