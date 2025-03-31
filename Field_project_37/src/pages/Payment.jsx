import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaCreditCard, FaLock } from 'react-icons/fa';
import Footer from '../components/Footer';
import { api } from '../services/api';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 4rem 6rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const PaymentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #008080;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #008080;
  }
`;

const Button = styled.button`
  background-color: #008080;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #006666;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  padding: 1rem;
  background-color: #f8d7da;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Summary = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
    font-weight: bold;
  }
`;

const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
  margin-top: 1rem;
  justify-content: center;
`;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });

  // Get current year for expiry year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!location.state?.admissionId) {
        throw new Error('No admission ID found. Please start from the admission form.');
      }

      // In a real application, you would integrate with a payment gateway here
      // For demo purposes, we'll simulate a payment process
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Update admission status to indicate payment is complete
      await api.updateAdmission(location.state.admissionId, {
        paymentStatus: 'completed',
        paymentDate: new Date().toISOString()
      });

      // Navigate to success page
      navigate('/admission/success', {
        state: { admissionId: location.state.admissionId }
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Payment processing failed');
    } finally {
      setLoading(false);
    }
  };

  if (!location.state?.admissionId) {
    return (
      <PageContainer>
        <MainContent>
          <PaymentContainer>
            <ErrorMessage>
              No admission ID found. Please start from the admission form.
              <Button onClick={() => navigate('/admission')}>
                Go to Admission Form
              </Button>
            </ErrorMessage>
          </PaymentContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <MainContent>
        <PaymentContainer>
          <Title>Payment Details</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Summary>
            <SummaryItem>
              <span>Room Charges</span>
              <span>₹25,000</span>
            </SummaryItem>
            <SummaryItem>
              <span>Security Deposit</span>
              <span>₹10,000</span>
            </SummaryItem>
            <SummaryItem>
              <span>Processing Fee</span>
              <span>₹500</span>
            </SummaryItem>
            <SummaryItem>
              <span>Total Amount</span>
              <span>₹35,500</span>
            </SummaryItem>
          </Summary>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                <FaCreditCard /> Card Number
              </Label>
              <Input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                pattern="[0-9\s]{13,19}"
                maxLength="19"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Cardholder Name</Label>
              <Input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </FormGroup>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <FormGroup>
                <Label>Month</Label>
                <Select
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  required
                >
                  <option value="">MM</option>
                  {months.map(month => (
                    <option key={month} value={month.toString().padStart(2, '0')}>
                      {month.toString().padStart(2, '0')}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Year</Label>
                <Select
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">YYYY</option>
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>CVV</Label>
                <Input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength="4"
                  required
                />
              </FormGroup>
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Pay ₹35,500'}
            </Button>
          </Form>

          <SecurityNote>
            <FaLock /> Your payment information is secure and encrypted
          </SecurityNote>
        </PaymentContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Payment;
