// src/app/[locale]/(unauth)/testimonials.tsx

import { getTranslations } from 'next-intl/server';

import Landing from '@/components/Landing';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Testimonials',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Testimonials() {
  return <Landing translationKey="Testimonials" />;
}
