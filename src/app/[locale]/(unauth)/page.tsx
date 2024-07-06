import { getTranslations } from 'next-intl/server';

import Landing from '@/components/Landing';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Testimonials',
  });

  return {
    
    description: t('meta_description'),
  };
}

export default function Testimonials() {
  return (
    <Landing
      translationsKey="Testimonials"
      backgroundType="image" // 'video' | 'image' | 'svg'
      backgroundSrc="/path/to/your/image.jpg" // URL for video/image or SVG content
    />
  );
}
