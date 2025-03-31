import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import adharvadLogo from '../assets/logo-placeholder.png.jpg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: color 0.3s ease;

  &:hover {
    color: #008080;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;

  svg {
    color: #008080;
  }
`;

const Header = () => {
  const path = window.location.pathname;

  return (
    <HeaderContainer>
      <Logo to="/">
        <img src={adharvadLogo} alt="Adharvad Logo" />
        <h1>Adharvad Old Age Home</h1>
      </Logo>
      <Nav>
        <NavLink to="/" active={path === '/'}>HOME</NavLink>
        <NavLink to="/about" active={path === '/about'}>ABOUT</NavLink>
        <NavLink to="/services" active={path === '/services'}>SERVICES</NavLink>
        <NavLink to="/gallery" active={path === '/gallery'}>GALLERY</NavLink>
      </Nav>
      <Contact>
        <FaPhone />
        <span>-xxxxx</span>
      </Contact>
    </HeaderContainer>
  );
};

export default Header;
