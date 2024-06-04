import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: white;
  transform: translateY(-50%);
  z-index: 10;
`;

const SlideText = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const TextCarousel: React.FC<{ currentSlide: number }> = ({ currentSlide }) => {
  const t = useTranslations('Carousel');

  const slides = [t('slide1'), t('slide2'), t('slide3'), t('slide4')];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <CarouselContainer>
      <motion.div
        key={currentSlide}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <SlideText>{slides[currentSlide]}</SlideText>
      </motion.div>
    </CarouselContainer>
  );
};

export default TextCarousel;
