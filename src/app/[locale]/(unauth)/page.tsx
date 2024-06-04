// app/[locale]/(unauth)/page.tsx

'use client';

import { Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

const HomePage: React.FC = () => {
  const t = useTranslations('Carousel');

  return (
    <main className="relative h-[70vh] overflow-hidden">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 size-full object-cover"
        >
          <source
            src="https://storage.googleapis.com/dinan/videos/AdobeStock_314969901_Video_4K_Preview.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-10 bg-black/70" />
        <div className="container relative z-20 mx-auto flex h-full items-center justify-between px-4 md:px-6">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              t('heading')
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">t('slide1')</p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              t('cta')
            </Link>
          </div>
          <div className="mt-20 hidden md:block">
            <img
              src="https://storage.googleapis.com/dinan/LegalFirm/med228.png"
              width={400}
              height={600}
              alt="Person"
              className="h-[600px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
