import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

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

const AdmissionForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    elderlyName: '',
    age: '',
    gender: '',
    dateOfBirth: '',
    medicalConditions: '',
    medications: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    roomPreference: '',
    dietaryRestrictions: '',
    admissionDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Format the data
      const admissionData = {
        ...formData,
        age: parseInt(formData.age),
        medicalConditions: formData.medicalConditions.split(',').map(item => item.trim()),
        medications: formData.medications.split(',').map(item => item.trim()),
        dietaryRestrictions: formData.dietaryRestrictions.split(',').map(item => item.trim())
      };

      // Submit to backend
      const response = await api.createAdmission(admissionData);
      
      // Navigate to family form with admission ID
      navigate('/admission/family', { 
        state: { admissionId: response._id }
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit admission form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <MainContent>
        <FormContainer>
          <Title>Admission Form</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Elderly Person's Name</Label>
              <Input
                type="text"
                name="elderlyName"
                value={formData.elderlyName}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Age</Label>
              <Input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
              />
            </FormGroup>

            <FormGroup>
              <Label>Gender</Label>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Date of Birth</Label>
              <Input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Medical Conditions (comma-separated)</Label>
              <TextArea
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
                placeholder="e.g., Diabetes, Hypertension, Arthritis"
              />
            </FormGroup>

            <FormGroup>
              <Label>Current Medications (comma-separated)</Label>
              <TextArea
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                placeholder="e.g., Insulin, Metformin, Aspirin"
              />
            </FormGroup>

            <FormGroup>
              <Label>Emergency Contact Name</Label>
              <Input
                type="text"
                name="emergencyContact.name"
                value={formData.emergencyContact.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Emergency Contact Relationship</Label>
              <Input
                type="text"
                name="emergencyContact.relationship"
                value={formData.emergencyContact.relationship}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Emergency Contact Phone</Label>
              <Input
                type="tel"
                name="emergencyContact.phone"
                value={formData.emergencyContact.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Room Preference</Label>
              <Select
                name="roomPreference"
                value={formData.roomPreference}
                onChange={handleChange}
                required
              >
                <option value="">Select Room Type</option>
                <option value="Private">Private Room</option>
                <option value="Semi-Private">Semi-Private Room</option>
                <option value="Shared">Shared Room</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Dietary Restrictions (comma-separated)</Label>
              <TextArea
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="e.g., Vegetarian, No nuts, Diabetic diet"
              />
            </FormGroup>

            <FormGroup>
              <Label>Preferred Admission Date</Label>
              <Input
                type="date"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </FormGroup>

            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Continue to Family Details'}
            </Button>
          </Form>
        </FormContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default AdmissionForm;
