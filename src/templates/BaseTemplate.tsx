'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

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
    <div className="w-full px-1 text-gray-700 antialiased">
      <header className="border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-900">{AppConfig.name}</h1>
        <button className="block p-2 lg:hidden" onClick={toggleMobileMenu}>
          ☰
        </button>

        <div
          className={`justify-between lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <nav>
            <ul className="flex flex-col items-center gap-y-4 text-xl lg:flex-row lg:gap-x-10">
              {props.leftNav}
            </ul>
          </nav>

          <nav>
            <ul className="flex flex-col items-center gap-y-4 text-xl lg:flex-row lg:gap-x-5">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.name}.
      </footer>
    </div>
  );
};

export { BaseTemplate };
