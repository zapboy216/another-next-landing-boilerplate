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

  return <Landing translationsKey="PracticeAreas" />;
}
