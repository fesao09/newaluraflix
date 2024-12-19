// src/pages/Home/Home.js
import React from 'react';
import { Container } from './Home.styles';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Container>
        <Carousel />
      </Container>
    </>
  );
};

export default Home;





