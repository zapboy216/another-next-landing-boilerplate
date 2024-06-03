'use client';

import { Link } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const t = useTranslations('RootLayout');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" text-gray-700 antialiased">
      <header className="border-b border-gray-300">
        <button className="block p-2 lg:hidden" onClick={toggleMobileMenu}>
          ☰
        </button>

        <div
          className={`justify-between lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <nav>
            <ul className="flex flex-col items-center gap-y-4 text-xl lg:flex-row lg:gap-x-10">
              <li className="ml-20">
                <Link
                  href="/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('home_link')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('about_link')}
                </Link>
              </li>
              <li>
                <Link
                  href="/guestbook/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('guestbook_link')}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('portfolio_link')}
                </Link>
              </li>
              <li>
                <a
                  className="border-none text-gray-700 hover:text-gray-900"
                  href="#"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex flex-col items-center gap-y-4 text-xl lg:flex-row lg:gap-x-5">
              <li>
                <Link
                  href="/sign-in/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('sign_in_link')}
                </Link>
              </li>

              <li>
                <Link
                  href="/sign-up/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('sign_up_link')}
                </Link>
              </li>

              <li>
                <LocaleSwitcher />
              </li>
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
