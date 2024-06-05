import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Attorneys',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Hello World!</h2>
    </>
  );
}
