import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import BackgroundVideo from './BackgroundVideo';
import Lawyer from './Lawyer';
import StaticHeader from './StaticHeader';
import TextCarousel from './TextCarousel';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('Carousel');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4); // Assuming 4 slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <BackgroundVideo />
      <StaticHeader />
      <TextCarousel currentSlide={currentSlide} />
      <Lawyer />
    </div>
  );
};

export default LandingPage;
