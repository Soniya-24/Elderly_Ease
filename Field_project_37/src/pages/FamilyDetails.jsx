import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const DetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #008080;
  text-align: center;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  color: #008080;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #008080;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const InfoCard = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    color: #008080;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  &.highlight {
    background-color: #e6f3f3;
    border: 1px solid #008080;
  }
`;

const FamilyMemberCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;

  h3 {
    color: #008080;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .info-item {
    margin-bottom: 1rem;
  }

  .label {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  .value {
    color: #333;
    font-weight: 500;
  }
`;

const FamilyDetails = () => {
  const navigate = useNavigate();
  const [familyData, setFamilyData] = useState(null);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Get stored data
    const storedFamilyData = localStorage.getItem('familyData');
    const storedPatientData = localStorage.getItem('patientData');

    if (!storedFamilyData || !storedPatientData) {
      // If no data, redirect to admission form
      navigate('/admission');
      return;
    }

    setFamilyData(JSON.parse(storedFamilyData));
    setPatientData(JSON.parse(storedPatientData));

    // Clear storage after loading
    localStorage.removeItem('familyData');
    localStorage.removeItem('patientData');
  }, [navigate]);

  if (!familyData || !patientData) {
    return null;
  }

  return (
    <PageContainer>
      <MainContent>
        <DetailsContainer>
          <Title>Application Details</Title>

          <Section>
            <SectionTitle>Patient Information</SectionTitle>
            <Grid>
              <FamilyMemberCard>
                <h3>{patientData.firstName} {patientData.lastName}</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <div className="label">Date of Birth</div>
                    <div className="value">{patientData.dateOfBirth}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Gender</div>
                    <div className="value">{patientData.gender}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Phone</div>
                    <div className="value">{patientData.phoneNumber}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Email</div>
                    <div className="value">{patientData.email || 'Not provided'}</div>
                  </div>
                  <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                    <div className="label">Address</div>
                    <div className="value">{patientData.address}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Room Preference</div>
                    <div className="value">{patientData.roomPreference}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Admission Date</div>
                    <div className="value">{patientData.admissionDate}</div>
                  </div>
                </div>
              </FamilyMemberCard>
            </Grid>
          </Section>

          <Section>
            <SectionTitle>Family/Guardian Information</SectionTitle>
            <Grid>
              <FamilyMemberCard>
                <h3>{familyData.firstName} {familyData.lastName}</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <div className="label">Relationship</div>
                    <div className="value">{familyData.relation}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Phone</div>
                    <div className="value">{familyData.phoneNumber}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Email</div>
                    <div className="value">{familyData.email}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Occupation</div>
                    <div className="value">{familyData.occupation}</div>
                  </div>
                  <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                    <div className="label">Address</div>
                    <div className="value">{familyData.address}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Preferred Contact Time</div>
                    <div className="value">{familyData.preferredContactTime || 'Not specified'}</div>
                  </div>
                </div>
              </FamilyMemberCard>
            </Grid>
          </Section>

          {familyData.additionalContact && familyData.additionalContact.name && (
            <Section>
              <SectionTitle>Additional Emergency Contact</SectionTitle>
              <Grid>
                <InfoCard>
                  <h3>{familyData.additionalContact.name}</h3>
                  <p>Relation: {familyData.additionalContact.relation}</p>
                  <p>Phone: {familyData.additionalContact.phone}</p>
                </InfoCard>
              </Grid>
            </Section>
          )}

          <Section>
            <SectionTitle>Next Steps</SectionTitle>
            <Grid>
              <InfoCard className="highlight">
                <h3>Application Status</h3>
                <p>Your application has been received and is being processed.</p>
                <p>Our team will contact you within 24-48 hours to schedule a visit.</p>
              </InfoCard>

              <InfoCard>
                <h3>Required Documents</h3>
                <p>Please keep the following documents ready:</p>
                <p>• Photo ID proof</p>
                <p>• Medical history records</p>
                <p>• Insurance information</p>
              </InfoCard>

              <InfoCard>
                <h3>Contact Information</h3>
                <p>For any queries, please contact:</p>
                <p>Phone: +91 1234567890</p>
                <p>Email: admissions@adharwad.com</p>
              </InfoCard>
            </Grid>
          </Section>
        </DetailsContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default FamilyDetails;
