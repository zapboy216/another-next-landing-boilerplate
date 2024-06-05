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
              href="/attorneys/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('attorneys_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/practiceareas/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('areas_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('testimonials_link')}
            </Link>
          </li>
          <Link
            href="/contact/"
            className="border-none text-gray-700 hover:text-gray-900"
          >
            {t('contact_link')}
          </Link>
          <li />
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
