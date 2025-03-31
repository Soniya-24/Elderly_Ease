import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { api } from '../services/api';

const VisitContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 4rem 6rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  color: #008080;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #008080;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TimeBlock = styled.div`
  h3 {
    color: #333;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Visit = () => {
  const [visitingInfo, setVisitingInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitingInfo = async () => {
      try {
        const data = await api.getVisitingInfo();
        setVisitingInfo(data);
      } catch (error) {
        console.error('Error fetching visiting info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVisitingInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <VisitContainer>
      <MainContent>
        <Title>Visit Us</Title>
        
        <Section>
          <SectionTitle>Visiting Hours</SectionTitle>
          <Card>
            <TimeGrid>
              <TimeBlock>
                <h3>Weekdays</h3>
                <p>{visitingInfo?.regularHours.weekdays}</p>
              </TimeBlock>
              <TimeBlock>
                <h3>Weekends</h3>
                <p>{visitingInfo?.regularHours.weekends}</p>
              </TimeBlock>
              <TimeBlock>
                <h3>Emergency</h3>
                <p>{visitingInfo?.emergencyHours}</p>
              </TimeBlock>
            </TimeGrid>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Location</SectionTitle>
          <Card>
            <p>{visitingInfo?.location.address}</p>
            <p>{visitingInfo?.location.city}, {visitingInfo?.location.state} {visitingInfo?.location.zipCode}</p>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <Card>
            <p>Phone: {visitingInfo?.contactInfo.phone}</p>
            <p>Email: {visitingInfo?.contactInfo.email}</p>
          </Card>
        </Section>

        <Section>
          <SectionTitle>Visitor Guidelines</SectionTitle>
          <Card>
            <ul>
              {visitingInfo?.guidelines.map((guideline, index) => (
                <li key={index}>{guideline}</li>
              ))}
            </ul>
          </Card>
        </Section>
      </MainContent>
      <Footer />
    </VisitContainer>
  );
};

export default Visit;
