// src/components/Navbar/Navbar.js
import React from 'react';
import { Nav, Logo, NavLinks, NavLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Aluraflix</Logo>
      <NavLinks>
        <NavLink href="#inicio">Início</NavLink>
        <NavLink href="#series">Séries</NavLink>
        <NavLink href="#filmes">Filmes</NavLink>
        <NavLink href="#novos">Novos</NavLink>
        <NavLink href="#minha-lista">Minha Lista</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

