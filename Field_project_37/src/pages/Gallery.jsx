import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
`;

const Title = styled.h1`
  color: #008080;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  aspect-ratio: 4/3;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.5rem;
    transform: translateY(100%);
    transition: transform 0.2s ease;
  }

  &:hover .caption {
    transform: translateY(0);
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#008080' : 'white'};
  color: ${props => props.active ? 'white' : '#008080'};
  border: 2px solid #008080;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #008080;
    color: white;
  }

  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const NavButton = styled(PageButton)`
  font-size: 1.2rem;
`;

// Sample gallery data - replace with your actual images
const galleryData = [
  {
    id: 1,
    image: '/gallery/image1.jpg',
    caption: 'Residents enjoying morning yoga session',
    page: 1
  },
  {
    id: 2,
    image: '/gallery/image2.jpg',
    caption: 'Celebrating festivals together',
    page: 1
  },
  {
    id: 3,
    image: '/gallery/image3.jpg',
    caption: 'Art and craft activities',
    page: 1
  },
  {
    id: 4,
    image: '/gallery/image4.jpg',
    caption: 'Garden area where residents spend their evenings',
    page: 1
  },
  {
    id: 5,
    image: '/gallery/image5.jpg',
    caption: 'Medical checkup camp',
    page: 2
  },
  {
    id: 6,
    image: '/gallery/image6.jpg',
    caption: 'Birthday celebration',
    page: 2
  },
  {
    id: 7,
    image: '/gallery/image7.jpg',
    caption: 'Music therapy session',
    page: 2
  },
  {
    id: 8,
    image: '/gallery/image8.jpg',
    caption: 'Annual gathering',
    page: 2
  }
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const currentImages = galleryData.filter(item => item.page === currentPage);

  return (
    <PageContainer>
      <MainContent>
        <Title>Our Gallery</Title>
        <GalleryGrid>
          {currentImages.map((item) => (
            <ImageCard key={item.id}>
              <img src={item.image} alt={item.caption} />
              <div className="caption">
                <p>{item.caption}</p>
              </div>
            </ImageCard>
          ))}
        </GalleryGrid>
        <Navigation>
          <NavButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </NavButton>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
          <NavButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </NavButton>
        </Navigation>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Gallery;
