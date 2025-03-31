import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaHeartbeat, FaBed, FaUtensils, FaHandHoldingHeart, FaUserMd, FaCalendarCheck } from 'react-icons/fa';
import { api } from '../services/api';

const ServiceDetailsContainer = styled.div`
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

const ServiceDetail = styled.div`
  max-width: 1000px;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ServiceHeader = styled.div`
  background-color: #008080;
  color: white;
  padding: 3rem;
  text-align: center;

  svg {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ServiceContent = styled.div`
  padding: 3rem;

  h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;

  li {
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    color: #2c3e50;
    display: flex;
    align-items: center;

    &:before {
      content: "✓";
      color: #008080;
      font-weight: bold;
      margin-right: 1rem;
    }
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #008080;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #008080;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

const AdmissionButton = styled.button`
  background-color: #008080;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006666;
  }
`;

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const icons = {
    FaHeartbeat,
    FaBed,
    FaUtensils,
    FaHandHoldingHeart,
    FaUserMd,
    FaCalendarCheck
  };

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const data = await api.getService(serviceId);
        setService(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  if (loading) return (
    <ServiceDetailsContainer>
      <MainContent>
        <LoadingSpinner>Loading service details...</LoadingSpinner>
      </MainContent>
      <Footer />
    </ServiceDetailsContainer>
  );

  if (error || !service) return (
    <ServiceDetailsContainer>
      <MainContent>
        <ErrorMessage>{error || 'Service not found'}</ErrorMessage>
        <BackButton onClick={() => navigate('/services')}>← Back to Services</BackButton>
      </MainContent>
      <Footer />
    </ServiceDetailsContainer>
  );

  const Icon = icons[service.icon] || FaHeartbeat;

  return (
    <ServiceDetailsContainer>
      <MainContent>
        <BackButton onClick={() => navigate('/services')}>← Back to Services</BackButton>
        <ServiceDetail>
          <ServiceHeader>
            <Icon />
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </ServiceHeader>

          <ServiceContent>
            {service.details && (
              <>
                <h2>Key Features</h2>
                <FeaturesList>
                  {service.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </FeaturesList>

                <h2>Service Information</h2>
                <p><strong>Availability:</strong> {service.details.availability}</p>
                <p><strong>Location:</strong> {service.details.location}</p>

                <AdmissionButton onClick={() => navigate('/admission')}>
                  Start Admission Process
                </AdmissionButton>
              </>
            )}
          </ServiceContent>
        </ServiceDetail>
      </MainContent>
      <Footer />
    </ServiceDetailsContainer>
  );
};

export default ServiceDetails;
