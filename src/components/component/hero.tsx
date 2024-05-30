'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export default function Hero() {
  const t = useTranslations('Index');

  return (
    <section className="w-full py-12">
      <div className="container mt-20 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center md:space-y-8 lg:grid lg:grid-cols-2 lg:items-start lg:justify-between xl:space-y-10">
          <div className="space-y-2">
            <div className="animate-fade-in-up mt-20 inline rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold dark:bg-gray-800">
              {t('label')}
            </div>
            <h1 className="animate-fade-in-up text-4xl font-bold text-gray-900">
              {t('heading')}
            </h1>
            <p className="animate-fade-in-up max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {t('paragraph_two')}
            </p>
            <p className="animate-fade-in-up max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {t('paragraph_two')}
            </p>
            <p className="animate-fade-in-up max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {t('paragraph_three')}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 lg:items-end lg:space-y-10">
            <div className="grid gap-4">
              <img
                alt="Hero"
                src={t('hero_image_url')}
                className="animate-fade-in-up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
