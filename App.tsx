
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Premium from './components/Premium';
import UnitInfo from './components/UnitInfo';
import PriceTable from './components/PriceTable';
import Gallery from './components/Gallery';
import LocationInfo from './components/LocationInfo';
import ConsultForm from './components/ConsultForm';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Premium />
        <UnitInfo />
        <LocationInfo />
        <PriceTable />
        <Gallery />
        <ConsultForm />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
};

export default App;
