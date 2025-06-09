import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectManagement from './components/ProjectManagement';
// Removed import of WorkTogether to avoid duplicate "work together" sections
import Extension from './components/Extension';
import Customise from './components/Customise';
import Pricing from './components/Pricing';
import YourWorkEverywhere from './components/YourWorkEverywhere';
import YourData from './components/YourData';
import Sponsors from './components/Sponsors';
import WorkWithApps from './components/WorkWithApps';
import Testimonials from './components/Testimonials';
import TryWhitepaceToday from './components/TryWhitepaceToday';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectManagement />
      {/* Removed WorkTogether component to avoid duplicate "work together" sections */}
      <div className="mb-20">
        <Extension />
      </div>
      <div className="mt-20">
        <Customise />
      </div>
      <Pricing />
      <YourWorkEverywhere />
      <YourData />
      <div className="mb-10"></div>
      <Sponsors />
      <WorkWithApps />
      <Testimonials />
      <TryWhitepaceToday />
      <Footer />
    </>
  );
}

export default App;
