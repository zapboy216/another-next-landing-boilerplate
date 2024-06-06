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
          <div className="flex items-center justify-between pb-8 pt-16">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl">{t('description')}</h2>
            </div>
            <div className="shrink-0">
              {' '}
              {/* This div will hold the image and be pushed to the right */}
              <Image
                src={t('logo_Url')}
                alt="logo"
                width={96}
                height={96}
                className="mt-10"
              />
            </div>
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
