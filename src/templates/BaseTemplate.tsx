// src/templates/BaseTemplate.tsx

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-10 max-w-screen-md lg:max-w-full">
        <header className="border-none">
          <div className="pb-8 pt-16">
            <h1 className="text-4xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
            <h2 className="text-xl">{t('description')}</h2>
          </div>
          <div>
            <Image
              src={imageUrl}
              alt="Dummy Attorney"
              width={400}
              height={400}
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{props.children}</main>

        <footer className="py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
