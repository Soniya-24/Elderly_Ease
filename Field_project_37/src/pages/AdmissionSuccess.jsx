import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 4rem 6rem;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SuccessContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Icon = styled(FaCheckCircle)`
  font-size: 4rem;
  color: #28a745;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #6c757d;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: #008080;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006666;
  }
`;

const AdmissionId = styled.div`
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  font-family: monospace;
  font-size: 1.1rem;
`;

const AdmissionSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const admissionId = location.state?.admissionId;

  return (
    <PageContainer>
      <MainContent>
        <SuccessContainer>
          <Icon />
          <Title>Admission Successful!</Title>
          <Message>
            Thank you for choosing our healthcare facility. Your admission has been confirmed
            and payment has been processed successfully.
          </Message>
          
          <Message>
            Please keep your admission ID for future reference:
          </Message>
          <AdmissionId>
            {admissionId || 'ID not available'}
          </AdmissionId>
          
          <Message>
            Our team will contact you shortly with further instructions and to coordinate
            the move-in process.
          </Message>
          
          <Button onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </SuccessContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default AdmissionSuccess;
