import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import CalculatorSection from './components/sections/CalculatorSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CtaSection from './components/sections/CtaSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <CalculatorSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
}

export default App;