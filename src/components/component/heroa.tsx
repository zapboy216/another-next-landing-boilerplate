import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

const HeroComponent: React.FC = () => {
  return (
    <div
      className="hero-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundImage: 'url("/path-to-your-background.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <Image
        src="/path-to-your-image.jpg"
        alt="Descriptive Alt Text"
        width={500}
        height={300}
      />
      <Card>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1>This is a Hero Component</h1>
            <p>
              This component combines an image with animated text in a colorful
              and visually appealing layout.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroComponent;
