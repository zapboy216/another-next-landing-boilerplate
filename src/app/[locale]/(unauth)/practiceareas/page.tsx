// src/app/[locale]/(unauth)/practiceareas.tsx

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

export default function Testimonials() {
  return <Landing translationsKey="PracticeAreas" />;
}
