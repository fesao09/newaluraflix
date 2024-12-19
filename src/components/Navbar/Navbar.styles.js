// src/components/Navbar/Navbar.styles.js
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #141414;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  color: #e50914;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e50914;
  }
`;
