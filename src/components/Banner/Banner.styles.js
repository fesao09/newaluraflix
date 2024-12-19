// src/components/Banner/Banner.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

