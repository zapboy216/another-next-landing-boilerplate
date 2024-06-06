// src/app/[locale]/(unauth)/practiceareas.tsx

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Landing from '@/components/Landing';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PracticeAreas',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function PracticeAreas() {
  const t = useTranslations('PracticeAreas');

  const paragraphs = [
    { id: '1', text: t('paragraph_one') },
    { id: '2', text: t('paragraph_two') },
    { id: '3', text: t('paragraph_three') },
    { id: '4', text: t('paragraph_four') },
  ];

  return (
    <Landing
      backgroundVideoUrl={t('backgroundVideoUrl')}
      splashHeading={t('splash_heading')}
      splashHeading1={t('splash_heading1')}
      paragraphs={paragraphs}
      ctaText={t('heading_cta')}
      imageUrl={t('hero_image_url')}
    />
  );
}
