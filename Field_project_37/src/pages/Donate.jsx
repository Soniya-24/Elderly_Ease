import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { FaQrcode, FaUniversity, FaCreditCard, FaPaypal, FaHandHoldingHeart } from 'react-icons/fa';

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

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    color: #008080;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const DonationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const DonationCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 3rem;
    color: #008080;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const QRCodeSection = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    color: #008080;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .qr-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }
`;

const QRCode = styled.div`
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
    border: 2px solid #008080;
    border-radius: 10px;
  }

  h4 {
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

const BankDetails = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;

  h2 {
    color: #008080;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .detail-item {
    h4 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      margin-bottom: 0.5rem;
      font-family: monospace;
      font-size: 1.1rem;
    }
  }
`;

const ImpactSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    color: #008080;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .impact-item {
    h3 {
      color: #008080;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
    }
  }
`;

const Donate = () => {
  return (
    <PageContainer>
      <MainContent>
        <ContentContainer>
          <Header>
            <h1>Support Our Cause</h1>
            <p>
              Your generous donation helps us provide quality care and support to our elderly residents.
              Every contribution makes a difference in enhancing their lives and ensuring their comfort.
            </p>
          </Header>

          <DonationGrid>
            <DonationCard>
              <FaQrcode />
              <h3>Scan & Pay</h3>
              <p>Quick and easy donation using UPI QR codes for instant transfer</p>
            </DonationCard>

            <DonationCard>
              <FaUniversity />
              <h3>Bank Transfer</h3>
              <p>Direct bank transfer to our dedicated donation account</p>
            </DonationCard>

            <DonationCard>
              <FaCreditCard />
              <h3>Card Payment</h3>
              <p>Secure credit/debit card payments through our payment gateway</p>
            </DonationCard>
          </DonationGrid>

          <QRCodeSection>
            <h2>Scan QR Code to Donate</h2>
            <div className="qr-container">
              <QRCode>
                <img src="/qr-codes/upi-qr.png" alt="UPI QR Code" />
                <h4>UPI Payment</h4>
                <p>Scan with any UPI app</p>
              </QRCode>
              <QRCode>
                <img src="/qr-codes/gpay-qr.png" alt="Google Pay QR Code" />
                <h4>Google Pay</h4>
                <p>Scan with Google Pay</p>
              </QRCode>
              <QRCode>
                <img src="/qr-codes/paytm-qr.png" alt="Paytm QR Code" />
                <h4>Paytm</h4>
                <p>Scan with Paytm</p>
              </QRCode>
            </div>
          </QRCodeSection>

          <BankDetails>
            <h2>Bank Account Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <h4>Account Name</h4>
                <p>Adharwad Old Age Home Trust</p>
              </div>
              <div className="detail-item">
                <h4>Account Number</h4>
                <p>1234 5678 9012 3456</p>
              </div>
              <div className="detail-item">
                <h4>IFSC Code</h4>
                <p>ABCD0123456</p>
              </div>
              <div className="detail-item">
                <h4>Bank Name</h4>
                <p>State Bank of India</p>
              </div>
              <div className="detail-item">
                <h4>Branch</h4>
                <p>Main Branch, City</p>
              </div>
              <div className="detail-item">
                <h4>Account Type</h4>
                <p>Savings Account</p>
              </div>
            </div>
          </BankDetails>

          <ImpactSection>
            <h2>Your Impact</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <h3>₹500</h3>
                <p>Provides meals for one resident for a week</p>
              </div>
              <div className="impact-item">
                <h3>₹2000</h3>
                <p>Covers medical supplies for one resident for a month</p>
              </div>
              <div className="impact-item">
                <h3>₹5000</h3>
                <p>Supports recreational activities for all residents for a month</p>
              </div>
              <div className="impact-item">
                <h3>₹10000</h3>
                <p>Helps maintain and upgrade resident facilities</p>
              </div>
            </div>
          </ImpactSection>
        </ContentContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Donate;
