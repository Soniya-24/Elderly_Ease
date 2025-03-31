import React from 'react';
import styled from 'styled-components';
import Founder from '../assets/Founder.jpg';
import Footer from '../components/Footer';

const AboutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FounderLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const FounderImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const FounderName = styled.h2`
  font-size: 2rem;
  color: #333;
  font-weight: 500;
  text-align: center;
  width: 100%;
  margin: 0;
`;

const FounderDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  text-align: justify;
  max-width: 800px;

  p {
    margin: 1.5rem 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Box = styled.div`
  width: 350px;
  padding: 2rem;
  border: 2px solid #008080;
  border-radius: 8px;
  text-align: center;

  h3 {
    color: #008080;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    text-align: left;
    white-space: pre-line;
    margin: 0;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <MainContent>
        <TopSection>
          <FounderLeftSection>
            <FounderImage>
              <img src={Founder} alt="Founder" />
            </FounderImage>
            <FounderName>Mrs.Sangeeta Bhagwat</FounderName>
          </FounderLeftSection>
          <FounderDescription>
            <p>
              Established in 2005, Adharwad Old Age Home is a beacon of compassion and care, operating under the esteemed Adharwad Niradhar & Apang Mahila Utkarsh Trust (Registration number E/3968/Thane), now proudly certified with ISO 9001:2015. At its core, the home provides residential assisted care for elderly individuals of both genders who are homeless and facing health challenges.
            </p>

            <p>
              Beyond shelter, the trust is committed to rehabilitating and empowering divorced and unsupported women, offering them opportunities for financial independence and stability. Leading this noble initiative is Mrs. Sangeeta Rajendra Bhagwat, the visionary founding father of the trust. With extensive experience in social services and a deep understanding of elderly issues, Mrs. Bhagwat ensures Adharwad remains a pillar of support and empowerment. At our elder care center, our focus is on creating a nurturing and healthy environment for senior citizens who reside here. Our facility is specifically designed to cater to the unique needs of elderly residents, ensuring their comfort, safety, and well-being.
            </p>

            <p>
              From spacious living quarters to nutritious meals tailored to their dietary requirements, every aspect of our center is aimed at promoting their physical and emotional health. Our trained staff members are available 24/7 to provide personalized care and assistance, whether it's helping with daily activities, attending to medical needs, or simply offering companionship.
            </p>

            <p>
              We believe in fostering a strong sense of community and belonging among our residents by organizing a variety of recreational activities, social gatherings, and cultural events to keep them engaged and fulfilled. Our ultimate goal is to create a supportive and enriching environment where senior citizens can thrive and enjoy their later years with dignity and peace of mind.
            </p>
          </FounderDescription>
        </TopSection>
        <BoxesContainer>
          <Box>
            <h3>Vision</h3>
            <p>
              Provide a safe and dignified living environment.

              Offer holistic healthcare and emotional support.

              Foster social interaction and community integration.

              Encourage independence with necessary assistance.

              Develop a sustainable model for long-term elderly care.
            </p>
          </Box>
          <Box>
            <h3>Mission</h3>
            <p>
              Deliver high-quality assisted living facilities.

              Create a homely and emotionally supportive atmosphere.

              Ensure 24/7 medical assistance and safety.

              Engage volunteers and the community in elderly welfare.

              Uphold transparency, compassion, and integrity in care.
            </p>
          </Box>
        </BoxesContainer>
      </MainContent>
      <Footer />
    </AboutContainer>
  );
};

export default About;
