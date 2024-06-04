// components/SingleVideoCarousel.tsx

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface SingleVideoCarouselProps {
  t: any;
}

const SingleVideoCarousel: React.FC<SingleVideoCarouselProps> = ({ t }) => {
  const videoSrc =
    'https://storage.googleapis.com/dinan/videos/AdobeStock_314969901_Video_4K_Preview.mp4';
  const slideText = [t('slide1'), t('slide2'), t('slide3'), t('slide4')];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideText.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [slideText.length]);

  return (
    <div className="relative size-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 size-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div className="container relative z-20 mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <TextOverlay t={t} currentIndex={currentIndex} />
        <LawyerImage />
      </div>
    </div>
  );
};

interface TextOverlayProps {
  t: any;
  currentIndex: number;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ t, currentIndex }) => {
  const slideText = [t('slide1'), t('slide2'), t('slide3'), t('slide4')];
  const transition = { duration: 0.5 };

  return (
    <div className="max-w-xl space-y-6">
      <motion.h1
        className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={transition}
      >
        {t('heading')}
      </motion.h1>
      <AnimatePresence>
        <motion.p
          key={currentIndex}
          className="text-lg text-gray-300 md:text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={transition}
        >
          {slideText[currentIndex]}
        </motion.p>
      </AnimatePresence>
      <motion.a
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={transition}
      >
        {t('cta')}
      </motion.a>
    </div>
  );
};

const LawyerImage: React.FC = () => (
  <div className="mt-20 hidden md:block">
    <img
      src="https://storage.googleapis.com/dinan/LegalFirm/med228.png"
      width={400}
      height={600}
      alt="Person"
      className="h-[600px] w-auto object-contain"
    />
  </div>
);

export default SingleVideoCarousel;
