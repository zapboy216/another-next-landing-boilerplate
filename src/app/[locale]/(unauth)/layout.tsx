import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/cases/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('cases_link')}
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
              href="/areas/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('areas_link')}
            </Link>
          </li>
          <li>
            <a
              className="border-none text-gray-700 hover:text-gray-900"
              href="/contact/"
            >
              CONTACT
            </a>
          </li>
        </>
      }
      rightNav={
        <li>
          <LocaleSwitcher />
        </li>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
