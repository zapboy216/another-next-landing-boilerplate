// src/components/Landing.tsx

import { useTranslations } from 'next-intl';
import React from 'react';

const Landing = () => {
  const t = useTranslations('Index');

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute left-0 top-0 size-full object-cover"
        src={t('backgroundVideoUrl')}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          {t('splash_heading')}
        </h1>
        <h2 className="mb-8 text-2xl md:text-4xl">{t('splash_heading1')}</h2>
        <p className="mb-4 text-lg md:text-xl">{t('paragraph_one')}</p>
        <p className="mb-4 text-lg md:text-xl">{t('paragraph_two')}</p>
        <p className="mb-4 text-lg md:text-xl">{t('paragraph_three')}</p>
        <p className="mb-8 text-lg md:text-xl">{t('paragraph_four')}</p>
        <a
          href="#"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          {t('heading_cta')}
        </a>
      </div>
    </div>
  );
};

export default Landing;
