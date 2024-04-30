'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import HamburgerMenu from '@/components/ui/HamburgerMenu';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full px-20 py-10 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md lg:max-w-full">
        <header className="px-10">
          <div className="flex items-center justify-between">
            <HamburgerMenu isOpen={isMenuOpen} toggle={toggleMenu} />
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
              <ul className="flex flex-col gap-x-1 text-xl lg:flex-row">
                {props.leftNav}
              </ul>
            </nav>

            <nav className="hidden lg:block">
              <ul className="flex flex-wrap gap-x-1 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
          <div className="animate-fade-in pt-8">
            <h1 className="text-4xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
          </div>
        </header>

        <main>{props.children}</main>
      </div>
    </div>
  );
};

export { BaseTemplate };
