// src/app/index/page.tsx

'use client';

import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  const heroImageUrl = t('hero_image_url'); // Ensure you have a hero_image_url in your translations

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="container mx-auto flex items-center justify-between px-10">
        <div className="w-1/2 space-y-4">
          <h1 className="animate-fade-in-down text-4xl font-bold text-gray-800">
            A Freelance Software Development Firm
          </h1>
          <p className="animate-fade-in-up text-2xl text-gray-600">
            Innovative Web Solutions, Exceptional Expertise
          </p>
        </div>
        <div className="w-1/2">
          <img src={heroImageUrl} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
