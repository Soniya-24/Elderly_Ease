import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
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

const FormContainer = styled.div`
  max-width: 800px;
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
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background-color: #fdf0ed;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const FamilyForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    primaryContact: {
      name: '',
      relationship: '',
      phone: '',
      email: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      }
    },
    alternateContact: {
      name: '',
      relationship: '',
      phone: '',
      email: ''
    },
    visitingPreferences: {
      preferredDays: [],
      preferredTime: ''
    },
    financialResponsibility: {
      responsible: true,
      paymentMethod: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    setFormData(prev => {
      let newData = { ...prev };
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!location.state?.admissionId) {
        throw new Error('No admission ID found. Please start from the admission form.');
      }

      const familyData = {
        ...formData,
        admissionId: location.state.admissionId
      };

      // Submit to backend
      await api.createFamilyDetails(familyData);
      
      // Navigate to payment page
      navigate('/admission/payment', { 
        state: { admissionId: location.state.admissionId }
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to submit family details');
    } finally {
      setLoading(false);
    }
  };

  if (!location.state?.admissionId) {
    return (
      <PageContainer>
        <MainContent>
          <FormContainer>
            <ErrorMessage>
              No admission ID found. Please start from the admission form.
              <Button onClick={() => navigate('/admission')}>
                Go to Admission Form
              </Button>
            </ErrorMessage>
          </FormContainer>
        </MainContent>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <MainContent>
        <FormContainer>
          <Title>Family Details</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Primary Contact Name</Label>
              <Input
                type="text"
                name="primaryContact.name"
                value={formData.primaryContact.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Relationship to Patient</Label>
              <Input
                type="text"
                name="primaryContact.relationship"
                value={formData.primaryContact.relationship}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="tel"
                name="primaryContact.phone"
                value={formData.primaryContact.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="primaryContact.email"
                value={formData.primaryContact.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Street Address</Label>
              <Input
                type="text"
                name="primaryContact.address.street"
                value={formData.primaryContact.address.street}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>City</Label>
              <Input
                type="text"
                name="primaryContact.address.city"
                value={formData.primaryContact.address.city}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>State</Label>
              <Input
                type="text"
                name="primaryContact.address.state"
                value={formData.primaryContact.address.state}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>ZIP Code</Label>
              <Input
                type="text"
                name="primaryContact.address.zipCode"
                value={formData.primaryContact.address.zipCode}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Country</Label>
              <Input
                type="text"
                name="primaryContact.address.country"
                value={formData.primaryContact.address.country}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Alternate Contact Name</Label>
              <Input
                type="text"
                name="alternateContact.name"
                value={formData.alternateContact.name}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Alternate Contact Relationship</Label>
              <Input
                type="text"
                name="alternateContact.relationship"
                value={formData.alternateContact.relationship}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Alternate Contact Phone</Label>
              <Input
                type="tel"
                name="alternateContact.phone"
                value={formData.alternateContact.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Alternate Contact Email</Label>
              <Input
                type="email"
                name="alternateContact.email"
                value={formData.alternateContact.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Preferred Visiting Time</Label>
              <Select
                name="visitingPreferences.preferredTime"
                value={formData.visitingPreferences.preferredTime}
                onChange={handleChange}
                required
              >
                <option value="">Select Time</option>
                <option value="Morning">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening">Evening (4 PM - 8 PM)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Payment Method</Label>
              <Select
                name="financialResponsibility.paymentMethod"
                value={formData.financialResponsibility.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="Self">Self</option>
                <option value="Insurance">Insurance</option>
                <option value="Medicare">Medicare</option>
                <option value="Other">Other</option>
              </Select>
            </FormGroup>

            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Complete Registration'}
            </Button>
          </Form>
        </FormContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default FamilyForm;
