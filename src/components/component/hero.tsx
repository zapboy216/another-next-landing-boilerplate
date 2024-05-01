// Hero.tsx
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const t = useTranslations('Index');
  const ref = useRef<HTMLParagraphElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section className="w-full py-12">
    <div className="container mt-20 px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center md:space-y-8 lg:grid lg:grid-cols-2 lg:items-start lg:justify-between xl:space-y-10">
        <div className="space-y-2">
          <div className="animate-fade-in-down mt-20 inline rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold dark:bg-gray-800">
              {t('label')}
            </div>
            <h1 className="animate-fade-in-up text-4xl font-bold text-gray-900">
              {t('heading')}
            </h1>
            <p className="animate-fade-in mt-20 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {t('paragraph_one')}
            </p>
            <p className="animate-fade-in-down mt-20 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {t('paragraph_two')}
            </p>
            <p className="animate-fade-in-up mt-20 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {t('paragraph_three')}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 lg:items-end lg:space-y-10">
            <div className="grid gap-4">
              <img
                alt="Hero"
                src={t('hero_image_url')}
                className="animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// components/Hero.tsx


  return (
    <section className="w-full py-12">
      <div className="container mt-20 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center md:space-y-8 lg:grid lg:grid-cols-2 lg:items-start lg:justify-between xl:space-y-10">
          <div className="space-y-2">
            <div className="animate-fade-in-down mt-20 inline rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold dark:bg-gray-800">
              {t('label')}
            </div>
            <h1 className="animate-fade-in-up text-4xl font-bold text-gray-900">
              {t('heading')}
            </h1>
            <p ref={ref} className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} mt-20 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl`}>
              {t('paragraph_one')}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 lg:items-end lg:space-y-10">
            {/* Additional content as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};



