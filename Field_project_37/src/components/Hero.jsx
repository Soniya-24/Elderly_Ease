import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import elderly1 from '../assets/elderly-1.jpg';
import elderly2 from '../assets/elderly-2.jpg';
import elderly3 from '../assets/elderly-3.jpg';

const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  padding: 2rem 6rem;
  background-color: white;
  gap: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  padding-top: 2rem;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  padding-top: 4rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding-top: 2rem;
  }
`;

const ImageGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  img {
    width: 320px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    background-color: #f5f5f5;
    transition: transform 0.3s ease;

    &:nth-child(1) {
      margin-left: 0;
    }

    &:nth-child(2) {
      margin-left: 3rem;
    }

    &:nth-child(3) {
      margin-left: 6rem;
    }

    &:hover {
      transform: translateX(-10px);
    }

    @media (max-width: 1200px) {
      width: 280px;
      height: 180px;
    }

    @media (max-width: 768px) {
      width: 260px;
      height: 160px;
      margin-left: 0 !important;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Tagline = styled.h2`
  color: #008080;
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 600;
  max-width: 600px;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
  max-width: 320px;
`;

const Button = styled.button`
  padding: 1.2rem;
  font-size: 1.3rem;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  width: 100%;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ServiceButton = styled(Button)`
  background-color: #008080;
  color: white;

  &:hover {
    background-color: #006666;
  }
`;

const VisitButton = styled(Button)`
  background-color: #008080;
  color: white;

  &:hover {
    background-color: #006666;
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <LeftSection>
        <ImageGroup>
          <img src={elderly1} alt="Happy elderly group" />
          <img src={elderly2} alt="Elderly people reading together" />
          <img src={elderly3} alt="Caregiver with elderly" />
        </ImageGroup>
      </LeftSection>
      <RightSection>
        <Tagline>
          "ELDER EASE - SIMPLIFYING LIFE FOR THE ELDERLY"
        </Tagline>
        <ButtonGroup>
          <ServiceButton onClick={() => navigate('/services')}>
            Our Services
          </ServiceButton>
          <VisitButton onClick={() => navigate('/visit')}>
            Visit Us
          </VisitButton>
        </ButtonGroup>
      </RightSection>
    </HeroSection>
  );
};

export default Hero;
