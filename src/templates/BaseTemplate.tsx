'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-10 max-w-screen-md lg:max-w-full">
        <header className="border-none">
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl">{t('description')}</h2>
            </div>
            <div className="shrink-0">
              <Image
                src={t('logo_Url')}
                alt="logo"
                width={126}
                height={126}
                className="mr-10 mt-10"
              />
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-900 focus:outline-none"
              >
                <svg
                  className="size-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="flex w-full flex-col lg:flex-row lg:justify-between">
              <ul className="flex flex-col flex-wrap gap-x-5 text-xl lg:flex-row">
                {props.leftNav}
              </ul>
              <ul className="flex flex-col flex-wrap gap-x-5 text-xl lg:flex-row">
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
