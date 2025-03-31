import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHandHoldingHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #ffe6e6;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h4 {
    color: #008080;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin: 0.5rem 0;
  }

  a {
    color: #333;
    text-decoration: none;
    display: block;
    margin: 0.5rem 0;
    transition: color 0.2s ease;

    &:hover {
      color: #008080;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #333;
    font-size: 1.2rem;
    display: inline-block;
    margin: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const DonateButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #008080;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #006666;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4>Contact Us</h4>
        <p><FaMapMarkerAlt /> 123 Main Street, City, State - 400001</p>
        <p><FaPhone /> +91 1234567890</p>
        <p><FaEnvelope /> info@adharwad.com</p>
      </FooterSection>

      <FooterSection>
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/admission">Admission</Link>
        <DonateButton to="/donate">
          <FaHandHoldingHeart />
          Donate Now
        </DonateButton>
      </FooterSection>

      <FooterSection>
        <h4>Working Hours</h4>
        <p><FaClock /> Visiting Hours:</p>
        <p>Morning: 9:00 AM - 12:00 PM</p>
        <p>Evening: 4:00 PM - 7:00 PM</p>
        <p>* Prior appointment needed for off-hour visits</p>
      </FooterSection>
      <div style={{textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #444', color: '#888'}}>
        {new Date().getFullYear()} Adharwad Old Age Home. All rights reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
