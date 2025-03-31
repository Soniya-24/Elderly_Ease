import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Main>
        <Hero />
      </Main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;