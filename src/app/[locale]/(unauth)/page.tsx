// app/page.tsx
import { useTranslations } from 'next-intl';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const t = useTranslations('Carousel');

const HomePage: React.FC = () => {
  return (
    <main>
      <Carousel orientation="vertical | horizontal">
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default HomePage;
