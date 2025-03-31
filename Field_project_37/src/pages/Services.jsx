import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaHeartbeat, 
  FaBed, 
  FaUtensils, 
  FaHandHoldingHeart, 
  FaUserMd, 
  FaCalendarCheck,
  FaAmbulance,
  FaUsers,
  FaPray,
  FaTimes
} from 'react-icons/fa';
import { api } from '../services/api';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  svg {
    font-size: 48px;
    color: #3498db;
    margin-bottom: 20px;
  }

  h3 {
    margin: 15px 0;
    color: #2c3e50;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: fit-content;
  margin: 0 auto;

  &:hover {
    background-color: #2980b9;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #27ae60;
  margin-top: 20px;

  &:hover {
    background-color: #219a52;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
    padding-right: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }

  li {
    padding: 8px 0;
    color: #666;
    display: flex;
    align-items: center;

    &:before {
      content: "•";
      color: #3498db;
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #2c3e50;
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #e74c3c;
  background: #fde8e7;
  border-radius: 8px;
  margin: 20px;
`;

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const icons = {
    FaHeartbeat,
    FaBed,
    FaUtensils,
    FaHandHoldingHeart,
    FaUserMd,
    FaCalendarCheck,
    FaAmbulance,
    FaUsers,
    FaPray
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log('Fetching services...');
        const data = await api.getServices();
        console.log('Services data:', data);
        setServices(data);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleRegister = () => {
    navigate('/admission');
  };

  if (loading) return <LoadingSpinner>Loading services...</LoadingSpinner>;
  if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

  return (
    <Container>
      <Title>Our Services</Title>
      <Description>
        At our healthcare facility, we provide comprehensive care services designed 
        to ensure the comfort, health, and happiness of our residents. Our dedicated 
        team works around the clock to deliver personalized attention and support.
      </Description>
      <Grid>
        {services.map(service => {
          const Icon = icons[service.icon];
          return (
            <Card key={service._id}>
              {Icon && <Icon />}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button onClick={() => handleLearnMore(service)}>Learn More</Button>
            </Card>
          );
        })}
      </Grid>

      {selectedService && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>
              <FaTimes />
            </CloseButton>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <h3>Key Features:</h3>
            <ul>
              {selectedService.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {Object.entries(selectedService.details).map(([key, value]) => {
              if (key !== 'features') {
                return (
                  <p key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                    {value}
                  </p>
                );
              }
              return null;
            })}
            <ButtonContainer>
              <Button onClick={handleCloseModal}>Close</Button>
              <RegisterButton onClick={handleRegister}>Register Now</RegisterButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Services;
