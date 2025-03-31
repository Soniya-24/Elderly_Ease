import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import AdmissionForm from './pages/AdmissionForm';
import FamilyForm from './pages/FamilyForm';
import FamilyDetails from './pages/FamilyDetails';
import Payment from './pages/Payment';
import AdmissionSuccess from './pages/AdmissionSuccess';
import Donate from './pages/Donate';
import Gallery from './pages/Gallery';
import Visit from './pages/Visit';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/admission/family" element={<FamilyForm />} />
        <Route path="/admission/payment" element={<Payment />} />
        <Route path="/admission/success" element={<AdmissionSuccess />} />
        <Route path="/family-details" element={<FamilyDetails />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </div>
  );
}

export default App;
