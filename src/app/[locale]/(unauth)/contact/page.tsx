// src/app/[locale]/(unauth)/contact.tsx

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import ContactForm from '@/components/ContactForm';
import Landing from '@/components/Landing';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Contact',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Contact() {
  const t = useTranslations('Contact');

  const paragraphs = [
    { id: '1', text: t('paragraph_one') },
    { id: '2', text: t('paragraph_two') },
    { id: '3', text: '' },
    { id: '4', text: '' },
  ];

  return (
    <div>
      <Landing
        backgroundVideoUrl={t('backgroundVideoUrl')}
        splashHeading={t('splash_heading')}
        splashHeading1={t('splash_heading1')}
        paragraphs={paragraphs}
        ctaText={t('heading_cta')}
        imageUrl={t('hero_image_url')}
      />
      <ContactForm />
    </div>
  );
}
