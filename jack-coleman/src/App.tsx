import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import ServicesPage from './components/ServicesPage';
import ClientsPage from './components/ClientsPage';
import VideoScrollSequence from './components/VideoScrollSequence';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <VideoScrollSequence />
                <Projects />
                <Clients />
                <CTA />
              </>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
