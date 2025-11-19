import React, { useState, useEffect } from 'react';
import Header from '@/features/home/components/Header';
import Hero from '@/features/home/components/Hero';
import StepsSection from '@/features/home/components/StepsSection';
import PrizesSection from '@/features/home/components/PrizesSection';
import FinalCTA from '@/features/home/components/FinalCTA';
import Footer from '@/features/home/components/Footer';
import { PRIZES, STEPS } from '@/features/home/constants';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const prizes = PRIZES;
  const steps = STEPS;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      <Header onNavigate={scrollToSection} />
      <Hero isVisible={isVisible} />
      <StepsSection steps={steps} />
      <PrizesSection prizes={prizes} />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
