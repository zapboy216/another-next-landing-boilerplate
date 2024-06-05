import { motion } from 'framer-motion';
import React from 'react';

interface LandingProps {
  backgroundType: 'image' | 'video';
  backgroundUrl: string;
  overlayContent: React.ReactNode;
  overlayOpacity?: number;
}

const Landing: React.FC<LandingProps> = ({
  backgroundType,
  backgroundUrl,
  overlayContent,
  overlayOpacity = 0.5,
}) => {
  return (
    <div className="relative h-screen w-full">
      {backgroundType === 'video' ? (
        <video
          className="absolute left-0 top-0 size-full object-cover"
          src={backgroundUrl}
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className="absolute left-0 top-0 size-full object-cover"
          src={backgroundUrl}
          alt="Background"
        />
      )}
      <div
        className="absolute left-0 top-0 size-full"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          {overlayContent}
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
