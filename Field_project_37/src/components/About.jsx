import React from 'react';
import styled from 'styled-components';
import Founder from '../images/Founder.jpg';

const AboutSection = styled.section`
  padding: 2rem 6rem;
  background-color: white;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const FounderImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

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

const FounderInfo = styled.div`
  flex: 1;
`;

const FounderName = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FounderDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const ValuesSection = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ValueBox = styled.div`
  border: 2px solid #008080;
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  text-align: center;

  h3 {
    color: #008080;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContent>
        <FounderImage>
          <img src={Founder} alt="Founder" />
        </FounderImage>
        <FounderInfo>
          <FounderName>Founder Name</FounderName>
          <FounderDescription>
            Lorem ipsum dolor sit amet. In voluptates veritatis hic dolorem excepturi aut fuga 
            voluptatem aut quasi minima ea minus earum qui amet rerum. Aut provident iure 
            et quasi magni et consequuntur voluptatem cum veniam aliquam. Et
          </FounderDescription>
        </FounderInfo>
      </AboutContent>
      <ValuesSection>
        <ValueBox>
          <h3>Vision</h3>
          <p>
            ABCD<br />
            ABCDS<br />
            ABCD ABCD<br />
            ABCD
          </p>
        </ValueBox>
        <ValueBox>
          <h3>Mission</h3>
          <p>
            ABCD<br />
            ABCDS<br />
            ABCD ABCD<br />
            ABCD
          </p>
        </ValueBox>
      </ValuesSection>
    </AboutSection>
  );
};

export default About;
